import { subDays, startOfDay, endOfDay } from 'date-fns'

import Journal from '../models/journal'
import Account from '../models/account'
import Branch from '../models/branch'

// CODE: Fetch

const fetch = async ({ branch, size, page, type = 'journal', start_date, end_date } = {}) => {
  const startDate = start_date && startOfDay(new Date(start_date))
  const endDate = end_date && endOfDay(new Date(end_date))

  let lowerRangeCode, higherRangeCode

  switch (type) {
    case 'journal': {
      lowerRangeCode = 100000
      higherRangeCode = 500000
      break
    }
    case 'liabilities': {
      lowerRangeCode = 200000
      higherRangeCode = 300000
      break
    }
    case 'equities': {
      lowerRangeCode = 300000
      higherRangeCode = 400000
      break
    }
    case 'expenses': {
      lowerRangeCode = 400000
      higherRangeCode = 500000
      break
    }
    case 'incomes': {
      lowerRangeCode = 500000
      higherRangeCode = 600000
      break
    }
    default: {
      lowerRangeCode = 100000
      higherRangeCode = 500000
    }
  }

  const journal = await Journal.fetch(branch, { size, page, lowerRangeCode, higherRangeCode, startDate, endDate })

  return journal
}

const fetchOne = async ({ id }) => {
  const journal = await Journal.fetchOne(id)

  return journal
}

// CODE: Create

const create = async ({ date, branch, credit, credit_note, debit, debit_note, description, amount, comment } = {}) => {
  const creditAccount = await Account.fetchOne(credit)
  const debitAccount = await Account.fetchOne(debit)

  const newJournal = await Journal.create({
    date,
    branch,
    credit      : creditAccount,
    credit_note,
    debit       : debitAccount,
    debit_note,
    description,
    amount,
    comment,
  })

  const { id } = newJournal

  const serial = id.substring(id.length - 6)

  await Journal.modify(id, { serial })

  const creditType = creditAccount.type
  const debitType = debitAccount.type

  // CAVEAT: Adds journal entry in account collection
  await Account.addJournal(credit, id)
  await Account.addJournal(debit, id)

  // NOTE: Adjusts balance according to transaction type

  // CAVEAT: Liabilities, Equities, Incomes --> Asset, Expenses
  if (
    (assets(debitType) && liabilities(creditType)) ||
    (assets(debitType) && incomes(creditType)) ||
    (assets(debitType) && equities(creditType)) ||
    (expenses(debitType) && liabilities(creditType))
  ) {
    console.log('Lib -> Ass')
    await Account.modifyBalance(credit, amount)
    await Account.modifyBalance(debit, amount)

    await Branch.modifyBalance(branch, creditType, +amount)
    await Branch.modifyBalance(branch, debitType, +amount)

    // CAVEAT: Asset, Expenses --> Liabilities, Equities, Incomes
  } else if ((liabilities(debitType) && assets(creditType)) || (equities(debitType) && assets(creditType))) {
    console.log('Ass -> Lib')
    await Account.modifyBalance(credit, -amount)
    await Account.modifyBalance(debit, -amount)

    await Branch.modifyBalance(branch, creditType, -amount)
    await Branch.modifyBalance(branch, debitType, -amount)

    // CAVEAT: Transaction between same type of account
  } else if (
    (assets(debitType) && assets(creditType)) ||
    (expenses(debitType) && assets(creditType)) ||
    (assets(debitType) && expenses(creditType)) ||
    (assets(debitType) && incomes(creditType)) ||
    (incomes(debitType) && assets(creditType))
  ) {
    console.log('Ass -> Ass')
    await Account.modifyBalance(credit, -amount)
    await Account.modifyBalance(debit, +amount)

    await Branch.modifyBalance(branch, creditType, -amount)
    await Branch.modifyBalance(branch, debitType, +amount)
  }

  // NOTE: Checks for inter branch capability
  const interbranchAccount = await Account.fetchInterBranch(debit)

  if (interbranchAccount) {
    const { to_branch, due, deposit } = interbranchAccount.interbranch

    const dueCreditAccout = await Account.fetchOne(due)
    const dueDebitAccout = await Account.fetchOne(deposit)

    const { id } = await create({
      date,
      branch      : to_branch,
      credit_note,
      credit      : dueCreditAccout,
      debit_note,
      debit       : dueDebitAccout,
      description : `From: ${creditAccount.name}, to: ${debitAccount.name}`,
      amount,
    })

    await Account.addJournal(dueCreditAccout.id, id)
    await Account.addJournal(dueDebitAccout.id, id)
  }

  return newJournal
}

// CODE: Modify

const modify = async ({ id, date, credit_note, debit_note, description, comment } = {}) => {
  await Journal.modify(id, {
    date,
    credit_note,
    debit_note,
    description,
    comment,
  })

  const modifiedJournal = await Journal.fetchOne(id)

  return modifiedJournal
}

const activate = async ({ id }) => {
  await Journal.enable(id)
}

const deactivate = async ({ id }) => {
  await Journal.disable(id)
}

/* -------------------------------- UTILITIES ------------------------------- */

const assets = type => type === 'assets'
const liabilities = type => type === 'liabilities'
const equities = type => type === 'equities'
const expenses = type => type === 'expenses'
const incomes = type => type === 'incomes'

const typeFinder = code => {
  switch (+('' + code)[0]) {
    case 1:
      return 'assets'
    case 2:
      return 'liabilities'
    case 3:
      return 'equities'
    case 4:
      return 'expenses'
    case 5:
      return 'incomes'
  }
}

export default { fetch, fetchOne, create, modify, activate, deactivate }

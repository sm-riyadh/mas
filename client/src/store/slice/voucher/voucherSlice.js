import { createSlice } from '@reduxjs/toolkit'

import { fetchJournal } from './voucherAsync'

const voucherSlice = createSlice({
  name          : 'voucher',
  initialState  : {
    voucher : {
      id            : '605142d9fc13ae7757000000',
      day           : '30',
      month         : 'JAN',
      year          : '2020',
      create_by     : 'Padriac',
      audit_by      : 'Fields',
      cash_in_hand  : '$0.16',
      expenses      : '$9.96',
      incomes       : '$7.85',
      credit_amount : '$4.21',
      debit_amount  : '$12.36',
      credit        : [
        {
          id      : '6053e76a456ec4898cef356a',
          no      : 0,
          credit  : 'NETPLAX',
          purpose : 'sunt labore sit',
          amount  : '$3,323.31',
        },
        {
          id      : '6053e76a1ab119646c243c6a',
          no      : 1,
          credit  : 'FUTURIS',
          purpose : 'aliqua quis aliqua',
          amount  : '$1,166.76',
        },
        {
          id      : '6053e76a42588c988a633e75',
          no      : 2,
          credit  : 'XINWARE',
          purpose : 'qui amet cupidatat',
          amount  : '$3,362.73',
        },
        {
          id      : '6053e76ace35c525ab3d7fde',
          no      : 3,
          credit  : 'BLURRYBUS',
          purpose : 'est commodo adipisicing',
          amount  : '$3,690.90',
        },
        {
          id      : '6053e76a77c2285723989be3',
          no      : 4,
          credit  : 'COMCUBINE',
          purpose : 'ipsum id incididunt',
          amount  : '$1,283.13',
        },
        {
          id      : '6053e76ab3377a93f6ab7862',
          no      : 5,
          credit  : 'EMPIRICA',
          purpose : 'ipsum consectetur esse',
          amount  : '$1,166.28',
        },
        {
          id      : '6053e76a14b30aeaf13ab6fe',
          no      : 6,
          credit  : 'THREDZ',
          purpose : 'incididunt excepteur fugiat',
          amount  : '$1,789.24',
        },
        {
          id      : '6053e76aee073a1f1861a611',
          no      : 7,
          credit  : 'WATERBABY',
          purpose : 'laborum cupidatat cupidatat',
          amount  : '$1,444.95',
        },
        {
          id      : '6053e76a9b04ed8d8e0eca65',
          no      : 8,
          credit  : 'TURNLING',
          purpose : 'dolor aute pariatur',
          amount  : '$1,795.51',
        },
        {
          id      : '6053e76a97486d4191d1bded',
          no      : 9,
          credit  : 'BARKARAMA',
          purpose : 'adipisicing quis nostrud',
          amount  : '$3,524.98',
        },
        {
          id      : '6053e76a4d30d5b61a197fd4',
          no      : 10,
          credit  : 'QUALITEX',
          purpose : 'minim laborum quis',
          amount  : '$3,691.79',
        },
      ],
      debit         : [
        {
          id      : '6053e7406afcc25f5a5c79eb',
          no      : 0,
          debit   : 'ZENOLUX',
          purpose : 'proident qui amet',
          amount  : '$1,414.41',
        },
        {
          id      : '6053e740f6dd2fdd7a58776d',
          no      : 1,
          debit   : 'XYQAG',
          purpose : 'cillum velit duis',
          amount  : '$1,485.40',
        },
        {
          id      : '6053e740412103771e890808',
          no      : 2,
          debit   : 'EARTHMARK',
          purpose : 'consequat voluptate aliquip',
          amount  : '$2,851.12',
        },
        {
          id      : '6053e7403ab47314c18283b6',
          no      : 3,
          debit   : 'SURELOGIC',
          purpose : 'consectetur dolore aute',
          amount  : '$1,980.45',
        },
        {
          id      : '6053e740142f68f81a7bd62a',
          no      : 4,
          debit   : 'ECRAZE',
          purpose : 'consequat amet incididunt',
          amount  : '$3,710.60',
        },
        {
          id      : '6053e7403cab43da1dd787ea',
          no      : 5,
          debit   : 'EXOSIS',
          purpose : 'tempor exercitation consequat',
          amount  : '$1,254.23',
        },
        {
          id      : '6053e740356b6d544c6477ff',
          no      : 6,
          debit   : 'NAMEGEN',
          purpose : 'ex labore sunt',
          amount  : '$3,479.17',
        },
        {
          id      : '6053e7408c48ef486d4a94c5',
          no      : 7,
          debit   : 'MAROPTIC',
          purpose : 'voluptate id labore',
          amount  : '$3,246.08',
        },
        {
          id      : '6053e740d9edbcb14fadbbba',
          no      : 8,
          debit   : 'OLUCORE',
          purpose : 'aliquip laborum magna',
          amount  : '$1,984.93',
        },
        {
          id      : '6053e740ef61843e52311eef',
          no      : 9,
          debit   : 'DOGNOSIS',
          purpose : 'ullamco reprehenderit in',
          amount  : '$1,600.23',
        },
        {
          id      : '6053e7409bc079fec9afcd4b',
          no      : 10,
          debit   : 'DIGIAL',
          purpose : 'velit voluptate cupidatat',
          amount  : '$1,998.00',
        },
        {
          id      : '6053e7406b43521882091338',
          no      : 11,
          debit   : 'RECOGNIA',
          purpose : 'cupidatat occaecat ipsum',
          amount  : '$1,567.69',
        },
        {
          id      : '6053e7405900e10897aeb1ff',
          no      : 12,
          debit   : 'ISOLOGICS',
          purpose : 'qui nostrud ad',
          amount  : '$2,564.85',
        },
        {
          id      : '6053e74000f0f38f744b24ae',
          no      : 13,
          debit   : 'MAGNAFONE',
          purpose : 'proident qui in',
          amount  : '$2,271.30',
        },
      ],
    },
    status  : '',
    error   : '',
  },
  extraReducers : {
    [fetchJournal.pending]: state => {
      state.status = 'loading'
    },
    [fetchJournal.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },
    [fetchJournal.fulfilled]: (state, { payload }) => {
      state.voucher = payload
      state.status = 'success'
    },
  },
  reducers      : {
    replace(state, { payload }) {
      state[payload.key].push(payload.data)
    },
    add(state, { payload }) {
      state[payload.key].push(payload.data)
    },
    modify(state, { payload }) {
      state[payload.key].push(payload.data)
    },
    remove(state, { payload }) {
      state[payload.key].push(payload.data)
    },
  },
})

export const state = ({ voucher, status, error }) => ({
  voucher,
  status,
  error,
})
export const { replace, add, modify, remove } = voucherSlice.actions
export default voucherSlice.reducer

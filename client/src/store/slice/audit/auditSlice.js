import { createSlice } from '@reduxjs/toolkit'

import { fetchAudit } from './auditAsync'

const auditSlice = createSlice({
  name          : 'audit',
  initialState  : {
    audit  : [
      {
        id           : '605142d9fc13ae7757000000',
        day          : '1',
        month        : 'February',
        year         : '2020',
        create_by    : 'Padriac',
        cash_in_hand : '$0.16',
        expenses     : '$9.96',
        incomes      : '$7.85',
      },
      {
        id           : '605142d9fc13ae7757000000',
        day          : '31',
        month        : 'January',
        year         : '2020',
        create_by    : 'Padriac',
        cash_in_hand : '$0.16',
        expenses     : '$9.96',
        incomes      : '$7.85',
      },
      {
        id           : '605142d9fc13ae7757000040',
        day          : '30',
        month        : 'January',
        year         : '2020',
        create_by    : 'Padriac',
        cash_in_hand : '$0.16',
        expenses     : '$9.96',
        incomes      : '$7.85',
      },
      {
        id           : '605142d9fc13ae7757000001',
        day          : '29',
        month        : 'January',
        year         : '2020',
        create_by    : 'Lind',
        cash_in_hand : '$3.87',
        expenses     : '$9.14',
        incomes      : '$3.33',
      },
      {
        id           : '605142d9fc13ae7757000002',
        day          : '28',
        month        : 'January',
        year         : '2020',
        create_by    : 'Gwen',
        cash_in_hand : '$0.93',
        expenses     : '$3.85',
        incomes      : '$4.11',
      },
      {
        id           : '605142d9fc13ae7757000003',
        day          : '28',
        month        : 'January',
        year         : '2020',
        create_by    : 'Giacinta',
        cash_in_hand : '$3.97',
        expenses     : '$5.19',
        incomes      : '$6.12',
      },
      {
        id           : '605142d9fc13ae7757000004',
        day          : '28',
        month        : 'January',
        year         : '2020',
        create_by    : 'Kirby',
        cash_in_hand : '$4.90',
        expenses     : '$7.73',
        incomes      : '$8.89',
      },
      {
        id           : '605142d9fc13ae7757000005',
        day          : '28',
        month        : 'January',
        year         : '2020',
        create_by    : 'Dre',
        cash_in_hand : '$0.63',
        expenses     : '$7.43',
        incomes      : '$7.90',
      },
    ],
    status : '',
    error  : '',
  },
  extraReducers : {
    [fetchAudit.pending]: state => {
      state.status = 'loading'
    },
    [fetchAudit.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },
    [fetchAudit.fulfilled]: (state, { payload }) => {
      state.audit = payload
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

export const state = ({ audit, status, error }) => ({
  audit,
  status,
  error,
})
export const { replace, add, modify, remove } = auditSlice.actions
export default auditSlice.reducer

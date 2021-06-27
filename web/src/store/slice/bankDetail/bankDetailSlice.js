import { createSlice } from '@reduxjs/toolkit'

import { fetchBank } from './bankDetailAsync'

const bankDetailSlice = createSlice({
  name          : 'bankDetail',
  initialState  : {
    bankDetail : {
      id      : '6053f7eb9758bbcab1af7390',
      initial : 'CON',
      name    : 'Malathion',
      balance : '$1,867.69',
      loan    : '$3,950.30',
      credit  : [
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
      ],
      debit   : [
        {
          id      : '6053e76a456ec4898cef356a',
          no      : 0,
          debit   : 'NETPLAX',
          purpose : 'sunt labore sit',
          amount  : '$3,323.31',
        },
        {
          id      : '6053e76a1ab119646c243c6a',
          no      : 1,
          debit   : 'FUTURIS',
          purpose : 'aliqua quis aliqua',
          amount  : '$1,166.76',
        },
        {
          id      : '6053e76a42588c988a633e75',
          no      : 2,
          debit   : 'XINWARE',
          purpose : 'qui amet cupidatat',
          amount  : '$3,362.73',
        },
        {
          id      : '6053e76ace35c525ab3d7fde',
          no      : 3,
          debit   : 'BLURRYBUS',
          purpose : 'est commodo adipisicing',
          amount  : '$3,690.90',
        },
        {
          id      : '6053e76a77c2285723989be3',
          no      : 4,
          debit   : 'COMCUBINE',
          purpose : 'ipsum id incididunt',
          amount  : '$1,283.13',
        },
        {
          id      : '6053e76ab3377a93f6ab7862',
          no      : 5,
          debit   : 'EMPIRICA',
          purpose : 'ipsum consectetur esse',
          amount  : '$1,166.28',
        },
      ],
    },
    status     : '',
    error      : '',
  },
  extraReducers : {
    [fetchBank.pending]: state => {
      state.status = 'loading'
    },
    [fetchBank.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },
    [fetchBank.fulfilled]: (state, { payload }) => {
      state.bankDetail = payload
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

export const state = ({ bankDetail, status, error }) => ({
  bankDetail,
  status,
  error,
})
export const { replace, add, modify, remove } = bankDetailSlice.actions
export default bankDetailSlice.reducer

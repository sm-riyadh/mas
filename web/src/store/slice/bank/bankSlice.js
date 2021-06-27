import { createSlice } from '@reduxjs/toolkit'

import { fetchBank } from './bankAsync'

const bankSlice = createSlice({
  name          : 'bank',
  initialState  : {
    bank   : [
      {
        id      : '6053f7eb9758bbcab1af7390',
        initial : 'CON',
        name    : 'Malathion',
        balance : '$1,867.69',
        loan    : '$3,950.30',
      },
      {
        id      : '6053f7eb1572224a7963250d',
        initial : 'CEN',
        name    : 'Biolive',
        balance : '$1,328.77',
        loan    : '$3,348.81',
      },
      {
        id      : '6053f7eb264a50d4db9d29be',
        initial : 'ZER',
        name    : 'Savvy',
        balance : '$2,039.09',
        loan    : '$1,000.32',
      },
      {
        id      : '6053f7eb7e7004952cc01740',
        initial : 'INT',
        name    : 'Portica',
        balance : '$1,440.48',
        loan    : '$1,669.86',
      },
      {
        id      : '6053f7eb20f2380a43cba644',
        initial : 'MAN',
        name    : 'Bizmatic',
        balance : '$2,667.87',
        loan    : '$1,107.16',
      },
      {
        id      : '6053f7ebcb51f6eb8a81ea3c',
        initial : 'JUN',
        name    : 'Micronaut',
        balance : '$2,563.20',
        loan    : '$3,597.69',
      },
      {
        id      : '6053f7eb23ffd2946310d43d',
        initial : 'KON',
        name    : 'Petigems',
        balance : '$3,751.94',
        loan    : '$1,539.69',
      },
      {
        id      : '6053f7ebc06f95a66799b510',
        initial : 'BRA',
        name    : 'Mediot',
        balance : '$1,496.59',
        loan    : '$1,649.15',
      },
      {
        id      : '6053f7eb87cb8f355eab1763',
        initial : 'AMT',
        name    : 'Genmy',
        balance : '$1,979.70',
        loan    : '$3,895.54',
      },
      {
        id      : '6053f7eb4d968be24e7f9724',
        initial : 'EAR',
        name    : 'Virva',
        balance : '$3,662.24',
        loan    : '$2,942.44',
      },
      {
        id      : '6053f7eb044d3e6a3afebbfe',
        initial : 'TAS',
        name    : 'Primordia',
        balance : '$1,153.72',
        loan    : '$1,081.49',
      },
      {
        id      : '6053f7eb494255e96fdeb6c6',
        initial : 'UBE',
        name    : 'Terrago',
        balance : '$3,927.04',
        loan    : '$3,782.04',
      },
      {
        id      : '6053f7ebe084d63d63c27ade',
        initial : 'KAN',
        name    : 'Uncorp',
        balance : '$3,624.84',
        loan    : '$3,806.12',
      },
    ],
    status : '',
    error  : '',
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
      state.bank = payload
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

export const state = ({ bank, status, error }) => ({
  bank,
  status,
  error,
})
export const { replace, add, modify, remove } = bankSlice.actions
export default bankSlice.reducer

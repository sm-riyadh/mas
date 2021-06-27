import { createAsyncThunk } from '@reduxjs/toolkit'

import Api from '../../api/rest'

const url = 'posts'

const fetchBank = createAsyncThunk('journal/fetchBank', async ({ _limit }, { dispatch, getState }) => {
  const params = []
  const query = { _limit }

  return await Api.fetch({ url, params, query })
})

export { fetchBank }

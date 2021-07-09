import { createAsyncThunk } from '@reduxjs/toolkit'

import Api from '../../api/rest'

const url = 'posts'

const fetchJournal = createAsyncThunk('journal/fetchJournal', async ({ _limit }, { dispatch, getState }) => {
  const params = []
  const query = { _limit }

  return await Api.fetch({ url, params, query })
})

export { fetchJournal }

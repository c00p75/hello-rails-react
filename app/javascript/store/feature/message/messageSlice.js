import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  data: ' ',
}

const baseUrl = '/api/v1/greetings/1'

export const fetchMessage = createAsyncThunk('greetings/fetchmessage', async () => {
  return fetch('/api/v1/greetings/1')
  .then(response => response.json())
  .then(data => data.message)
});

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  extraReducers(builder) {
    builder.
      addCase(fetchMessage.fulfilled, (state, action) => {
        console.log(action.payload)
        state.data = action.payload;
      })
  },
});

export default messageSlice.reducer

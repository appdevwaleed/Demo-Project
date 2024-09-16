import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {urls} from '../../config';

// Create an async thunk to handle API call
export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const response = await axios.get(urls.API_BASE_URL);
  return response.data;
});

interface UsersState {
  data: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    // Clear cache if needed
    clearCache(state) {
      state.data = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {clearCache} = apiSlice.actions;

export default apiSlice.reducer;

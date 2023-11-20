// apiSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getallSimdata} from "@/services/api";
// import {RootState} from '../store'

interface ApiState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAllSimData = createAsyncThunk('api/fetchCmsData', async () => {
  const response = await getallSimdata();
  console.log(response,"all CMS data")
  return response;
});

const apiSimSlice = createSlice({
  name: 'simapi',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSimData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllSimData.fulfilled, (state, action) => {
       console.log("reducer from slice example", action);
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAllSimData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

export default apiSimSlice.reducer;
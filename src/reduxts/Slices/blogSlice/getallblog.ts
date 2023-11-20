// apiSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getallBlogdata} from "@/services/api";
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

export const fetchAllBlogData = createAsyncThunk('api/fetchCmsData', async () => {
  const response = await getallBlogdata();
  console.log(response,"all CMS data")
  return response;
});

const apiBlogSlice = createSlice({
  name: 'apis',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBlogData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllBlogData.fulfilled, (state, action) => {
       console.log("reducer from slice example", action);
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAllBlogData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

export default apiBlogSlice.reducer;
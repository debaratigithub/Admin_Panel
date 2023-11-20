// apiSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getallCmsdata} from "@/services/api";
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

export const fetchallCmsdata = createAsyncThunk('api/fetchCmsData', async () => {
  const response = await getallCmsdata();
  console.log(response,"all CMS data")
  return response;
});

const apiCmsSlice = createSlice({
  name: 'apis',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchallCmsdata.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchallCmsdata.fulfilled, (state, action) => {
       console.log("reducer from slice example", action);
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchallCmsdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

// export const selectApiData = (state:RootState) => state.api.data;
// export const selectApiLoading = (state:RootState) => state.api.loading;
// export const selectApiError = (state: RootState) => state.api.error;



export default apiCmsSlice.reducer;
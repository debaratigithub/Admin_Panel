// apiSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getallStudentdata} from "@/services/api";
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

export const fetchallStudentdata = createAsyncThunk('api/fetchSomeData', async () => {
  const response = await getallStudentdata();
  //console.log(response,"all students data")
  return response;
});

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchallStudentdata.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchallStudentdata.fulfilled, (state, action) => {
       // console.log("reducer from slice example", action);
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchallStudentdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

// export const selectApiData = (state:RootState) => state.api.data;
// export const selectApiLoading = (state:RootState) => state.api.loading;
// export const selectApiError = (state: RootState) => state.api.error;



export default apiSlice.reducer;
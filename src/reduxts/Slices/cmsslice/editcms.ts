import { editCms } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface EditFormData {
  title: string;
  content: string;
}

interface EditDataState {
  data: EditFormData | null;
  loading: boolean;
  error: string | null;
}

export const editCmsData = createAsyncThunk<EditFormData, { data: EditFormData; id: string }>(
  "api/editCms",
  async ({ data, id }) => {
    try {
      const responseData = await editCms(data, id);

      if (responseData.status === true) {
        toast.success(responseData.message);
      } else {
        toast.error(responseData.message);
      }

      return responseData;
    } catch (error) {
      throw error;
    }
  }
);

const initialState: EditDataState = {
  data: null,
  loading: false,
  error: null,
};

const editCmsSlice = createSlice({
  name: "editcms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editCmsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        editCmsData.fulfilled,
        (state, action: PayloadAction<EditFormData>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(editCmsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default editCmsSlice.reducer;

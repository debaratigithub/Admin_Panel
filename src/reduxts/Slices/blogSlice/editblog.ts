import { editBlog } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface EditFormData {
  title: string;
  details: string;
}

interface EditDataState {
  data: EditFormData | null;
  loading: boolean;
  error: string | null;
}

export const editBlogData = createAsyncThunk<EditFormData, { data: EditFormData; id: string }>(
  "api/editBlog",
  async ({ data, id }) => {
    try {
      const responseData = await editBlog(data, id);

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

const editBlogSlice = createSlice({
  name: "editblog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editBlogData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        editBlogData.fulfilled,
        (state, action: PayloadAction<EditFormData>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(editBlogData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default editBlogSlice.reducer;

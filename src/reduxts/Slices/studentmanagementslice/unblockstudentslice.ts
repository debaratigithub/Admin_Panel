import { postblockStudent, postunblockStudent } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
//import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

interface userData {
  user_id: any;

}

interface DataState {
  unblockStudentData: userData | null;
  loading: boolean;
  error: string | null;
}




export const unblockStudent = createAsyncThunk<userData, userData>(
  "student/unBlock",
  async (data) => {


    const responseData = await postunblockStudent(data);

    if (responseData.status == true) {
      toast.success(responseData.message);


    }
    else {

      toast.error(responseData.message);
    }


    //router.push("/dashboard");
    console.log(responseData, "Data from forget password post response");

    return responseData;
  }
);

const initialState: DataState = {
  unblockStudentData: null,
  loading: false,
  error: null,
};

const unblockstudentSlice = createSlice({
  name: "adminforgetpassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(unblockStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        unblockStudent.fulfilled,
        (state, action: PayloadAction<userData>) => {
          //console.log("reducer from forgot pass slice example", action);
          state.loading = false;
          state.unblockStudentData = action.payload;
        }
      )
      .addCase(unblockStudent.rejected, (state, action) => {
        console.log("error", action);
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      })
    //   .addCase(unblockStudent.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(
    //     unblockStudent.fulfilled,
    //     (state, action: PayloadAction<userData>) => {
    //       console.log("reducer from forgot pass slice example", action);
    //       state.loading = false;
    //       state.blockStudentData = action.payload;
    //     }
    //   )
    //   .addCase(unblockStudent.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message || "An error occurred.";
    //   });
  },
});

export default unblockstudentSlice.reducer;

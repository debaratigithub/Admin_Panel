import { postblockStudent, postunblockStudent } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
//import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

interface userData {
  user_id: any;

}

interface DataState {
  blockStudentData: userData | null;
  loading: boolean;
  error: string | null;
}

export const blockStudent = createAsyncThunk<userData, userData>(
  "student/Block",
  async (data) => {


    const responseData = await postblockStudent(data);

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
  blockStudentData: null,
  loading: false,
  error: null,
};

const blockstudentSlice = createSlice({
  name: "adminforgetpassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(blockStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        blockStudent.fulfilled,
        (state, action: PayloadAction<userData>) => {
          //console.log("reducer from forgot pass slice example", action);
          state.loading = false;
          state.blockStudentData = action.payload;
        }
      )
      .addCase(blockStudent.rejected, (state, action) => {
        console.log("error", action);
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      })
      .addCase(unblockStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        unblockStudent.fulfilled,
        (state, action: PayloadAction<userData>) => {
          console.log("reducer from forgot pass slice example", action);
          state.loading = false;
          state.blockStudentData = action.payload;
        }
      )
      .addCase(unblockStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default blockstudentSlice.reducer;

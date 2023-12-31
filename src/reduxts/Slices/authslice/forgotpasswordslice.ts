import { fetchadminForgetpass } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
//import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

interface FormData {
  email: string;
  role: string;
}

interface DataState {
  forgetpassData: FormData | null;
  loading: boolean;
  error: string | null;
}

export const forgotPasswordData = createAsyncThunk<FormData, FormData>(
  "admin/ForgotPassword",
  async (data) => {
   
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}api/auth/forgot-password`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );
    // const responseData = await response.json();
    const responseData = await fetchadminForgetpass(data);

    if(responseData.status==true){
      toast.success(responseData.message);
     localStorage.setItem("AdminEmail", responseData.email)
      
    }
    else{
      
      toast.error(responseData.message);
    }

   
    //router.push("/dashboard");
    console.log(responseData, "Data from forget password post response");

    return responseData;
  }
);

const initialState: DataState = {
  forgetpassData: null,
  loading: false,
  error: null,
};

const forgotpasswordSlice = createSlice({
  name: "adminforgetpassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPasswordData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        forgotPasswordData.fulfilled,
        (state, action: PayloadAction<FormData>) => {
          //console.log("reducer from forgot pass slice example", action);
          state.loading = false;
          state.forgetpassData = action.payload;
        }
      )
      .addCase(forgotPasswordData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default forgotpasswordSlice.reducer;

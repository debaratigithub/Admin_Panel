import { fetchadminVerifyForgetpass } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
//import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

interface FormData {
  email: string;
  role: string;
  otp: string;
}

interface DataState {
  verifyForgetPassData: FormData | null;
  loading: boolean;
  error: string | null;
}

export const verifyforgotPassword = createAsyncThunk<FormData, FormData>(
  "admin/VerifyForgotPassword",
  async (data) => {
    //const router = useRouter();
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}api/auth/verify-forgot-password`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );
    // const responseData = await response.json();
    const responseData = await fetchadminVerifyForgetpass(data);

    if(responseData.status==true){
      toast.success(responseData.message);
       localStorage.setItem("Resetpasswordtoken", responseData.token)
      
    }
    else{
      
      toast.error(responseData.message);
    }
  
    console.log(responseData,"Data from post response")
    return responseData;
  }
);

const initialState: DataState = {
  verifyForgetPassData: null,
  loading: false,
  error: null,
};

const verifyforgotpasswordSlice = createSlice({
  name: "adminverifyforgetpass",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyforgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        verifyforgotPassword.fulfilled,
        (state, action: PayloadAction<FormData>) => {
          console.log("reducer from forgot pass slice example", action);
          state.loading = false;
          state.verifyForgetPassData = action.payload;
        }
      )
      .addCase(verifyforgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default verifyforgotpasswordSlice.reducer;


import { fetchadminResetpass } from '@/services/api';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
//import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

interface FormData {
  token: string;
  password: string;
 
}

interface DataState {
  resetpassData: FormData | null;
  loading: boolean;
  error: string | null;
}

export const resetPassword = createAsyncThunk<FormData, FormData>('admin/resetpassword', async (data) => {
    //const router = useRouter();
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/auth/reset-password`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
  // const responseData = await response.json();

   const responseData = await fetchadminResetpass(data);
  if(responseData.status==true){
    toast.success(responseData.message);
    // localStorage.setItem("Status", responseData.status)
    
  }
  else{
    
    toast.error(responseData.message);
  }
  //router.push("/dashboard");
  console.log(responseData,"Data from post response")
  
  return responseData;
});

const initialState: DataState = {
  resetpassData: null,
  loading: false,
  error: null,
};

const resetPasswordSlice = createSlice({
  name: 'adminresetpassword',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(resetPassword.fulfilled, (state, action: PayloadAction<FormData>) => {
        
        console.log("reducer from admin login slice example", action);    
        state.loading = false;
            state.resetpassData = action.payload;
           
          }).addCase(resetPassword.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.error.message || 'An error occurred.';
          })

     },
});


export default resetPasswordSlice.reducer;

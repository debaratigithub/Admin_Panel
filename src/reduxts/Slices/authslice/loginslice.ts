'use client'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";


interface FormData {
  email: string;
  password: string;
  role: string;
}

interface DataState {
  loginData: FormData | null;
  loading: boolean;
  error: string | null;
}

export const loginData = createAsyncThunk<FormData, FormData>('admin/loginData', async (data) => {
 //  const router = useRouter();
  const response = await fetch('https://nodeserver.mydevfactory.com:6014/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  if(responseData.status==true){
    toast.success(responseData.message);
    // localStorage.setItem("Status", responseData.status)
    
  }
  else{
    
    toast.error(responseData.message);
  }
  
 // router.push("/dashboard");
 // console.log(responseData,"Data from post response")
  
  return responseData;
});

const initialState: DataState = {
  loginData: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: 'adminlogin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loginData.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(loginData.fulfilled, (state, action: PayloadAction<FormData>) => {
     
      //  console.log("reducer from admin login slice example", action);    
        state.loading = false;
            state.loginData = action.payload;
           
          }).addCase(loginData.rejected,(state, action)=>{
            
            state.loading = false;
            state.error = action.error.message || 'An error occurred.';
          })

     },
});


export default loginSlice.reducer;

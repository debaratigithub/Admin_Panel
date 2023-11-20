import { addBlog } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
//import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";


interface FormData {
    name: string;
    title: string;
  details: string;
}

interface DataState {
  data: FormData | null;
  loading: boolean;
  error: string | null;
}

export const addBlogData = createAsyncThunk<FormData, FormData>(
  "api/addBlog",
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
    const responseData = await addBlog(data);

    if(responseData.status==true){
      toast.success(responseData.message);
     //localStorage.setItem("AdminEmail", responseData.email)
      
    }
    else{
      
      toast.error(responseData.message);
    }

   
    //router.push("/dashboard");
    console.log(responseData, "Add Blog Data");

    return responseData;
  }
);

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

const addBlogSlice = createSlice({
  name: "addblognew",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBlogData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addBlogData.fulfilled,
        (state, action: PayloadAction<FormData>) => {
          //console.log("reducer from forgot pass slice example", action);
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(addBlogData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default addBlogSlice.reducer;

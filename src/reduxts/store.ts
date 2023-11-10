// store.ts
import { configureStore } from '@reduxjs/toolkit';
// import userReducer from '../reduxts/Slices/slice'
// import apiuserReducer from '../reduxts/Slices/sliceexample'
// import apipostReducer from '../reduxts/Slices/slicepostexample'
import adminloginReducer from '../reduxts/Slices/authslice/loginslice'
import adminforgotpasswordReducer from '../reduxts/Slices/authslice/forgotpasswordslice'
import admin_verifyforgotpasswordReducer from '../reduxts/Slices/authslice/verify_forgotPassword'

export const store = configureStore({
  reducer: {
    //redux toolkit testing purpous
    // usersData:userReducer,
    // apiusersData:apiuserReducer,
    // apipostusersData:apipostReducer,

//Admin authentication
    adminLoginData:adminloginReducer,
    adminForgotpasswordData:adminforgotpasswordReducer,
    admin_Verify_ForgotpasswordData: admin_verifyforgotpasswordReducer


  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



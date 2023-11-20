// store.ts
import { configureStore } from "@reduxjs/toolkit";
// import userReducer from '../reduxts/Slices/slice'
// import apiuserReducer from '../reduxts/Slices/sliceexample'
// import apipostReducer from '../reduxts/Slices/slicepostexample'
import adminloginReducer from "../reduxts/Slices/authslice/loginslice";
import adminforgotpasswordReducer from "../reduxts/Slices/authslice/forgotpasswordslice";
import admin_verifyforgotpasswordReducer from "../reduxts/Slices/authslice/verify_forgotPassword";
import admin_resetpasswordReducer from "../reduxts/Slices/authslice/resetpassword";
import admin_changepasswordReducer from "../reduxts/Slices/authslice/changepasswordslice";

//student
import get_all_studentReducer from '../reduxts/Slices/studentmanagementslice/getallstudent'
import get_studentReducer from '../reduxts/Slices/studentmanagementslice/getstudent'
import block_studentReducer from '../reduxts/Slices/studentmanagementslice/blockStudent'
import unblock_studentReducer from '../reduxts/Slices/studentmanagementslice/unblockstudentslice'



//tecaher
import get_all_teacherReducer from "../reduxts/Slices/teachermanagementslice/getallteacher";
import get_teacherReducer from "../reduxts/Slices/teachermanagementslice/getteacher";

//cms
import get_all_cmsReducer from "../reduxts/Slices/cmsslice/getallcms";
import add_cmsReducer from "../reduxts/Slices/cmsslice/addnewcms";
import edit_cmsReducer from '../reduxts/Slices/cmsslice/editcms';

//blog
import get_all_blogReducer from "../reduxts/Slices/blogSlice/getallblog";
import add_blogReducer from "../reduxts/Slices/blogSlice/addnewblog";
import edit_blogReducer from "../reduxts/Slices/blogSlice/editblog";

//Sim
import get_all_simReducer from "../reduxts/Slices/simSlice/getallsim";

export const store = configureStore({
  reducer: {
    //redux toolkit testing purpous
    // usersData:userReducer,
    // apiusersData:apiuserReducer,
    // apipostusersData:apipostReducer,

    //Admin authentication
    adminLoginData: adminloginReducer,
    adminForgotpasswordData: adminforgotpasswordReducer,
    admin_Verify_ForgotpasswordData: admin_verifyforgotpasswordReducer,
    admin_resetpasswordData: admin_resetpasswordReducer,
    admin_changepasswordData: admin_changepasswordReducer,

    //Student
    all_studentdata:get_all_studentReducer,
    studentdata:get_studentReducer,
    blockstudentdata:block_studentReducer,
    unblockstudentdata:unblock_studentReducer,


    //teacher
    all_teacherdata: get_all_teacherReducer,
    teacherdata: get_teacherReducer,

    //cms
    all_cmsdata: get_all_cmsReducer,
    new_cmsdata: add_cmsReducer,
    edit_cmsData : edit_cmsReducer,
    
    // blog
    all_blogData: get_all_blogReducer,
    new_blogData: add_blogReducer,
    edit_blogData: edit_blogReducer,

    //sim
    all_simData: get_all_simReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

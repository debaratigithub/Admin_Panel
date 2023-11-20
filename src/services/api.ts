//api.ts
import axios from 'axios';

// const getrefressToken =async (accesstoken:string) => {
//   try {
    
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}refresh-tokens`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

export const getnewAccesstoken = async (refresstoken:string) => {

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/refresh-tokens`,
      
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(refresstoken),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};


//Admin login api

export const fetchadminlogin = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//Admin forget password api
export const fetchadminForgetpass = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//Admin verify forget password api

export const fetchadminVerifyForgetpass = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/verify-forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//Admin reset password api

export const fetchadminResetpass = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};


//Admin change password api

export const fetchadminChangepass = async (data: any) => {
  let token = localStorage.getItem("access_token_key");
  let refresstoken =localStorage.getItem("referess_token_key");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/change-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error:any) {


    // if(responseData.status==true){
    //   toast.success(responseData.message);
    //    localStorage.setItem("access_token_key", responseData.tokens.access.token)
    //    localStorage.setItem("referess_token_key", responseData.tokens.refresh.token)
      
    // }
    // else{
      
    //   toast.error(responseData.message);
    // }
//++++++++++++++
    // if (error.response.status === 401) {
    //   // If the access token is expired, attempt to refresh it
      
    //     const refreshResponse =  getnewAccesstoken(`${refresstoken}`);
    //     localStorage.setItem("access_token_key", refreshResponse.tokens.access.token)
    //     localStorage.setItem("referess_token_key", refreshResponse.tokens.refresh.token)


  //   try {
  //     const refreshResponse = await axios.post('/api/auth/refresh-token', {
  //       refreshToken: / your refresh token here /,
  //     });

  //     // Update the access token in the context
  //     //setToken(refreshResponse.data.accessToken);

  //     // Retry the original request with the new access token
  //     // ...

  //   } catch (refreshError) {
  //     // Handle refresh error (e.g., redirect to login)
  //     // ...
  //   }
  // } 
     

    
    throw error;
  }
};



//Student management
export const getallStudentdata = async () => {
  try {
    //const response = await axios.get("https://nodeserver.mydevfactory.com:6014/api/student/get-all-students/");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/student/get-all-students/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Function to fetch a single student's data by ID
export const getStudentById = async (studentId:any) => {
  try {
    // Construct the API endpoint with the teacher ID
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}api/student/get-student-by-id/${studentId}`;
    
    // Fetch data from the API endpoint
    const response = await axios.get(apiUrl);
    
    // Return the data received from the API
    return response.data;
  } catch (error) {
    // Handle errors - log or throw as needed
   // console.error(`Error fetching teacher data for ID ${teacherId}:`, error);
    throw error;
  }
};

// Function to block  student

export const postblockStudent = async (data: any) => {
  let token = localStorage.getItem("access_token_key");
  let refresstoken =localStorage.getItem("referess_token_key");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/student/block-student-by-id`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};


// Function to unblock  student
export const postunblockStudent = async (data: any) => {
  let token = localStorage.getItem("access_token_key");
  let refresstoken =localStorage.getItem("referess_token_key");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/student/unblock-student-by-id`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};



//teacher management

export const getallTeacherdata = async () => {
  try {
    //const response = await axios.get("https://nodeserver.mydevfactory.com:6014/api/student/get-all-students/");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/teacher/get-all-teachers`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


//Single teacher 


// Function to fetch a single teacher's data by ID
export const getTeacherById = async (teacherId:any) => {
  try {
    // Construct the API endpoint with the teacher ID
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}api/teacher/get-teacher-by-id/${teacherId}`;
    
    // Fetch data from the API endpoint
    const response = await axios.get(apiUrl);
    
    // Return the data received from the API
    return response.data;
  } catch (error) {
    // Handle errors - log or throw as needed
   // console.error(`Error fetching teacher data for ID ${teacherId}:`, error);
    throw error;
  }
};

//cms management

// export const getallCmsdata = async () => {
//   try {
//     //const response = await axios.get("https://nodeserver.mydevfactory.com:6014/api/student/get-all-students/");
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/cms`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };


export const getallCmsdata = async () => {
  let token = localStorage.getItem("access_token_key");
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/cms`,
      {
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addCms = async (data: any) => {
  let token = localStorage.getItem("access_token_key");
  let refresstoken =localStorage.getItem("referess_token_key");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/cms/add/new-cms`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error:any) {


    // if(responseData.status==true){
    //   toast.success(responseData.message);
    //    localStorage.setItem("access_token_key", responseData.tokens.access.token)
    //    localStorage.setItem("referess_token_key", responseData.tokens.refresh.token)
      
    // }
    // else{
      
    //   toast.error(responseData.message);
    // }
//++++++++++++++
    // if (error.response.status === 401) {
    //   // If the access token is expired, attempt to refresh it
      
    //     const refreshResponse =  getnewAccesstoken(`${refresstoken}`);
    //     localStorage.setItem("access_token_key", refreshResponse.tokens.access.token)
    //     localStorage.setItem("referess_token_key", refreshResponse.tokens.refresh.token)


  //   try {
  //     const refreshResponse = await axios.post('/api/auth/refresh-token', {
  //       refreshToken: / your refresh token here /,
  //     });

  //     // Update the access token in the context
  //     //setToken(refreshResponse.data.accessToken);

  //     // Retry the original request with the new access token
  //     // ...

  //   } catch (refreshError) {
  //     // Handle refresh error (e.g., redirect to login)
  //     // ...
  //   }
  // } 
     

    
    throw error;
  }
};

export const editCms = async (data: any, id: string) => {
  let token = localStorage.getItem("access_token_key");
  let refresstoken =localStorage.getItem("referess_token_key");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/cms/update/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error:any) {


    // if(responseData.status==true){
    //   toast.success(responseData.message);
    //    localStorage.setItem("access_token_key", responseData.tokens.access.token)
    //    localStorage.setItem("referess_token_key", responseData.tokens.refresh.token)
      
    // }
    // else{
      
    //   toast.error(responseData.message);
    // }
//++++++++++++++
    // if (error.response.status === 401) {
    //   // If the access token is expired, attempt to refresh it
      
    //     const refreshResponse =  getnewAccesstoken(`${refresstoken}`);
    //     localStorage.setItem("access_token_key", refreshResponse.tokens.access.token)
    //     localStorage.setItem("referess_token_key", refreshResponse.tokens.refresh.token)


  //   try {
  //     const refreshResponse = await axios.post('/api/auth/refresh-token', {
  //       refreshToken: / your refresh token here /,
  //     });

  //     // Update the access token in the context
  //     //setToken(refreshResponse.data.accessToken);

  //     // Retry the original request with the new access token
  //     // ...

  //   } catch (refreshError) {
  //     // Handle refresh error (e.g., redirect to login)
  //     // ...
  //   }
  // } 
     

    
    throw error;
  }
};


export const getallBlogdata = async () => {
  let token = localStorage.getItem("access_token_key");
  try {
    //const response = await axios.get("https://nodeserver.mydevfactory.com:6014/api/student/get-all-students/");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/cms/get/all-blogs-list/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addBlog = async (data: any) => {
  let token = localStorage.getItem("access_token_key");
  let refresstoken =localStorage.getItem("referess_token_key");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/cms/blog/add/new-blog`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error:any) {


    // if(responseData.status==true){
    //   toast.success(responseData.message);
    //    localStorage.setItem("access_token_key", responseData.tokens.access.token)
    //    localStorage.setItem("referess_token_key", responseData.tokens.refresh.token)
      
    // }
    // else{
      
    //   toast.error(responseData.message);
    // }
//++++++++++++++
    // if (error.response.status === 401) {
    //   // If the access token is expired, attempt to refresh it
      
    //     const refreshResponse =  getnewAccesstoken(`${refresstoken}`);
    //     localStorage.setItem("access_token_key", refreshResponse.tokens.access.token)
    //     localStorage.setItem("referess_token_key", refreshResponse.tokens.refresh.token)


  //   try {
  //     const refreshResponse = await axios.post('/api/auth/refresh-token', {
  //       refreshToken: / your refresh token here /,
  //     });

  //     // Update the access token in the context
  //     //setToken(refreshResponse.data.accessToken);

  //     // Retry the original request with the new access token
  //     // ...

  //   } catch (refreshError) {
  //     // Handle refresh error (e.g., redirect to login)
  //     // ...
  //   }
  // } 
     

    
    throw error;
  }
};

export const editBlog = async (data: any, id: string) => {
  let token = localStorage.getItem("access_token_key");
  let refresstoken =localStorage.getItem("referess_token_key");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/cms/blog/update/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error:any) {


    // if(responseData.status==true){
    //   toast.success(responseData.message);
    //    localStorage.setItem("access_token_key", responseData.tokens.access.token)
    //    localStorage.setItem("referess_token_key", responseData.tokens.refresh.token)
      
    // }
    // else{
      
    //   toast.error(responseData.message);
    // }
//++++++++++++++
    // if (error.response.status === 401) {
    //   // If the access token is expired, attempt to refresh it
      
    //     const refreshResponse =  getnewAccesstoken(`${refresstoken}`);
    //     localStorage.setItem("access_token_key", refreshResponse.tokens.access.token)
    //     localStorage.setItem("referess_token_key", refreshResponse.tokens.refresh.token)


  //   try {
  //     const refreshResponse = await axios.post('/api/auth/refresh-token', {
  //       refreshToken: / your refresh token here /,
  //     });

  //     // Update the access token in the context
  //     //setToken(refreshResponse.data.accessToken);

  //     // Retry the original request with the new access token
  //     // ...

  //   } catch (refreshError) {
  //     // Handle refresh error (e.g., redirect to login)
  //     // ...
  //   }
  // } 
     

    
    throw error;
  }
};

export const getallSimdata = async () => {
  let token = localStorage.getItem("access_token_key");
  try {
    //const response = await axios.get("https://nodeserver.mydevfactory.com:6014/api/student/get-all-students/");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}api/cms/app/get/user-contact-us`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
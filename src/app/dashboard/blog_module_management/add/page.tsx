'use client'

//import CKEditorComponent from '@/app/components/ckeditor/page';
import React, { useState } from 'react';
import type { NextPage } from "next";
import { Box, Typography, TextField } from '@mui/material';
import dynamic from 'next/dynamic';
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../../../reduxts/hooks";
import { addBlogData } from "../../../../reduxts/Slices/blogSlice/addnewblog";
// addBlogData
import {fetchAllBlogData} from '../../../../reduxts/Slices/blogSlice/getallblog'
const CKEditorComponent = dynamic(() => import('../../../components/ckeditor/ck'), {
  ssr: false,
});

const Addblogs: NextPage = () =>  {
  const dispatch = useAppDispatch();
  const [editorData, setEditorData] = useState<string>('');
  const [blogName, setBlogName] = useState('');
  
  const handleEditorChange = (data: string) => {
    setEditorData(data);
  };
  const handleSave = (content: string) => {
    if(blogName === ''){
      toast.error("Blog title Can't be empty")
    }else if(content === ""){
      toast.error("Blog Content cam't be empty")
    }else{
      console.log("Blog Content to be saved:", content, blogName);
      const formData = {
        name : blogName,
        title: blogName,
        details: content
      }
      console.log("clicked",formData);

      dispatch(addBlogData(formData)).then((response: any) => {
        console.log(response.payload, "response from login component");
  
        if (response.payload.status == true) {
  
          console.log("Blog Added");
          dispatch(fetchAllBlogData());
          //router.push("/dashboard");
        } else {
          console.log("error in blog add");
        }
      });
    // You can save the content using an API call or any other method here.
  };
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setBlogName(newValue);

  };


  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <Typography variant="h3" component="h3" sx={{fontSize: '1.5em', fontWeight: '600', marginBottom: '10px'}}>
            Add New Blogs
          </Typography>
          
          <TextField
      label="Blog Title"
      variant="outlined"
      fullWidth
      value={blogName}
      onChange={handleInputChange}
      sx={{   "& .MuiOutlinedInput-root.Mui-focused": {
        "& > fieldset": {
  borderColor: "#002D62"
        }
      },
    
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "#0066b2",
        border: "solid 0.5px #0066b2"
      }
    },mb:2}}
    />
     <Typography  sx={{marginBottom: '10px', color: "#0a2351", fontSize:"1.25rem", marginLeft:1, }}>
          Blog  Content
          </Typography>
      <CKEditorComponent initialValue={editorData}
      // onEditorChange={handleEditorChange} 
      onSave={handleSave}
      />
      </Box>
      
    
  );
};

export default Addblogs;




"use client";
import type { NextPage } from "next";
//import CKEditorComponent from "@/app/components/ckeditor/page";
import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import dynamic from 'next/dynamic';

import { toast } from "react-toastify";
import { RootState} from '../../../../../reduxts/store'
import {useAppDispatch, useAppSelector} from '../../../../../reduxts/hooks'
import {fetchAllBlogData} from '../../../../../reduxts/Slices/blogSlice/getallblog'
import { editBlogData } from "../../../../../reduxts/Slices/blogSlice/editblog";

const CKEditorComponent = dynamic(() => import('../../../../components/ckeditor/ck'), {
  ssr: false,
});

interface Editblog {
  blogname:string;
  blogdetails: string;
 id: string
}

interface RouteParams {
  params: {
    editblog: string; // It's a string because it's URL-encoded JSON
  };
  searchParams: {};
}


//previouly done with any type
// const Editblog: NextPage = (params: any) => {
//   const EditData: any = JSON.parse(
//     decodeURIComponent(params.params.editblog)
//   );
//   console.log(
//     JSON.parse(decodeURIComponent(params.params.editblog)),
//     "++++++++++++"
//   );

const Editblog: NextPage<RouteParams> = ({ params }) => {
  const dispatch = useAppDispatch();
  const EditData: Editblog = JSON.parse(
    decodeURIComponent(params.editblog)
  );




  const [editorData, setEditorData] = useState(EditData.blogdetails);
  const [blogName, setBlogName] = useState(EditData.blogname);
  //console.log(editorData,"KKKKKKKKKK")

  const handleEditorChange = (data: string) => {
    setEditorData(data);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setBlogName(newValue);

  };

  const handleSave = (content: string) => {
    // You can save the content using an API call or any other method here.
    if(blogName === ''){
      toast.error("Blog title Can't be empty")
    }else if(content === ""){
      toast.error("Blog Content cam't be empty")
    }else{
      console.log("Blog Content to be saved:", content, blogName);
      const formData = {
        title: blogName,
        details: content
      }
      const Id = EditData.id
      console.log("clicked",formData);

      dispatch(editBlogData({ data: formData, id: Id })).then((response: any) => {
        console.log(response.payload, "response from edit blog");
  
        if (response.payload.status == true) {
  
          console.log("Blog Updated");
          dispatch(fetchAllBlogData());
          //router.push("/dashboard");
        } else {
          console.log("error in blog add");
        }
      });
    // You can save the content using an API call or any other method here.
  };
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Typography variant="h3" component="h3" sx={{fontSize: '1.5em', fontWeight: '600', marginBottom: '10px'}}>
            Edit Blog of {EditData.blogname}
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
      <CKEditorComponent
        initialValue={editorData}
        // onEditorChange={handleEditorChange}
        onSave={handleSave}
      />
      
    </Box>
  );
};

export default Editblog;

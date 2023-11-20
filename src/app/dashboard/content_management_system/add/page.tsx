'use client'

//import CKEditorComponent from '@/app/components/ckeditor/page';
import React, { useState } from 'react';
import type { NextPage } from "next";
import { Box, Typography, TextField  } from '@mui/material';
import dynamic from 'next/dynamic';
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../../../reduxts/hooks";
import { addCmsData } from "../../../../reduxts/Slices/cmsslice/addnewcms";

import {fetchallCmsdata} from '../../../../reduxts/Slices/cmsslice/getallcms'

const CKEditorComponent = dynamic(() => import('../../../components/ckeditor/ck'), {
  ssr: false,
});

const Addcontent: NextPage = () =>  {

  const dispatch = useAppDispatch();

  const [editorData, setEditorData] = useState<string>('');
  const [cmsTitle, setCmsTitle] = useState('');
  const handleEditorChange = (data: string) => {
    setEditorData(data);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCmsTitle(newValue);

  };
  const handleSave = (content: string) => {
    // You can save the content using an API call or any other method here.
    // console.log("Content to be saved:", content, cmsTitle);
    if(cmsTitle === ''){
      toast.error("Cms title Can't be empty")
    }else if(content === ""){
      toast.error("Cms Content cam't be empty")
    }else{
      console.log("Cms to be saved:", content, cmsTitle);
      const formData = {
        name : cmsTitle,
        title: cmsTitle,
        content: content
      }
      console.log("clicked",formData);

      dispatch(addCmsData(formData)).then((response: any) => {
        console.log(response.payload, "response from Cms");
  
        if (response.payload.status == true) {
  
          console.log("Cms Added");
          dispatch(fetchallCmsdata());
          //router.push("/dashboard");
        } else {
          console.log("error in cms add");
        }
      });
  };
  }
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <Typography variant="h3" component="h3" sx={{fontSize: '1.5em', fontWeight: '600', marginBottom: '10px'}}>
            Add New Content
          </Typography>
          <TextField
      label="Title"
      variant="outlined"
      fullWidth
      value={cmsTitle}
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
          Cms Content
          </Typography>
      <CKEditorComponent initialValue={editorData} 
      onSave={handleSave}
      />
      
    </Box>
  );
};

export default Addcontent;




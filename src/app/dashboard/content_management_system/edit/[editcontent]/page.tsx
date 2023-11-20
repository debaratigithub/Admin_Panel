"use client";
import type { NextPage } from "next";
//import CKEditorComponent from "@/app/components/ckeditor/page";
import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import dynamic from 'next/dynamic';

import { toast } from "react-toastify";
import { RootState} from '../../../../../reduxts/store'
import {useAppDispatch, useAppSelector} from '../../../../../reduxts/hooks'
import {fetchallCmsdata} from '../../../../../reduxts/Slices/cmsslice/getallcms'
import { editCmsData } from "../../../../../reduxts/Slices/cmsslice/editcms";

const CKEditorComponent = dynamic(() => import('../../../../components/ckeditor/ck'), {
  ssr: false,
});


interface Editcontent {
  contentname: string;
  contentdetails: string;
  id: string
}

interface RouteParams {
  params: {
    editcontent: string; // It's a string because it's URL-encoded JSON
  };
  searchParams: {};
}

//previouly done with any type
// const Editcontent: NextPage = (params: any) => {
//   const EditData: any = JSON.parse(
//     decodeURIComponent(params.params.editcontent)
//   );
  // console.log(
  //   JSON.parse(decodeURIComponent(params.params.editcontent)),
  //   "++++++++++++"
  // );


  const Editcontent: NextPage<RouteParams> = ({ params }) => {
    const dispatch = useAppDispatch();
    const EditData: Editcontent = JSON.parse(
      decodeURIComponent(params.editcontent)
    );


  const [editorData, setEditorData] = useState(EditData.contentdetails);
  const [cmsTitle, setCmsTitle] = useState(EditData.contentname);
  //console.log(editorData,"KKKKKKKKKK")

  const handleEditorChange = (data: string) => {
    setEditorData(data);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCmsTitle(newValue);

  };
  const handleSave = (content: string) => {
    // You can save the content using an API call or any other method here.
    if(cmsTitle === ''){
      toast.error("Cms title Can't be empty")
    }else if(content === ""){
      toast.error("Cms Content cam't be empty")
    }else{
      console.log("Cms to be saved:", content, cmsTitle);
      const formData = {
        title: cmsTitle,
        content: content
      }
      console.log("clicked",formData);
      const Id = EditData.id

      dispatch(editCmsData({ data: formData, id: Id })).then((response: any) => {
        console.log(response.payload, "response edit cms");
  
        if (response.payload.status == true) {
  
          console.log("Cms Updated");
          dispatch(fetchallCmsdata());
          //router.push("/dashboard");
        } else {
          console.log("error in Cms Edit");
        }
      });
  };
  }
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Typography variant="h3" component="h3" sx={{fontSize: '1.5em', fontWeight: '600', marginBottom: '10px'}}>
            Edit New Content of {EditData.contentname}
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
      <CKEditorComponent
        initialValue={editorData}
        //onEditorChange={handleEditorChange}
        onSave={handleSave}
      />
      
    </Box>
  );
};

export default Editcontent;

"use client";
import type { NextPage } from "next";
//import CKEditorComponent from "@/app/components/ckeditor/page";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import dynamic from 'next/dynamic';

const CKEditorComponent = dynamic(() => import('../../../../components/ckeditor/ck'), {
  ssr: false,
});


interface Editcontent {
  contentname: string;
  contentdetails: string;
  
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
    const EditData: Editcontent = JSON.parse(
      decodeURIComponent(params.editcontent)
    );


  const [editorData, setEditorData] = useState(EditData.contentdetails);
  //console.log(editorData,"KKKKKKKKKK")

  const handleEditorChange = (data: string) => {
    setEditorData(data);
  };

  const handleSave = (content: string) => {
    // You can save the content using an API call or any other method here.
    console.log("Content to be saved:", content);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <Typography variant="h3" component="h3" sx={{fontSize: '1.5em', fontWeight: '600', marginBottom: '10px'}}>
            Edit New Content of {EditData.contentname}
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

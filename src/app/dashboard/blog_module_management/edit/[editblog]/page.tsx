"use client";
import type { NextPage } from "next";
import CKEditorComponent from "@/app/components/ckeditor/page";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

interface Editblog {
  blogname:string;
  blogdetails: string;
 
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
  const EditData: Editblog = JSON.parse(
    decodeURIComponent(params.editblog)
  );




  const [editorData, setEditorData] = useState(EditData.blogdetails);
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
            Edit New Blog of {EditData.blogname}
          </Typography>
      <CKEditorComponent
        initialValue={editorData}
        //onEditorChange={handleEditorChange}
        onSave={handleSave}
      />
      
    </Box>
  );
};

export default Editblog;

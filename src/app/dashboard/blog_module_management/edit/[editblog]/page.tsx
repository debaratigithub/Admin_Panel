"use client";
import type { NextPage } from "next";
import CKEditorComponent from "@/app/components/ckeditor/page";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const Editblog: NextPage = (params: any) => {
  const EditData: any = JSON.parse(
    decodeURIComponent(params.params.editblog)
  );
  console.log(
    JSON.parse(decodeURIComponent(params.params.editblog)),
    "++++++++++++"
  );

  const [editorData, setEditorData] = useState(EditData.blogdetails);
  console.log(editorData,"KKKKKKKKKK")

  const handleEditorChange = (data: string) => {
    setEditorData(data);
  };

  const handleSave = (content: string) => {
    // You can save the content using an API call or any other method here.
    console.log("Content to be saved:", content);
  };

  return (
    <Box>
       <Typography variant="h3" component="h3">
            Edit New Blog of {EditData.blogname}
          </Typography>
      <CKEditorComponent
        initialValue={editorData}
        onEditorChange={handleEditorChange}
        onSave={handleSave}
      />
      
    </Box>
  );
};

export default Editblog;

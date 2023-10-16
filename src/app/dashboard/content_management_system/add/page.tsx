'use client'

import CKEditorComponent from '@/app/components/ckeditor/page';
import React, { useState } from 'react';
import type { NextPage } from "next";
import { Box, Typography } from '@mui/material';

const Addcontent: NextPage = () =>  {
  const [editorData, setEditorData] = useState<string>('');

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
            Add New Content
          </Typography>
      <CKEditorComponent initialValue={editorData} onEditorChange={handleEditorChange} 
      onSave={handleSave}
      />
      
    </Box>
  );
};

export default Addcontent;




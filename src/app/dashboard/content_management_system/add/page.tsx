'use client'

//import CKEditorComponent from '@/app/components/ckeditor/page';
import React, { useState } from 'react';
import type { NextPage } from "next";
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const CKEditorComponent = dynamic(() => import('../../../components/ckeditor/ck'), {
  ssr: false,
});

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
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <Typography variant="h3" component="h3" sx={{fontSize: '1.5em', fontWeight: '600', marginBottom: '10px'}}>
            Add New Content
          </Typography>
      <CKEditorComponent initialValue={editorData} 
      onSave={handleSave}
      />
      
    </Box>
  );
};

export default Addcontent;




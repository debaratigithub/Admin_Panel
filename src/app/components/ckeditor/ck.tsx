 'use client'

import React, { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Box, Button } from "@mui/material";

interface CKEditorProps {
  initialValue: string ;
 // onEditorChange: (value: string) => void;
  onSave: (content: string) => void;
}
const commonButton  = () => ({
  // margin: '10px 0',
  // padding: '10px 20px',
  // backgroundColor: '#1976d2!important',
  backgroundImage: 'linear-gradient(45deg, #1976d2 40%, #21CBF3 90%)!important' , // Set your gradient colors
  color: '#fff',
  border: 'none',
  fontSize: '16px',
  marginTop: 5, mb: 2 ,
  width:"30%",
  alignSelf:"center",
  // margin:"auto",
  textTransform: 'capitalize',
  "&:hover": {
    backgroundImage: 'linear-gradient(45deg, #FAFA33 40%, #edc627 80%)!important' ,
    border: 'none',
    color:"rgba(0,0,0,0.75)"
  }
})
const CKEditorComponent: React.FC<CKEditorProps> = ({
  initialValue,
  //onEditorChange,
 onSave,
}) => {
  const [editorContent, setEditorContent] = useState<string >(initialValue);
  const editorRef = useRef<any>();

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setData(initialValue);
    }
  }, [initialValue]);

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
   // onEditorChange(data);
    setEditorContent(data);
  };

  const handleSaveClick = () => {
    
    onSave(editorContent);
  };

  return (
    <Box>
      <CKEditor
        editor={ClassicEditor}
        //data={initialValue}
        data={editorContent}
        onReady={(editor) => {
          editorRef.current = editor;
        }}
        onChange={handleEditorChange}
        // onChange={(event, editor) => {
        //   const data = editor.getData();
        //  // onEditorChange(data);
        // }}
        //   onReady={ editor => {
        //     // You can store the "editor" and use when it is needed.
        //     console.log( 'Editor is ready to use!', editor );
        // } }
        // onChange={ ( event, editor ) => {
        //     const data = editor.getData();
        //     //onEditorChange(data);
        //     console.log( { event, editor, data } );
        // } }
        // onBlur={ ( event, editor ) => {
        //     console.log( 'Blur.', editor );
        // } }
        // onFocus={ ( event, editor ) => {
        //     console.log( 'Focus.', editor );
        // } }
      />
<Box sx={{display:"flex", justifyContent:"center", alignItems:"center", }}>

      <Button
        type="submit"
        fullWidth
        variant="outlined"
        // sx={{ mt: 3, mb: 2 }}
        sx={commonButton}
        onClick={handleSaveClick}
        >
        Save
      </Button>
        </Box>
      
    </Box>
  );
};

export default CKEditorComponent;


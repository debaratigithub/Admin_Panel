// 'use client'
// import React, { useEffect, useRef, useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { Box, Button } from "@mui/material";
// // import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

// import { Alignment } from '@ckeditor/ckeditor5-alignment';
// import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
// import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
// import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
// import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
// import { Essentials } from '@ckeditor/ckeditor5-essentials';
// import { Heading } from '@ckeditor/ckeditor5-heading';
// import {
//     Image,
//     ImageCaption,
//     ImageStyle,
//     ImageToolbar,
//     ImageUpload
// } from '@ckeditor/ckeditor5-image';
// import { Indent } from '@ckeditor/ckeditor5-indent';
// import { Link } from '@ckeditor/ckeditor5-link';
// import { List } from '@ckeditor/ckeditor5-list';
// import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
// import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
// import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
// import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
// import { TextTransformation } from '@ckeditor/ckeditor5-typing';

// const CKEditorComponent = () => {
//   return (
//     <Box>
//       <CKEditor
//         editor={ClassicEditor}
//         //data={initialValue}
//         data={""}
//         onChange={(e) => {
//           console.log(e);
//         }}
//         config={{
//           plugins:[
//             Alignment,
//             Autoformat,
//             BlockQuote,
//             Bold,
//             CloudServices,
//             Essentials,
//             Heading,
//             Image,
//             ImageCaption,
//             ImageStyle,
//             ImageToolbar,
//             ImageUpload,
//             Indent,
//             Italic,
//             Link,
//             List,
//             MediaEmbed,
//             Paragraph,
//             PasteFromOffice,
//             Table,
//             TableToolbar,
//             TextTransformation],
//           toolbar: {
//             items: [
//                 'alignment',
//                 'heading',
//                 '|',
//                 'bold',
//                 'italic',
//                 'link',
//                 'bulletedList',
//                 'numberedList',
//                 '|',
//                 'outdent',
//                 'indent',
//                 '|',
//                 'imageUpload',
//                 'blockQuote',
//                 'insertTable',
//                 'mediaEmbed',
//                 'undo',
//                 'redo'
//             ]
//         },

//         // This value must be kept in sync with the language defined in webpack.config.js.
//         language: 'en',
//         image: {
//             toolbar: [
//                 'imageTextAlternative',
//                 'toggleImageCaption',
//                 'imageStyle:inline',
//                 'imageStyle:block',
//                 'imageStyle:side'
//             ]
//         },
//         table: {
//             contentToolbar: [
//                 'tableColumn',
//                 'tableRow',
//                 'mergeTableCells'
//             ]
//         }
//         }}

//         // onChange={(event, editor) => {
//         //   const data = editor.getData();
//         //  // onEditorChange(data);
//         // }}
//         //   onReady={ editor => {
//         //     // You can store the "editor" and use when it is needed.
//         //     console.log( 'Editor is ready to use!', editor );
//         // } }
//         // onChange={ ( event, editor ) => {
//         //     const data = editor.getData();
//         //     //onEditorChange(data);
//         //     console.log( { event, editor, data } );
//         // } }
//         // onBlur={ ( event, editor ) => {
//         //     console.log( 'Blur.', editor );
//         // } }
//         // onFocus={ ( event, editor ) => {
//         //     console.log( 'Focus.', editor );
//         // } }
//       />
//     </Box>
//   );
// };

// export default CKEditorComponent;


//Old one

import React, { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Box, Button } from "@mui/material";

interface CKEditorProps {
  initialValue: string;
  onEditorChange: (value: string) => void;
  onSave: (content: string) => void;
}

const CKEditorComponent: React.FC<CKEditorProps> = ({
  initialValue,
  onEditorChange,
 onSave,
}) => {
  const [editorContent, setEditorContent] = useState(initialValue);
  const editorRef = useRef<any>();

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setData(initialValue);
    }
  }, [initialValue]);

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
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

      <Button
        type="submit"
        fullWidth
        variant="outlined"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSaveClick}
      >
        Save
      </Button>
      
    </Box>
  );
};

export default CKEditorComponent;


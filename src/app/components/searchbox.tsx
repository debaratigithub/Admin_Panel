// SearchBox.tsx
'use client'
import React from 'react';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  placeHolder : string;
}
const commonSearchBox  = () => ({
  
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {  borderRadius: '50px',boxShadow: "0px 2px 10px 3px rgba(0,0,0,0.24)" }
  },
 
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
borderColor: "orange"
      }
    },
  
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: "orange",
      border: "solid 0.5px orange"
    }
  },
  '&:hover': {
    borderRadius: '50px' 
  },
})



const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, placeHolder }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <TextField
      // label="Search"
      variant="outlined"
      fullWidth
      onChange={handleInputChange}
      margin="normal"
      placeholder={placeHolder}
      InputProps={{
        startAdornment: <SearchIcon style={{marginRight:"5px", color:"#aaa"}}/>,
      }}
      sx={commonSearchBox}
      
       
      
    />
  
  
  );
};

export default SearchBox;

// SearchBox.tsx
'use client'
import React from 'react';
import TextField from '@mui/material/TextField';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      onChange={handleInputChange}
      margin="normal"
    />
  );
};

export default SearchBox;

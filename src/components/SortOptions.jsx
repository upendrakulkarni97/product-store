import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const SortOptions = ({ value, onChange }) => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      width="100%" 
      mb={2} 
    >
      <FormControl fullWidth variant="outlined" >
        <InputLabel>Sort By</InputLabel>
        <Select
          value={value}
          onChange={e => onChange(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="">Sort By</MenuItem>
          <MenuItem value="price-asc">Price: Low to High</MenuItem>
          <MenuItem value="price-desc">Price: High to Low</MenuItem>
          <MenuItem value="name-asc">Name: A to Z</MenuItem>
          <MenuItem value="category">Category</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortOptions;

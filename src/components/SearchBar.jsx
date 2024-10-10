import React from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({ value, onChange }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      // width="100%"
      mb={2}
    >
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
        placeholder="Search products..."
        // sx={{
        //   width: { xs: "100%", md: "60%" }, // Full width on small screens, 33% on medium and larger screens
        // }}
      />
    </Box>
  );
};

export default SearchBar;

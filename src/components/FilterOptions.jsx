import React from "react";
import { Box, FormControl, Select, MenuItem, InputLabel } from "@mui/material";

const FilterOptions = ({ categories, filters, setFilters }) => {
  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceChange = (e) => {
    setFilters((prev) => ({ ...prev, priceRange: e.target.value }));
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      gap={2} 
      mb={2}
    >
      {/* Category Filter */}
      <FormControl variant="outlined" fullWidth>
        <InputLabel>All Categories</InputLabel>
        <Select
          value={filters.category}
          onChange={handleCategoryChange}
          label="All Categories"
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Price Range Filter */}
      <FormControl variant="outlined" fullWidth>
        <InputLabel>All Prices</InputLabel>
        <Select
          value={filters.priceRange}
          onChange={handlePriceChange}
          label="All Prices"
        >
          <MenuItem value="">All Prices</MenuItem>
          <MenuItem value="under50">Under $50</MenuItem>
          <MenuItem value="50to100">$50 - $100</MenuItem>
          <MenuItem value="above100">Above $100</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterOptions;

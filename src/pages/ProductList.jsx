import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import SortOptions from "../components/SortOptions";
import FilterOptions from "../components/FilterOptions";
import { Box, Grid } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
  });

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setFiltered(res.data);
    };

    // Fetch categories
    const fetchCategories = async () => {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(res.data);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    let temp = [...products];

    // Search
    if (searchQuery) {
      temp = temp.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (filters.category) {
      temp = temp.filter((product) => product.category === filters.category);
    }

    // Filter by price range
    if (filters.priceRange) {
      switch (filters.priceRange) {
        case "under50":
          temp = temp.filter((product) => product.price < 50);
          break;
        case "50to100":
          temp = temp.filter(
            (product) => product.price >= 50 && product.price <= 100
          );
          break;
        case "above100":
          temp = temp.filter((product) => product.price > 100);
          break;
        default:
          break;
      }
    }

    // Sort
    if (sortOption) {
      switch (sortOption) {
        case "price-asc":
          temp.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          temp.sort((a, b) => b.price - a.price);
          break;
        case "name-asc":
          temp.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "category":
          temp.sort((a, b) => a.category.localeCompare(b.category));
          break;
        default:
          break;
      }
    }

    setFiltered(temp);
  }, [searchQuery, sortOption, filters, products]);

  return (
    <Box className="container mx-auto p-5" m={5}>
       <Box mb={4}>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Search Bar */}
        <Grid item xs={12} md={6}>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </Grid>

        {/* Sort Options */}
        <Grid item xs={12} md={3}>
          <SortOptions value={sortOption} onChange={setSortOption} />
        </Grid>

        {/* Filter Options */}
        <Grid item xs={12} md={3}>
          <FilterOptions
            categories={categories}
            filters={filters}
            setFilters={setFilters}
          />
        </Grid>
      </Grid>
    </Box>
      <Box m={5}>
        {/* Product Grid */}
        <Grid container spacing={2}>
          {filtered?.map((product) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductList;

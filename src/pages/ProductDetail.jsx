import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    };

    fetchProduct();
  }, [id]);

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <Box>
      <Typography variant="h4" display={"flex"} alignItems={"center"}>
        Product Details
      </Typography>
      <Box display="flex" justifyContent="center" p={4}>
        <Card sx={{ maxWidth: 1000, width: "100%" }}>
          <Grid container spacing={4}>
            {/* Product Image */}
            <Grid item xs={12} md={5}>
              <CardMedia
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  height: { xs: "300px", md: "400px" },
                  objectFit: "contain",
                  p: 2,
                  maxWidth: "100%",
                  mx: "auto",
                }}
              />
            </Grid>

            {/* Product Details */}
            <Grid item xs={12} md={7}>
              <CardContent>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {product.title}
                </Typography>

                <Typography variant="h5" color="textSecondary" gutterBottom>
                  ${product.price}
                </Typography>

                <Typography variant="body1" color="textSecondary" paragraph>
                  {product.description}
                </Typography>

                <Typography variant="body2" color="textSecondary" mb={2}>
                  Category: {product.category}
                </Typography>

                <Box mt={4} display="flex" alignItems="center">
                  {/* Quantity Input */}
                  <TextField
                    type="number"
                    label="Quantity"
                    variant="outlined"
                    size="small"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    InputProps={{ inputProps: { min: 1 } }}
                    sx={{ width: "100px" }}
                  />

                  {/* Add to Cart Button */}
                  <Button
                    onClick={handleAdd}
                    variant="contained"
                    color="primary"
                    sx={{ ml: 2, py: 1, px: 4 }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Box>
  );
};

export default ProductDetail;

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, 1);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        height: { xs: "auto", sm: "250px" },
        width: "100%",
        mb: 5,
        gap: 3,
        bgcolor: "#F9F9F9",
      }}
    >
      {/* Product Image with Link */}
      <Box>
        <Link to={`/products/${product.id}`}>
          <CardMedia
            component="img"
            sx={{
              height: { xs: "250px", sm: "200px", md: "300px", lg: "100%" },
              width: { xs: "100%", sm: "350px", md: "150px", lg: "auto" },
              objectFit: "contain",
              mb: { xs: 2, sm: 0 },
            }}
            image={product.image}
            alt={product.title}
          />
        </Link>
      </Box>

      {/* Product Details */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          // px: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
            variant="h6"
            fontWeight="bold"
            gutterBottom
          >
            {product.title}
          </Typography>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
            variant="body2"
            color="textSecondary"
            gutterBottom
          >
            ${product.price}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.description}
          </Typography>
        </Box>

        {/* Add to Cart Button */}
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            size="small"
            onClick={handleAdd}
            variant="contained"
            color="primary"
            sx={{
              py: 1,
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

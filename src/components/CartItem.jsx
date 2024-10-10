import React from "react";
import { useCart } from "../context/CartContext";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value);
    if (qty > 0) {
      updateQuantity(item.id, qty);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        borderRadius: 2,
        width: "100%",
        maxWidth: 600,
        boxShadow: 3,
        mb:2
      }}
    >
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "96px",
          height: "96px",
          objectFit: "contain",
          marginRight: 16,
        }}
      />

      {/* Product Details */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
      </CardContent>

      {/* Quantity Input and Remove Button */}
      <Box display="flex" alignItems="center">
        {/* Quantity Input */}
        <TextField
          type="number"
          inputProps={{ min: 1 }}
          value={item.quantity}
          onChange={handleQuantityChange}
          variant="outlined"
          size="small"
          sx={{ width: "60px" }}
        />

        {/* Remove Button */}
        <IconButton
          onClick={() => handleRemove(item.id)}
          sx={{ color: "red", marginLeft: 2 }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CartItem;

import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  if (cart.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h5">Your Cart is Empty</Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Go Shopping
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Box sx={{ mb: 4 }}>
        {cart?.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Box>
      <Box sx={{ mt: 6, textAlign: "right" }}>
        <Typography variant="h6">Total: ${totalPrice}</Typography>
      </Box>
    </Container>
  );
};

export default Cart;

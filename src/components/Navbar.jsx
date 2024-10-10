import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static" sx={{ backgroundColor: "gray.800" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side - Logo or Brand */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "white" }}
        >
          Product Store
        </Typography>

        {/* Right side - Cart Link */}
        <Box>
          <IconButton
            component={Link}
            to="/cart"
            size="large"
            edge="end"
            color="inherit"
          >
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

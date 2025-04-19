import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useCart } from "../../Context/CartProvider";
import CartContent from "./CartContent";
import { Box } from "@mui/material";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function ShoppingCartIconWithBadge() {
  const {cart} = useCart();

  // Drawer state
  const [open, setOpen] = useState(false);

  // Toggle drawer handler
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)}>
        <ShoppingCartIcon fontSize="medium" color="action" />
        <CartBadge
          badgeContent={cart.length}
          color="info"
          overlap="circular"
        />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <CartContent />
      </SwipeableDrawer>
    </Box>
  );
}

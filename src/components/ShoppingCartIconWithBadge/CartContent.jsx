import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart, useDispatch } from "../../Context/CartProvider";
import { Stack, Typography, Button } from "@mui/material";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

function CartContent() {
  const { cart, total } = useCart();
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCheckoutClick = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleConfirmPurchase = () => {
    setOpenDialog(false);
    alert("Purchase completed successfully! 🛍️");
    // Add your logic here (e.g. clear cart, navigate, etc.)
  };

  return (
    <Box sx={{ width: 300, padding: 2 }}>
      <Demo>
        <List dense>
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <Typography variant="h6" sx={{ px: 2, pb: 1 }}>
                Items in your cart:
              </Typography>
              {cart.map((product) => (
                <CartItem product={product} key={product.id + product.name} />
              ))}
              <Checkout handleCheckoutClick = {handleCheckoutClick}/>
            </>
          )}
        </List>
      </Demo>

      <CheckoutForm
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmPurchase}
      />
    </Box>
  );
}

export default CartContent;

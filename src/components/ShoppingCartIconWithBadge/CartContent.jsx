import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useCart } from "../../Context/CartProvider";
import { Typography } from "@mui/material";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useSnackbar } from "../../Context/snackbarProvider";

function CartContent() {
  const { cart } = useCart();
  const { showSnackbar } = useSnackbar();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCheckoutClick = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleConfirmPurchase = () => {
    setOpenDialog(false);
    showSnackbar("Purchase completed successfully!", "success");
  };

  return (
    <Box sx={{ width: 300, padding: 2 }}>
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
            <Checkout handleCheckoutClick={handleCheckoutClick} />
          </>
        )}
      </List>

      <CheckoutForm
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmPurchase}
      />
    </Box>
  );
}

export default CartContent;

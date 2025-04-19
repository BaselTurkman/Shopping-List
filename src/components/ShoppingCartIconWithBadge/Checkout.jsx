import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../../context/CartProvider";

function Checkout({handleCheckoutClick}) {
    const {total} = useCart()
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      px={2}
      pt={2}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body1" fontWeight="bold">
          Total:
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${total}
        </Typography>
      </Stack>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={handleCheckoutClick}
      >
        Checkout
      </Button>
    </Stack>
  );
}

export default Checkout;

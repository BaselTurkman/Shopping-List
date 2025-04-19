import { ListItem, Stack, Typography } from "@mui/material";
import React from "react";

function EmptyCart() {
  return (
    <ListItem>
      <Stack>
        <Typography variant="body1" fontWeight="bold">
          Your cart is empty
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Start shopping and add items to your cart!
        </Typography>
      </Stack>
    </ListItem>
  );
}

export default EmptyCart;

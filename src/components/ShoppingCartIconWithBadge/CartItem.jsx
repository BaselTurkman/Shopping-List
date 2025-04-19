import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSnackbar } from "../../Context/snackbarProvider";
import { useCartActions } from "../../hooks/useCartActions";

function CartItem({ product }) {
  const { removeFromCart } = useCartActions();
  const { showSnackbar } = useSnackbar();

  const handleDeleteProduct = (product) => {
    removeFromCart(product);
    showSnackbar("Product was deleted successfully", "success");
  };

  return (
    <ListItem
      key={product.id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          color="error"
          onClick={() => handleDeleteProduct(product)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar src={product.image} alt={product.name} />
      </ListItemAvatar>
      <ListItemText
        primary={product.name}
        secondary={`Price: $${product.price}`}
      />
    </ListItem>
  );
}

export default CartItem;

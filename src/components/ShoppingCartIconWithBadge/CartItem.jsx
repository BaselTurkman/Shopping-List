import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "../../Context/CartProvider";

function CartItem({ product }) {
  const dispatch = useDispatch();
  return (
    <ListItem
      key={product.id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          color="error"
          onClick={() =>
            dispatch({
              type: "delete",
              payload: product,
            })
          }
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

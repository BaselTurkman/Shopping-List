import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartActions } from "../../../hooks/useCartActions";
import { useSnackbarAlerts } from "../../../hooks/useSnackbarAlerts";
import { useCart } from "../../../context/CartProvider";

export default function ProductItem({ product }) {
  const { name, image, price, description } = product;
  const {addToCart} = useCartActions();
  const {showSuccessSnackbar, showInfoSnackbar} = useSnackbarAlerts();
  const { cart } = useCart();

  const handleAddProduct = () => {
    const isFound = cart.find((p) => p.id === product.id);

    if (isFound) {
      showInfoSnackbar("Product Already exists");
    } else {
      addToCart(product)
      showSuccessSnackbar("Item added to cart!", "success");
    }
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardMedia sx={{ minHeight: 220 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ padding: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Typography color="textSecondary" fontWeight="bold" variant="body1">
          {price}
        </Typography>
        <Button
          startIcon={<ShoppingCartIcon />}
          size="small"
          variant="outlined"
          onClick={handleAddProduct}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

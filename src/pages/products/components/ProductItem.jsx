import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from "../../../Context/CartProvider";

export default function ProductItem({ product }) {
  const { name, image, price, description } = product;
  const dispatch = useDispatch()

  const handleAddProduct = () => {
    dispatch({
        type: "add",
        payload: product
    })
  }

  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardMedia
        sx={{ minHeight: 220 }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{padding: 2, display: "flex", justifyContent: "space-between"}}>
        <Typography color="textSecondary" fontWeight="bold" variant="body1">{price}</Typography>
        <Button startIcon={<ShoppingCartIcon />} size="small" variant="outlined" onClick={handleAddProduct} > Add to cart </Button>
      </CardActions>
    </Card>
  );
}

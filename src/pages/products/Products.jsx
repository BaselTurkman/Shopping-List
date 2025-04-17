import { Grid } from "@mui/material";
import React from "react";
import { productsItem } from "../../constants/productsItem";
import ProductItem from "./components/productItem";

export default function Products() {
  return (
    <Grid container spacing={4} my={5} p={5}>
      {productsItem.map((product) => (
        <Grid key={product.id} size = {{xs: 12, sm: 6 ,md: 4, lg: 3}}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

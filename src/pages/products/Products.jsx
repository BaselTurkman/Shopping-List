import { Grid, Typography, Box, TextField } from "@mui/material";
import React from "react";
import { productsItem } from "../../constants/productsItem";
import ProductItem from "./components/productItem";

export default function Products() {
  return (
    <Box my={5} px={2}>
      <Box
        p={3}
        borderRadius={2}
        textAlign="center"
        mb={4}
        color="#fff"
        sx={{ background: "linear-gradient(135deg, #2193b0, #6dd5ed)" }}
      >
        <Typography variant="h5" fontWeight="bold">
          Welcome to Our Store!
        </Typography>
        <Typography variant="subtitle1">
          Find the perfect product just for you.
        </Typography>
      </Box>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">
          Our Products
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Explore the latest collection curated for your needs
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {productsItem.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

import { Box, CssBaseline } from "@mui/material";
import { CartProvider } from "./Context/CartProvider";
import Navbar from "./components/navbar/Navbar";
import Products from "./pages/products/products";

function App() {
  return (
    <CartProvider>
      <CssBaseline />
      <Navbar />
      <Products />
    </CartProvider>
  );
}

export default App;

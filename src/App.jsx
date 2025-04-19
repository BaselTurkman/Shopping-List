import { Box, Container, CssBaseline } from "@mui/material";
import { CartProvider } from "./Context/CartProvider";
import Navbar from "./components/navbar/Navbar";
import Products from "./pages/products/products";

function App() {
  return (
    <CartProvider>
      <CssBaseline />
      <Navbar />
      <Container>
        <Products />
      </Container>
    </CartProvider>
  );
}

export default App;

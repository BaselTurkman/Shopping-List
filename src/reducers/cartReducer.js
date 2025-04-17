export function cartReducer(cartProducts, action) {
    switch (action.type) {
      case "add": {
        const item = action.payload;
        const isFound = cartProducts.cart.find((product) => product.id === item.id);
  
        if (isFound) return cartProducts;
  
        const updatedTotal = Number((cartProducts.total + item.price).toFixed(2));
  
        return {
          cart: [...cartProducts.cart, item],
          total: updatedTotal,
        };
      }
  
      case "delete": {
        const item = action.payload;
        const updatedCart = cartProducts.cart.filter((product) => product.id !== item.id);
        const updatedTotal = Number((cartProducts.total - item.price).toFixed(2));
  
        return {
          cart: updatedCart,
          total: updatedTotal,
        };
      }
  
      default:
        return cartProducts;
    }
  }
  
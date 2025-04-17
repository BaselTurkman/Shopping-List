// src/context/CartContext.jsx
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { initialCart } from "../constants/initialCart";
import { SnackbarProvider } from "./snackbarProvider";


const CartContext = createContext(null);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
    const [productCart, dispatch] = useReducer(cartReducer, initialCart);

    return (
        <SnackbarProvider> {/* ⬅️ Add this here */}
            <CartContext.Provider value={productCart}>
                <CartDispatchContext.Provider value={dispatch}>
                    {children}
                </CartDispatchContext.Provider>
            </CartContext.Provider>
        </SnackbarProvider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export function useDispatch() {
    return useContext(CartDispatchContext);
}

import { useDispatch } from "../Context/CartProvider";

export function useCartActions() {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch({ type: "add", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "delete", payload: item });
  };

  return { addToCart, removeFromCart };
}

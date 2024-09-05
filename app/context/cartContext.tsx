"use client";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { Books } from "../_lib/data";

interface Cart extends Books {
  quantity: number;
}
interface cartContextType {
  cart: Cart[];
  addToCart: (product: Cart) => void;
  clearCart: ()=>void;
  removeOneFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  totalPrice: number;
}
interface CartProviderProps {
  children: ReactNode;
}

const cartContext = createContext<cartContextType | null>(null);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>([]);
  const [totalamount , setTotalAmount] = useState<number>(0)

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //calculate total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // add to cart
  const addToCart = (product: Cart) => {
    console.log("Adding to cart:", product);
    setCart((prevItem) => {
      const existingItem = prevItem.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log("Adding new product to cart:", product.title);
      return [...prevItem, { ...product, quantity: 1 }];
    });
    console.log("Updated cart:", cart);
  };

  //remove from cart
  const removeOneFromCart = (id: number) => {
    setCart((prevItem) => {
      const existingItem = prevItem.find((item) => item.id === id);
      // if (existingItem?.quantity === 1) {
        return prevItem.filter((item) => item.id !== id);
      }
  );
  };

  //increment the items quantity by one
  const incrementQuantity = (id: number) => {
    setCart((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //decrement quantity of items by one
  const decrementQuantity = (id: number) => {
    setCart((prevItem) => {
      const existingItem = prevItem.find((item) => item.id === id);
      if (existingItem?.quantity === 1) {
        return prevItem.filter((item) => item.id !== id);
      }
      return prevItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  //clear the cart after order Done
  const clearCart = ()=>{
    setCart([]);
    setTotalAmount(0)
  }
  return (
    <cartContext.Provider
      value={{
        cart,
        totalPrice,
        addToCart,
        removeOneFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

function useCart() {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCart must be used within a cartProvider");
  }
  console.log(context);
  return context;
}
export { cartContext, useCart };
export type { Cart };
export default CartProvider;

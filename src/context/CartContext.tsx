
"use client";
import { createContext, useContext, useState, ReactNode } from "react";


interface CartContextType {
  cart: any[];
  addToCart: (product: any) => void;
  removeFromCart: (id: string) => void;
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id: string) => {
   
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => setCart((prev) => [...prev, product]);
  const removeFromCart = (id: string) => setCart((prev) => prev.filter((item) => item._id !== id));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
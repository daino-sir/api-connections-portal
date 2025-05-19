"use client";
import React, { createContext, useContext, useState } from "react";

interface CartContextType {
  cart: string[];
  addToCart: (item: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (item: string) => {
    console.log("Adding to cart:", item);
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
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
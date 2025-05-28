"use client";
import React, { createContext, useContext, useState } from "react";
import Navbar from "@/components/ui/navbar/navbar";

type CartItem = { name: string; quantity: number };

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (name: string) => void;
} | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (name: string) => {
    setCart((cart) => {
      const found = cart.find((item) => item.name === name);
      if (found) {
        return cart.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...cart, { name, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export default function CartPage() {
  const { cart } = useCart();
  return (
    <div style={{ padding: 20 }}>
      <Navbar />
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
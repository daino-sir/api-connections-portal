"use client";
import React from "react";
import Navbar from "@/components/ui/navbar/navbar";
import { useCart } from "@/context/CartContext";

const CartPage: React.FC = () => {
  const { cart } = useCart();

  return (
    <div style={{ padding: "2rem" }}>
      <Navbar />
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
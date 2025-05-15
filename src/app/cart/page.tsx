"use client";
import React from "react";
import Navbar from "@/components/ui/navbar/navbar";
import { useCart } from "@/context/CartContext";

const CartPage: React.FC = () => {
  const { cart } = useCart(); 

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CartPage;
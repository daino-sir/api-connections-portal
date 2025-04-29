"use client";
import React, { useState } from "react";
import Navbar from "@/components/ui/navbar/navbar";
import "./products.css";

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductsPage: React.FC = () => {
  const [cart, setCart] = useState<string[]>([]);

  const products: Product[] = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 50 },
    { id: 3, name: "Onions", price: 80 },
    { id: 4, name: "Ground Nuts", price: 120 },
    { id: 5, name: "Skuma wiki", price: 30 },
    { id: 6, name: "Tomatoes", price: 70 },
    { id: 7, name: "Cabbages", price: 60 },
    { id: 8, name: "Ginger", price: 150 },
    { id: 9, name: "A crate of eggs", price: 350 },
    { id: 10, name: "Avocados", price: 30 },
    { id: 11, name: "Spinach", price: 40 },
    { id: 12, name: "Mangoes", price: 90 },
  ];

  const addToCart = (productName: string): void => {
    setCart([...cart, productName]);
    alert(`${productName} added to cart!`);
  };

  return (
    <>
      <Navbar />
      <div className="products-container">
        <h1>Products</h1>
        <ul className="products-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <span>
                {product.name} - Ksh {product.price.toFixed(2)}/-
              </span>
              <button
                onClick={() => addToCart(product.name)}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsPage;
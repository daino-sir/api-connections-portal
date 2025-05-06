"use client";
import React, { useState } from "react";
import Navbar from "@/components/ui/navbar/navbar";

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "Apple", price: 100, category: "Fruits" },
    { id: 2, name: "Banana", price: 50, category: "Fruits" },
    { id: 3, name: "Onions", price: 80, category: "Vegetables" },
    { id: 4, name: "Ground Nuts", price: 120, category: "Snacks" },
    { id: 5, name: "Skuma wiki", price: 30, category: "Vegetables" },
    { id: 6, name: "Tomatoes", price: 70, category: "Vegetables" },
    { id: 7, name: "Cabbages", price: 60, category: "Vegetables" },
    { id: 8, name: "Ginger", price: 150, category: "Vegetables" },
   
  ];

  const categories = ["All", "Fruits", "Vegetables",];

  

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Products</h1>
        <div style={{ marginBottom: "20px" }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "10px 15px",
                margin: "5px",
                cursor: "pointer",
                backgroundColor: selectedCategory === category ? "#4CAF50" : "#f0f0f0",
                color: selectedCategory === category ? "white" : "black",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredProducts.map((product) => (
            <li key={product.id} style={{ marginBottom: "10px" }}>
              {product.name} - Ksh {product.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsPage;
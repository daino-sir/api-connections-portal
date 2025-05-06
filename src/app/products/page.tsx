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
    { id: 9, name: "A crate of eggs", price: 350, category: "Dairy" },
    { id: 10, name: "Avocados", price: 30, category: "Fruits" },
    { id: 11, name: "Spinach", price: 40, category: "Vegetables" },
    { id: 12, name: "Mangoes", price: 90, category: "Fruits" },
    { id: 9, name: "A crate of eggs", price: 350, category: "Dairy" },
    { id: 10, name: "Avocados", price: 30, category: "Fruits" },
    { id: 11, name: "Spinach", price: 40, category: "Vegetables" },
    { id: 12, name: "Mangoes", price: 90, category: "Fruits" },
    { id: 13, name: "Pineapples", price: 120, category: "Fruits" },
    { id: 14, name: "Yogurt", price: 160, category: "Dairy" },
    { id: 15, name: "Mala", price: 65, category: "Dairy" },
    { id: 16, name: "Wow rings", price: 50, category: "Snacks" },
    { id: 17, name: "TikTac", price: 60, category: "Snacks" },
    { id: 18, name: "Minute maid", price: 80, category: "Snacks" },
    { id: 19, name: "Ice Cream", price: 150, category: "Snacks" },
    { id: 20, name: "Milk", price: 60, category: "Dairy" },
    { id: 21, name: "Margarine", price: 80, category: "Dairy" },
    { id: 22, name: "Popcorn", price: 130, category: "Snacks" },
    { id: 23, name: "Corn Flakes", price: 270, category: "Snacks" },
  ];

  const categories = ["All", "Fruits", "Vegetables", "Snacks", "Dairy"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
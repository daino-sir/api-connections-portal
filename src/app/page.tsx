"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/ui/navbar/navbar"; 
const Home: React.FC = () => {
  return (
    <>
      <Navbar /> 
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to your very own self check-out system!</h1>
        <p>Shop with ease &#128515;</p>
        <div style={{ marginTop: "20px" }}>
          
            <h1 style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
              View Products above!
            </h1>
        
        </div>
      </div>
    </>
  );
};

export default Home;
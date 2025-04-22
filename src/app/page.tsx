"use client"; 

import Image from "next/image";
import PageWrapper from "@/components/ui/wrappers/page-wrapper";
import Navbar from "@/components/ui/navbar/navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStartShopping = () => {
    router.push("/products"); 
  };

  return (
    <PageWrapper>
      <Navbar /> 
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1>Welcome to the Self Checkout System</h1>
        <p>Experience fast and convenient shopping with our easy-to-use system.</p>
        <button
          onClick={handleStartShopping}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Start Shopping
        </button>
      </div>
    </PageWrapper>
  );
}

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import "./navbar.css";

const Navbar: React.FC = () => {
  const { cart } = useCart();

  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/cart">Cart ({cart.length})</Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
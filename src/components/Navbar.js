import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="brand">GROTECH</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/enquiry">Enquiry</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

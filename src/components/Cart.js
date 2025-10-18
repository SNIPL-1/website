import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  return (
    <div className="cart">
      <h2>Get special quote for below products</h2>
      <table>
        <thead>
          <tr><th>Item</th><th>Variant</th><th>Description</th><th>Price</th><th>Qty</th></tr>
        </thead>
        <tbody>
          {cart.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.variant}</td>
              <td>{c.description}</td>
              <td>{c.price}</td>
              <td>{c.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useState } from 'react';
import './App.css';

const menu = [
  { id: 1, name: "Washington Burger", price: 14.90 },
  { id: 2, name: "Tehran Burger", price: 14.90 },
  { id: 3, name: "Godfather Burger", price: 18.00 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };

  const removeFromCart = index => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="container">
      <h1>🍔 Foodyne v2.6</h1>
      <div className="menu">
        {menu.map((item, index) => (
          <div key={index} className="menu-item">
            <span>{item.name} – €{item.price.toFixed(2)}</span>
            <button onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
      </div>
      <h2>🛒 Cart</h2>
      <ul className="cart">
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} – €{item.price.toFixed(2)}
            <button onClick={() => removeFromCart(index)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="total">Total: €{total}</div>
    </div>
  );
}

export default App;

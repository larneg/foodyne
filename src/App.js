
import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const menu = [
    { id: 1, name: "Washington Burger", price: 14.90 },
    { id: 2, name: "Tehran Burger", price: 14.90 },
    { id: 3, name: "Godfather Burger", price: 18.00 }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="App">
      <h1>🍔 Foodyne v2.7</h1>
      <h2>Menu</h2>
      {menu.map((item, i) => (
        <div key={i} className="menu-item">
          {item.name} – €{item.price.toFixed(2)}
          <button onClick={() => addToCart(item)}>Add</button>
        </div>
      ))}
      <h2>🛒 Cart</h2>
      {cart.map((item, i) => (
        <div key={i} className="cart-item">
          {item.name} – €{item.price.toFixed(2)}
          <button onClick={() => removeFromCart(i)}>❌</button>
        </div>
      ))}
      <h3>Total: €{total}</h3>
    </div>
  );
}

export default App;

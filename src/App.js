
import React, { useState } from 'react';
import './App.css';

const menu = {
  Burgers: [
    { name: "Washington Burger", price: 14.90 },
    { name: "Tehran Burger", price: 14.90 },
    { name: "Godfather Burger", price: 18.00 }
  ],
  Fries: [
    { name: "Curly Fries", price: 4.90 },
    { name: "Classic Fries", price: 3.50 }
  ],
  Drinks: [
    { name: "Cola", price: 2.50 },
    { name: "Lemonade", price: 3.00 }
  ]
};

function App() {
  const [cart, setCart] = useState([]);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="container">
      <h1>🍔 Foodyne 2.8 - Accordion</h1>
      {Object.entries(menu).map(([category, items]) => (
        <div key={category} className="section">
          <h2 onClick={() => toggleSection(category)}>{category}</h2>
          {openSection === category && (
            <ul>
              {items.map((item, i) => (
                <li key={i}>
                  {item.name} – €{item.price.toFixed(2)}
                  <button onClick={() => addToCart(item)}>Add</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <h2>🛒 Cart</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} – €{item.price.toFixed(2)}
            <button onClick={() => removeFromCart(i)}>❌</button>
          </li>
        ))}
      </ul>
      <p><strong>Total: €{total}</strong></p>
    </div>
  );
}

export default App;

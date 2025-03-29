
import React, { useState } from "react";
import "./App.css";

const menuData = {
  Burgers: [
    { name: "Washington Burger", price: 14.9 },
    { name: "Tehran Burger", price: 14.9 },
    { name: "Godfather Burger", price: 18.0 }
  ],
  Extras: [
    { name: "Crispy Chicken", price: 4.0 },
    { name: "Avocado", price: 1.9 }
  ],
  Sides: [
    { name: "Curly Fries", price: 4.9 },
    { name: "Caesar Salad", price: 4.9 }
  ]
};

function App() {
  const [cart, setCart] = useState([]);
  const [note, setNote] = useState("");
  const [openSection, setOpenSection] = useState("Burgers");

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="app">
      <h1>🍽️ Foodyne Ordering</h1>
      {Object.entries(menuData).map(([category, items]) => (
        <div className="accordion" key={category}>
          <div className="accordion-header" onClick={() => setOpenSection(category)}>
            <h2>{category}</h2>
          </div>
          {openSection === category && (
            <div className="accordion-body">
              {items.map((item, idx) => (
                <div className="menu-item" key={idx}>
                  {item.name} – €{item.price.toFixed(2)}{" "}
                  <button className="add-btn" onClick={() => addItem(item)}>Add</button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="note-section">
        <h3>📝 Optional Note</h3>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} />
      </div>

      <div className="cart-section">
        <h3>🛒 Cart</h3>
        {cart.map((item, idx) => (
          <div className="cart-item" key={idx}>
            {item.name} – €{item.price.toFixed(2)}
            <button className="remove-btn" onClick={() => removeItem(idx)}>❌</button>
          </div>
        ))}
        <h4>Total: €{total}</h4>
        <button className="submit-btn">✅ Submit Order</button>
      </div>
    </div>
  );
}

export default App;

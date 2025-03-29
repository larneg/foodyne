import React, { useState } from 'react';

const menu = {
  burgers: [
    { id: 1, name: "Washington Burger", price: 14.9 },
    { id: 2, name: "Tehran Burger", price: 14.9 },
    { id: 3, name: "Godfather Burger", price: 18.0 }
  ],
  extras: [
    { id: 10, name: "Crispy Chicken", price: 4.0 },
    { id: 11, name: "Avocado", price: 1.9 }
  ],
  sides: [
    { id: 20, name: "Curly Fries", price: 4.9 },
    { id: 21, name: "Caesar Salad", price: 4.9 }
  ]
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [note, setNote] = useState("");

  const addToCart = (item) => {
    setCart([...cart, { ...item, note }]);
    setNote("");
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div style={{ padding: 20 }}>
      <h1>🍽️ Foodyne Ordering</h1>

      <div>
        <h2>🍔 Burgers</h2>
        {menu.burgers.map(item => (
          <div key={item.id}>
            {item.name} - €{item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
      </div>

      <div>
        <h2>🧀 Extras</h2>
        {menu.extras.map(item => (
          <div key={item.id}>
            {item.name} - €{item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
      </div>

      <div>
        <h2>🍟 Sides</h2>
        {menu.sides.map(item => (
          <div key={item.id}>
            {item.name} - €{item.price.toFixed(2)}
            <button onClick={() => addToCart(item)}>Add</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>📝 Optional Note</h3>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} />
      </div>

      <div style={{ marginTop: 40 }}>
        <h2>🛒 Cart</h2>
        {cart.map((item, i) => (
          <div key={i}>
            {item.name} - €{item.price.toFixed(2)} {item.note && `📝 (${item.note})`}
            <button onClick={() => removeItem(i)}>❌</button>
          </div>
        ))}
        <h3>Total: €{total}</h3>
        <button disabled={!cart.length}>✅ Submit Order</button>
      </div>
    </div>
  );
}

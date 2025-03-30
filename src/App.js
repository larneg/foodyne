// Foodyne v1.7 – React Frontend (Demo)

import React, { useState } from "react";
import "./index.css";

const menuItems = [
  {
    id: 1,
    name: "Washington Burger",
    price: 14.9,
  },
  {
    id: 2,
    name: "Cheeseburger",
    price: 12.8,
  },
  {
    id: 3,
    name: "Peking Burger",
    price: 14.9,
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, { ...item, note: "" }]);
  };

  const updateNote = (index, note) => {
    const updatedCart = [...cart];
    updatedCart[index].note = note;
    setCart(updatedCart);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">🍔 Foodyne v1.7 - سفارش‌گیری + یادداشت غذا</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">منو</h2>
          {menuItems.map((item) => (
            <div key={item.id} className="p-3 bg-white rounded shadow flex justify-between items-center mb-2">
              <span>{item.name} – €{item.price.toFixed(2)}</span>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                onClick={() => addToCart(item)}
              >
                افزودن
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">🛒 سبد سفارش</h2>
          {cart.length === 0 && <p>سبد شما خالی است.</p>}
          {cart.map((item, index) => (
            <div key={index} className="p-3 bg-white rounded shadow mb-3">
              <div className="flex justify-between">
                <strong>{item.name}</strong>
                <span>€{item.price.toFixed(2)}</span>
              </div>
              <textarea
                className="mt-2 w-full border rounded p-2 text-sm"
                rows="2"
                placeholder="یادداشت برای این غذا..."
                value={item.note}
                onChange={(e) => updateNote(index, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const menu = {
  Burgers: [
    { name: "Cheeseburger", price: 12.8 },
    { name: "Washington Burger", price: 14.9 }
  ],
  Sides: [
    { name: "French Fries", price: 4.5 },
    { name: "Caesar Salad", price: 4.9 }
  ]
};

function App() {
  const [orders, setOrders] = useState([]);
  const [person, setPerson] = useState(1);

  const addItem = (category, item) => {
    setOrders([...orders, { ...item, category, person }]);
  };

  const total = orders.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Foodyne – Order Demo</h1>
      <div className="mb-4">
        <label className="mr-2">Select Person:</label>
        <select value={person} onChange={e => setPerson(Number(e.target.value))}>
          {[1,2,3,4,5,6].map(n => (
            <option key={n} value={n}>Person {n}</option>
          ))}
        </select>
      </div>
      {Object.entries(menu).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{category}</h2>
          <div className="grid grid-cols-2 gap-2">
            {items.map((item, idx) => (
              <button
                key={idx}
                className="border rounded-xl p-2 hover:bg-green-100 text-left"
                onClick={() => addItem(category, item)}
              >
                {item.name} – €{item.price.toFixed(2)}
              </button>
            ))}
          </div>
        </div>
      ))}
      <h2 className="text-lg font-bold mt-6">Current Order</h2>
      <ul className="mb-2">
        {orders.map((item, idx) => (
          <li key={idx}>👤Person {item.person}: {item.name} (€{item.price})</li>
        ))}
      </ul>
      <div className="font-semibold">Total: €{total.toFixed(2)}</div>
    </div>
  );
}

export default App;

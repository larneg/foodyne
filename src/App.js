import React, { useState } from "react";
import "./App.css";

function App() {
  const [tableNumber, setTableNumber] = useState("");
  const [peopleCount, setPeopleCount] = useState(1);
  const [generalNote, setGeneralNote] = useState("");

  return (
    <div className="app">
      <h1>Foodyne 2.0</h1>
      <div className="form">
        <label>
          Table Number:
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
          />
        </label>
        <label>
          Number of People:
          <input
            type="number"
            min="1"
            max="20"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
          />
        </label>
        <label>
          General Note:
          <textarea
            placeholder="Any notes for the table..."
            value={generalNote}
            onChange={(e) => setGeneralNote(e.target.value)}
          ></textarea>
        </label>
      </div>
    </div>
  );
}

export default App;
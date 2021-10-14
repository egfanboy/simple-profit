import { useState } from "react";
import "./App.scss";

import { AddExpense } from "./components/expense";

function App() {
  const [moneyItems, setMoneyItems] = useState([]);

  return (
    <div className="sp-main">
      <h2>Simple Finance</h2>
      <AddExpense
        addExpense={(expense) => setMoneyItems([expense, ...moneyItems])}
      ></AddExpense>

      {moneyItems.map((item) => (
        <div>
          <p>Type: {item.type}</p>
          <p>Amount: {item.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

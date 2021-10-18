import { useState } from "react";
import "./App.scss";

import { AddExpense } from "./components/expense";
import { ExpenseTable } from "./components/expense-table";

function App() {
  const [moneyItems, setMoneyItems] = useState([]);

  return (
    <div className="sp-main">
      <h2>Simple Finance</h2>
      <AddExpense
        addExpense={(expense) => setMoneyItems([expense, ...moneyItems])}
      ></AddExpense>

      <ExpenseTable moneyItems={moneyItems}></ExpenseTable>
    </div>
  );
}

export default App;

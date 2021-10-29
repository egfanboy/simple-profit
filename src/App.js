import { useState } from "react";
import "./App.scss";

import { AddExpense } from "./components/expense";
import { ExpenseTable } from "./components/expense-table";
import { ProfitRollup } from "./components/profit-rollup/profit-rollup";
import { StorageService } from "./services/storage";

const MONEY_ITEMS_KEY = "moneyItems";
const START_DATE_KEY = "startDate";

function App() {
  const storedState = StorageService.get();

  const [moneyItems, setMoneyItems] = useState(
    storedState[MONEY_ITEMS_KEY] || []
  );

  const handleNewExpense = (expense) => {
    if (moneyItems.length === 0) {
      // Persist the time of the first expense
      StorageService.set(START_DATE_KEY, new Date());
    }

    // Newest items go first
    const newState = [expense, ...moneyItems];

    StorageService.set(MONEY_ITEMS_KEY, newState);
    setMoneyItems(newState);
  };

  return (
    <div className="sp-main">
      <h2>Simple Finance</h2>
      <AddExpense
        addExpense={(expense) => handleNewExpense(expense)}
      ></AddExpense>

      <ProfitRollup
        moneyItems={moneyItems}
        startDate={storedState[START_DATE_KEY]}
      ></ProfitRollup>
      <ExpenseTable moneyItems={moneyItems}></ExpenseTable>
    </div>
  );
}

export default App;

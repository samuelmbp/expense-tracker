import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Abc", amount: 10, category: "Utilities" },
    { id: 2, description: "Bce", amount: 20, category: "Utilities" },
    { id: 3, description: "Def", amount: 30, category: "Utilities" },
  ]);

  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </>
  );
}

export default App;

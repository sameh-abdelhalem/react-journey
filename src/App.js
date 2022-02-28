import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMYEXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {

  const [expenses , setExpenses] = useState(DUMMYEXPENSES)
  
  const expenseDataHandler = expenseData=>{

    setExpenses(prevExpense=>[expenseData,...prevExpense,])

  }
 
  return (
    <div>
      <div>
        <NewExpense onExpenseDataSave={expenseDataHandler} />
      </div>
      <Expenses expenses={expenses} ></Expenses>
    </div>
  );
};

export default App;

// 68. Adding Conditional Return Statements


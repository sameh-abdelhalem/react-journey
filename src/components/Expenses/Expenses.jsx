import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredDate, setFilteredDate] = useState("2019");
  const onDateSelectionHandler = (selectedDate) => {
    setFilteredDate(selectedDate.toString());
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredDate
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedDate={filteredDate}
          onDateSelection={onDateSelectionHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;

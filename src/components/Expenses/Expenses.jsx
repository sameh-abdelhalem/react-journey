import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredDate,setFilteredDate] = useState('2019')
  const onDateSelectionHandler=(selectedDate)=>(
    setFilteredDate(selectedDate.toString())
  )
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selectedDate={filteredDate} onDateSelection={onDateSelectionHandler}/>
      {props.expenses.map(expense=> <ExpenseItem date={expense.date} title = {expense.title} amount={expense.amount} />)}
    
    </Card>
    </div>
  );
};
export default Expenses;

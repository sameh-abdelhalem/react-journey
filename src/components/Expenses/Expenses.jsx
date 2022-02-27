import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredDate,setFilteredDate] = useState('2019')
  const onDateSelectionHandler=(selectedDate)=>{

    setFilteredDate(selectedDate.toString())
  }
const filteredExpenses = props.expenses.filter((expense)=>expense.date.getFullYear().toString()===filteredDate)
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selectedDate={filteredDate} onDateSelection={onDateSelectionHandler}/>
      {filteredExpenses.map(expense=> <ExpenseItem key={expense.id }date={expense.date} title = {expense.title} amount={expense.amount} />)}
    
    </Card> 
    </div>
  );
};
export default Expenses;

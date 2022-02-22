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
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      ></ExpenseItem>
    </Card>
    </div>
  );
};
export default Expenses;

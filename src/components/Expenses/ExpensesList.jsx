import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'
const ExpensesList = props=>{

    return (
    
    <ul className="expenses-list">
        {props.items.length===0 ?<h2 className="expenses-list__fallback">No Expenses Found</h2>:props.items.map(expense=> <ExpenseItem key={expense.id }date={expense.date} title = {expense.title} amount={expense.amount} />)}
    </ul>
)

}

export default ExpensesList
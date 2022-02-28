import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [titleVal, setTitleVal] = useState("");
  const [amountVal, setAmountVal] = useState("");
  const [dateVal, setDateVal] = useState("");
  const titleChangeHandler = (event) => {
    setTitleVal(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateVal(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountVal(event.target.value);
  };

  const submitHandler=(event)=>{
    event.preventDefault()
    const expenseData = {
      title: titleVal,
      amount: amountVal,
      date:new Date(dateVal)
    }
    props.onSaveExpenseData(expenseData)
    setAmountVal('')
    setDateVal('')
    setTitleVal('')
  }
  const [expensesBtnState,setExpensesBtnState]= useState(true);

  const showOrHideForm=()=>{

    setExpensesBtnState((prevState)=>!prevState)
  }
  return (
    expensesBtnState?
    
  <div className="add-new-expense">
    <button onClick={showOrHideForm} >Add New Expense</button>
  </div>
  :
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}  value={titleVal}/>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amountVal}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2021-13-10"
            onChange={dateChangeHandler}
            value={dateVal}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button> <button onClick={showOrHideForm}>Cancel</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

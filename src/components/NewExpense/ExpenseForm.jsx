import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
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
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
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
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

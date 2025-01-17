import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((i) => i > 0)
    .reduce((prev, curr) => (prev += curr))
    .toFixed(2);
  const expense = amount
    .filter((i) => i < 0)
    .reduce((prev, curr) => (prev += curr))
    .toFixed(2);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -${Math.abs(expense)}
          </p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpense;

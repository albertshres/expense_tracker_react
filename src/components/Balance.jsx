import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amt = transactions.map((transaction) => transaction.amount);
  const total = amt.reduce((prev, curr) => (prev += curr), 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
};

export default Balance;

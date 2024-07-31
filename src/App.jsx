import React from "react";
import {
  Balance,
  Header,
  IncomeExpense,
  TransactionList,
  AddTransaction,
} from "./components";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;

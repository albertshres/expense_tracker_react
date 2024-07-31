import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//creating initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};
//create global context
export const GlobalContext = createContext(initialState);

//creating context provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions for the delete
  function deleteTransaction(id) {
    dispatch({
      type: "delete_transaction",
      payload: id,
    });
  }

  //actions for add transaction
  function addTrasaction(transaction) {
    dispatch({
      type: "add_transaction",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTrasaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

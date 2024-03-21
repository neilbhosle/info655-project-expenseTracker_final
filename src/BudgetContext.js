// src/components/BudgetContext.js


// import React, { createContext, useContext, useEffect, useState } from 'react';

// const BudgetContext = createContext();

// // Define a provider component to manage state related to budget
// export const BudgetProvider = ({ children }) => 
// {
//   const [initialBudget, setInitialBudget] = useState(() => {
//     const storedInitialBudget = parseFloat(JSON.parse(localStorage.getItem('initialBudget')));
//     return +storedInitialBudget || 0; // Set initial budget to 0 if not found in localStorage
//   });
//   const [transactions, setTransactions] = useState(() => {
//     const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
//     return storedTransactions || []; // Set transactions to empty array if not found in localStorage
//   });

//   console.log(typeof(initialBudget))
//     // Effect to update localStorage when initialBudget changes
//     useEffect(() => {
//     localStorage.setItem('initialBudget', +JSON.stringify(+initialBudget));
//   }, [initialBudget]);

//   // Effect to update localStorage when transactions change
//   useEffect(() => {
//     localStorage.setItem('transactions', JSON.stringify(transactions));
//   }, [transactions]);

//     // Function to add a new transaction
//   const addTransaction = (transaction) => {
//     setTransactions([...transactions, transaction]);
//   };

//     // Function to edit a transaction
//     const editTransaction = (editedTransaction) => {
//     console.log('Edited Transaction:', editedTransaction);
//     const updatedTransactions = transactions.map((transaction) =>
//       transaction === editedTransaction ? editedTransaction : transaction
//     );
//     console.log('Updated Transactions:', updatedTransactions);
//     setTransactions(updatedTransactions);
//   };

//     // Calculate the current budget based on transactions
//     const budget = transactions.reduce((acc, transaction) => {
//     return transaction.type === 'income' ? +acc + +transaction.amount : +acc - +transaction.amount;
//   }, initialBudget);

//   // Define setBudget function to update initialBudget
//   const setBudget = (newBudget) => {
//     setInitialBudget(newBudget);
//   };

//     // Provide the context value to children components
//   return (
//     <BudgetContext.Provider
//       value={{ initialBudget, setInitialBudget, transactions, setTransactions, addTransaction, editTransaction, budget, setBudget }}
//     >
//       {children}
//     </BudgetContext.Provider>
//   );
// };

// // Custom hook to access budget-related context
// export const useBudget = () => {
//   return useContext(BudgetContext);
// };

// src/components/BudgetContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const BudgetContext = createContext();

// Define a provider component to manage state related to budget
export const BudgetProvider = ({ children }) => {
  const [initialBudget, setInitialBudget] = useState(() => {
    const storedInitialBudget = parseFloat(JSON.parse(localStorage.getItem('initialBudget')));
    return +storedInitialBudget || 0; // Set initial budget to 0 if not found in localStorage
  });

  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    return storedTransactions || []; // Set transactions to empty array if not found in localStorage
  });

  console.log(typeof initialBudget);

  // Effect to update localStorage when initialBudget changes
  useEffect(() => {
    localStorage.setItem('initialBudget', +JSON.stringify(+initialBudget));
  }, [initialBudget]);

  // Effect to update localStorage when transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a new transaction
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  // Function to edit a transaction
  const editTransaction = (editedTransaction) => {
    console.log('Edited Transaction:', editedTransaction);
    const updatedTransactions = transactions.map((transaction) =>
      transaction === editedTransaction ? editedTransaction : transaction
    );
    console.log('Updated Transactions:', updatedTransactions);
    setTransactions(updatedTransactions);
  };

  // Function to delete a transaction
  const deleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  // Calculate the current budget based on transactions
  const budget = transactions.reduce((acc, transaction) => {
    return transaction.type === 'income' ? +acc + +transaction.amount : +acc - +transaction.amount;
  }, initialBudget);

  // Define setBudget function to update initialBudget
  const setBudget = (newBudget) => {
    setInitialBudget(newBudget);
  };

  // Provide the context value to children components
  return (
    <BudgetContext.Provider
      value={{
        initialBudget,
        setInitialBudget,
        transactions,
        setTransactions,
        addTransaction,
        editTransaction,
        deleteTransaction, // Include deleteTransaction in the context value
        budget,
        setBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

// Custom hook to access budget-related context
export const useBudget = () => {
  return useContext(BudgetContext);
};
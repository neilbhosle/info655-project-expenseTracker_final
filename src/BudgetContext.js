
import React, { createContext, useContext, useEffect, useState } from 'react';

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [initialBudget, setInitialBudget] = useState(() => {
    const storedInitialBudget = parseFloat(JSON.parse(localStorage.getItem('initialBudget')));
    return +storedInitialBudget || 0; 
  });

  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    return storedTransactions || []; 
  });

  console.log(typeof initialBudget);

  
  useEffect(() => {
    localStorage.setItem('initialBudget', +JSON.stringify(+initialBudget));
  }, [initialBudget]);

  
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  
  const editTransaction = (editedTransaction) => {
    console.log('Edited Transaction:', editedTransaction);
    const updatedTransactions = transactions.map((transaction) =>
      transaction === editedTransaction ? editedTransaction : transaction
    );
    console.log('Updated Transactions:', updatedTransactions);
    setTransactions(updatedTransactions);
  };

  
  const deleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  
  const budget = transactions.reduce((acc, transaction) => {
    return transaction.type === 'income' ? +acc + +transaction.amount : +acc - +transaction.amount;
  }, initialBudget);

  
  const setBudget = (newBudget) => {
    setInitialBudget(newBudget);
  };

  
  return (
    <BudgetContext.Provider
      value={{
        initialBudget,
        setInitialBudget,
        transactions,
        setTransactions,
        addTransaction,
        editTransaction,
        deleteTransaction, 
        budget,
        setBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};


export const useBudget = () => {
  return useContext(BudgetContext);
};
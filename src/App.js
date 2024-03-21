// import React, { useEffect } from 'react';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionHistory from './components/TransactionHistory';
import BudgetSummary from './components/BudgetSummary';
import EditBudgetForm from './components/EditBudgetForm'; 
import { BudgetProvider } from './BudgetContext';
import AddBudgetForm from './components/AddBudgetForm';
import TransactionSearch from './components/TransactionSearch';
import "./App.css"


const App = () => {




  return (
    <BudgetProvider>
    <div className="top-bar">
          <h1>Expense Tracker</h1>
    </div>
    <div className='app'>
      
      {/* <EditBudgetForm /> */}
      <AddBudgetForm />
      <AddTransactionForm />
      <TransactionHistory />
      <TransactionSearch />
      <BudgetSummary />
    </div>
    </BudgetProvider>
  );
};

export default App;

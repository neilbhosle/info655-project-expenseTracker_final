
import React, { useEffect, useState } from 'react';
import { useBudget } from '../BudgetContext';
import BudgetPieChart from './BudgetPieChart';
import '../App.css'; 

const BudgetSummary = () => {
  const { initialBudget, transactions } = useBudget();
  const [currentBudget, setCurrentBudget] = useState(initialBudget);

  useEffect(() => {
    const updatedBudget = transactions.reduce((acc, transaction) => {
      return transaction.type === 'income' ? +acc + +transaction.amount : +acc - +transaction.amount;
    }, initialBudget);
    setCurrentBudget(updatedBudget);
  }, [transactions, initialBudget]);

  return (
    <div>
      <div className="card">
        <h2>Budget Summary</h2>
        <p>Total budget: ${initialBudget}</p>
        <p className={currentBudget >= 0 ? 'positive-value' : 'negative-value'}>
          Remaining budget: ${currentBudget}
        </p>
      </div>
      <div>
        <BudgetPieChart />
      </div>
    </div>
  );
};

export default BudgetSummary;


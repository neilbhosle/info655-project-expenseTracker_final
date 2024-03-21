// src/components/BudgetSummary.js


// import React, { useEffect, useState } from 'react';
// import { useBudget } from '../BudgetContext';

// const BudgetSummary = () => {
//   const { initialBudget, transactions } = useBudget();
//   const [currentBudget, setCurrentBudget] = useState(initialBudget);

//   useEffect(() => {
//     // Calculate the current budget whenever transactions change
//     const updatedBudget = transactions.reduce((acc, transaction) => {
//       return transaction.type === 'income' ? +acc + +transaction.amount : +acc - +transaction.amount;
//     }, initialBudget);
//     setCurrentBudget(updatedBudget);
//   }, [transactions, initialBudget]);

//   return (
//     <div>
//       <h2>Budget Summary</h2>
//       <p>Total budget: ${initialBudget}</p>
//       <p>Remaining budget: ${currentBudget}</p>
//     </div>
//   );
// };

// export default BudgetSummary;


// src/components/BudgetSummary.js
// import React, { useEffect, useState } from 'react';
// import { useBudget } from '../BudgetContext';
// import BudgetPieChart from './BudgetPieChart';

// const BudgetSummary = () => {
//   const { initialBudget, transactions } = useBudget();
//   const [currentBudget, setCurrentBudget] = useState(initialBudget);

//   useEffect(() => {
//     // Calculate the current budget whenever transactions change
//     const updatedBudget = transactions.reduce((acc, transaction) => {
//       return transaction.type === 'income' ? +acc + +transaction.amount : +acc - +transaction.amount;
//     }, initialBudget);
//     setCurrentBudget(updatedBudget);
//   }, [transactions, initialBudget]);

//   return (
//     <div>
//       <h2>Budget Summary</h2>
//       <p>Total budget: ${initialBudget}</p>
//       <p>Remaining budget: ${currentBudget}</p>
//       <BudgetPieChart />
//     </div>
//   );
// };

// export default BudgetSummary;

import React, { useEffect, useState } from 'react';
import { useBudget } from '../BudgetContext';
import BudgetPieChart from './BudgetPieChart';
import '../App.css'; // Import the CSS file

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


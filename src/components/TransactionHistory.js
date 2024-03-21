// src/components/TransactionHistory.js


// import React from 'react';
// import { useBudget } from '../BudgetContext';

// const TransactionHistory = () => {
//   const { transactions } = useBudget();
//   console.log(transactions);

//   return (
//     <div style={{ padding: '10px' }}>
//       <h3>Transaction History</h3>
//       {transactions.map((transaction, index) => (
//         <div key={index} style={{ paddingLeft: '5px', paddingBottom: '5px' }}> {/* just to make the tab neat, will use a separate css for final deliverable*/}
//           <p>
//             - <span style={{ paddingRight: '5px' }}>${transaction.amount}</span> 
//             <span style={{ paddingRight: '5px' }}>{transaction.category}</span> 
//             {transaction.date}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TransactionHistory;


// src/components/TransactionHistory.js
// import React from 'react';
// import { useBudget } from '../BudgetContext';
// import TransactionSearch from './TransactionSearch';
// // import HistoryCard from './HistoryCard';

// const TransactionHistory = () => {
//   const { transactions } = useBudget();

//   return (
//     <div style={{ padding: '10px' }}>
//       <h3>Transaction History</h3>
//       {transactions.map((transaction, index) => (
//         <HistoryCard
//           key={index}
//           amount={transaction.amount}
//           category={transaction.category}
//           date={transaction.date}
//         />
//       ))}
//       <TransactionSearch />
//     </div>
//   );
// };

// export default TransactionHistory;

// import React from 'react';
// import { useBudget } from '../BudgetContext';

// const TransactionHistory = () => {
// const { transactions } = useBudget();
//    console.log(transactions);

//    return (
//      <div style={{ padding: '10px' }}>
//        <h3>Transaction History</h3>
//        {transactions.map((transaction, index) => (
//          <div key={index} style={{ paddingLeft: '5px', paddingBottom: '5px' }}> {/* just to make the tab neat, will use a separate css for final deliverable*/}
//            <p>
//              - <span style={{ paddingRight: '5px' }}>${transaction.amount}</span> 
//              <span style={{ paddingRight: '5px' }}>{transaction.category}</span> 
//              {transaction.date}
//            </p>
//          </div>
//        ))}
//      </div>
//    );
//  };

//  export default TransactionHistory;

import React from 'react';
import { useBudget } from '../BudgetContext';
import '../App.css';

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useBudget();

  const handleDeleteTransaction = (index) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      deleteTransaction(index);
    }
  };

  return (
    <div className="card">
      <h2>Transaction History</h2>
      <table className="transaction-table">
        <thead className="thead">
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>${transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>
              <td>
                <span
                  className="delete-button"
                  onClick={() => handleDeleteTransaction(index)}
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
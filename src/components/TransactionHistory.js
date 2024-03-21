
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
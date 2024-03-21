// src/components/TransactionSearch.js
// src/components/TransactionSearch.js
import React, { useState } from 'react';
import { useBudget } from '../BudgetContext';
// import TransactionsCard from './TransactionsCard';
// import { TransactionsCard } from './TransactionsCard';
import TransactionsCard from './TransactionsCard';
const TransactionSearch = () => {
  const { transactions } = useBudget();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
   
    setSearchTerm(term);
    
    const filteredResults = term
    ? transactions.filter((transaction) => {
        const amountStr = transaction.amount.toString();
        const categoryStr = transaction.category.toLowerCase();
        return (
          amountStr.includes(term) || categoryStr.includes(term)
        );
      })
    : [];

    setSearchResults(filteredResults);
  };

  return (
    <div className="card">
      <h2>Search Transaction</h2>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {searchResults.map((transaction, index) => (

          <TransactionsCard key={index} amount={transaction.amount} date={transaction.date} category ={transaction.category} />
         
        ))}
      </div>
    </div>
  );
};

export default TransactionSearch; 
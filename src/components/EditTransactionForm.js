
import React, { useState, useEffect } from 'react';
import { useBudget } from '../BudgetContext';

const EditTransactionForm = ({ transactionToEdit, onClose }) => {
  const { editTransaction } = useBudget();
  const [editedTransaction, setEditedTransaction] = useState({ ...transactionToEdit });

  useEffect(() => {
    setEditedTransaction({ ...transactionToEdit });
  }, [transactionToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction({
      ...editedTransaction,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTransaction(editedTransaction);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        value={editedTransaction.amount}
        onChange={handleChange}
        placeholder="Enter amount"
        required
      />
      <input
        type="text"
        name="category"
        value={editedTransaction.category}
        onChange={handleChange}
        placeholder="Enter category"
        required
      />
      <select name="type" value={editedTransaction.type} onChange={handleChange}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="date"
        name="date"
        value={editedTransaction.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditTransactionForm;

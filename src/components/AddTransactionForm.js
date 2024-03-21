// src/components/AddTransactionForm.js

import React, { useState } from 'react'; 
import { useBudget } from '../BudgetContext'; 

const AddTransactionForm = () => {
  const { addTransaction } = useBudget(); // Destructure addTransaction function from useBudget hook
  const [amount, setAmount] = useState(NaN); 
  const [category, setCategory] = useState(''); 
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Initialize state for date, default is today's date
  // const [isDropdown, setIsDropdown] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const transaction = { 
      amount: parseFloat(amount), 
      category, 
      date, 
    };
    addTransaction(transaction); 
    setAmount(NaN); 
    setCategory(''); 
    setDate(new Date().toISOString().slice(0, 10)); 
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="add-budget transactions"> {/* Form for submitting a new transaction */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount" 
          required 
        />
      
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)} 
            required 
          >
            <option value="">Select category</option>
            <option value="Groceries">Groceries</option>
            <option value="Restuarants">Restuarants</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Gas">Gas</option>
            <option value="Rent">Rent</option>
            <option value="Electricity">Electricity</option>
            <option value="Amazon">Amazon</option>
            <option value="Other">Other</option>
          </select>
    
        
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
        {/* <button type="submit">Add Transaction</button> */}
        <button type='submit'>
    Add Transaction
    <div class="star-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        
        version="1.1"
        style={{
          shapeRendering: 'geometricPrecision',
          textRendering: 'geometricPrecision',
          imageRendering: 'optimizeQuality',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        }}      viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="star-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: 'geometricPrecision',
          textRendering: 'geometricPrecision',
          imageRendering: 'optimizeQuality',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        }}      viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="star-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: 'geometricPrecision',
          textRendering: 'geometricPrecision',
          imageRendering: 'optimizeQuality',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        }}      viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="star-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: 'geometricPrecision',
          textRendering: 'geometricPrecision',
          imageRendering: 'optimizeQuality',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        }}      viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="star-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: 'geometricPrecision',
          textRendering: 'geometricPrecision',
          imageRendering: 'optimizeQuality',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        }}      viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="star-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        version="1.1"
        style={{
          shapeRendering: 'geometricPrecision',
          textRendering: 'geometricPrecision',
          imageRendering: 'optimizeQuality',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        }}      viewBox="0 0 784.11 815.53"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
  </button>

      </form>
    </div>
  );
};

export default AddTransactionForm; 

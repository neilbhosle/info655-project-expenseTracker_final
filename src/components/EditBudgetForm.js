// src/components/EditBudgetForm.js

// src/components/EditBudgetForm.js
import React, { useState } from 'react'; 
import { useBudget } from '../BudgetContext'; 

const EditBudgetForm = () => {
  const { setInitialBudget } = useBudget(); // Destructure setInitialBudget from useBudget hook
  const [newBudget, setNewBudget] = useState(''); // Initialize state for newBudget
  // const [month, setMonth] = useState('');
  // const [year, setYear] = useState('');

  // const handleMonthChange = (e) => {
  //   setMonth(e.target.value);
  //   setNewBudget(''); // Reset newBudget when month changes
  // };

  // const handleYearChange = (e) => {
  //   setYear(e.target.value);
  //   setNewBudget(''); // Reset newBudget when year changes
  // };

  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
  };

  const handleSetBudget = (e) => {
    e.preventDefault();
    setInitialBudget(parseFloat(newBudget));
    setNewBudget('');
  };

  return (
    <div className='card'>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
        {/* <div style={{ marginRight: '10px' }}>
          <select value={month} onChange={handleMonthChange} required>
            <option value="">Select Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div> */}
        {/* <div style={{ marginRight: '10px' }}>
          <select value={year} onChange={handleYearChange} required>
            <option value="">Select Year</option>
            <option value="2024">2024</option>
          </select>
        </div> */}
      </div>
      <form onSubmit={handleSetBudget} className="add-budget">
        <input
          type="number"
          value={newBudget}
          onChange={handleBudgetChange}
          placeholder="Enter new budget"
          required
        />
        <button type="submit">Set Initial Budget</button>
      </form>
    </div>
  );
};

export default EditBudgetForm;

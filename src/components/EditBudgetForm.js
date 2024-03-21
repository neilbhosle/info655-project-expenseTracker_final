
import React, { useState } from 'react'; 
import { useBudget } from '../BudgetContext'; 

const EditBudgetForm = () => {
  const { setInitialBudget } = useBudget(); // Destructure setInitialBudget from useBudget hook
  const [newBudget, setNewBudget] = useState(''); // Initialize state for newBudget
  
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
        <h2>Edit Budget</h2>
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

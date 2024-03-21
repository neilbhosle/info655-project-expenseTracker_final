
import React, { useState } from "react";
import { useBudget } from '../BudgetContext';

function AddBudgetForm() {
  const [extraBudget, setExtraBudget] = useState(NaN);
  const { budget, setInitialBudget, transactions, setTransactions } = useBudget();
  const [resetOptions, setResetOptions] = useState({
    budget: false,
    expenses: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    setInitialBudget(prev => prev + parseFloat(extraBudget));
    setExtraBudget(NaN);
  }

  function handleResetClick() {
    const resetOptions = [
      { label: "Reset Budget", value: "budget" },
      { label: "Reset Expenses", value: "expenses" },
      { label: "Reset Both", value: "both" },
    ];

    const resetChoice = window.prompt(
      "What would you like to reset?\n\n" +
      resetOptions.map((option, index) => `${index + 1}. ${option.label}`).join("\n")
    );

    if (resetChoice !== null) {
      const selectedOption = resetOptions.find((option, index) => resetChoice === (index + 1).toString());

      if (selectedOption) {
        setResetOptions({
          budget: selectedOption.value === "budget" || selectedOption.value === "both",
          expenses: selectedOption.value === "expenses" || selectedOption.value === "both",
        });
        handleResetConfirmation(selectedOption);
      } else {
        alert("Invalid choice. Please try again.");
      }
    }
  }

  function handleResetConfirmation(selectedOption) {
    const resetBudget = selectedOption.value === "budget" || selectedOption.value === "both";
    const resetExpenses = selectedOption.value === "expenses" || selectedOption.value === "both";

    const confirmReset = window.confirm(
      `Are you sure you want to reset ${resetBudget ? "budget" : ""} ${
        resetBudget && resetExpenses ? "and" : ""
      } ${resetExpenses ? "expenses" : ""}?`
    );

    if (confirmReset) { 
      if (resetBudget) {
        setInitialBudget(0);
      }
      if (resetExpenses) {
        setTransactions([]);
      }
      setResetOptions({ budget: false, expenses: false });
    }
  }

  return (
    <div className="card">
      <h2>Add Budget</h2>
      <form onSubmit={handleSubmit} className="add-budget">
        <input
          type="number"
          value={extraBudget}
          onChange={(e) => setExtraBudget(e.target.value)}
          placeholder="Add Budget"
          required
        />

        <button type="submit">Add Budget</button>

        <button type="button" onClick={handleResetClick}>
          Reset
        </button>

      </form>
      {(resetOptions.budget || resetOptions.expenses) && (
        <div>
          <p>You have chosen to reset:</p>
          {resetOptions.budget && <p>- Budget</p>}
          {resetOptions.expenses && <p>- Expenses</p>}
        </div>
      )}
    </div>
  );
}

export default AddBudgetForm;

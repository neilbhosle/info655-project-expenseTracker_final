// import React, { useState } from "react";
// import { useBudget } from '../BudgetContext'; 


// function AddBudgetForm()
// {

// const [extraBudget, setExtraBudget] = useState(NaN); // Initialize extraBudget state with NaN (Not a Number) to prevent empty string from being added to budget
// const { budget, setInitialBudget } = useBudget(); // Destructure budget and setInitialBudget from useBudget hook




// function handleSubmit(event) {
//   event.preventDefault();
//   setInitialBudget(prev => prev + parseFloat(extraBudget)); // Convert extraBudget to a float before adding
//   setExtraBudget(NaN); // Reset extraBudget after adding
// }

//     return <div className="card"> 
//             <form onSubmit={handleSubmit} className="add-budget"> 
//                 <input
//                   type="number"
//                   value={extraBudget}
//                   onChange={(e) => setExtraBudget(e.target.value)} // Update newBudget state with input value
//                   placeholder="Add Budget" 
//                   required 
//                 />
//                 <button type="submit">Add Budget</button>
//               </form>
//     </div>


// }

// export default AddBudgetForm;

// import React, { useState } from "react";
// import { useBudget } from '../BudgetContext';

// function AddBudgetForm() {
//   const [extraBudget, setExtraBudget] = useState(NaN);
//   const { budget, setInitialBudget, transactions, setTransactions } = useBudget();
//   const [resetOptions, setResetOptions] = useState({
//     budget: false,
//     expenses: false,
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//     setInitialBudget(prev => prev + parseFloat(extraBudget));
//     setExtraBudget(NaN);
//   }

//   function handleResetClick() {
//     const resetBudget = resetOptions.budget;
//     const resetExpenses = resetOptions.expenses;

//     if (!resetBudget && !resetExpenses) {
//       alert("Please select at least one option to reset.");
//       return;
//     }

//     const confirmReset = window.confirm(
//       `Are you sure you want to reset ${resetBudget ? "budget" : ""} ${
//         resetBudget && resetExpenses ? "and" : ""
//       } ${resetExpenses ? "expenses" : ""}?`
//     );

//     if (confirmReset) {
//       if (resetBudget) {
//         setInitialBudget(0);
//       }
//       if (resetExpenses) {
//         setTransactions([]);
//       }
//       setResetOptions({ budget: false, expenses: false });
//     }
//   }

//   function handleResetOptionChange(event) {
//     setResetOptions({
//       ...resetOptions,
//       [event.target.name]: event.target.checked,
//     });
//   }

//   return (
//     <div className="card">
//       <form onSubmit={handleSubmit} className="add-budget">
//         <input
//           type="number"
//           value={extraBudget}
//           onChange={(e) => setExtraBudget(e.target.value)}
//           placeholder="Add Budget"
//           required
//         />
//         <button type="submit">Add Budget</button>
//       </form>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             name="budget"
//             checked={resetOptions.budget}
//             onChange={handleResetOptionChange}
//           />
//           Reset Budget
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="expenses"
//             checked={resetOptions.expenses}
//             onChange={handleResetOptionChange}
//           />
//           Reset Expenses
//         </label>
//         <button type="button" onClick={handleResetClick}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AddBudgetForm;

// import React, { useState } from "react";
// import { useBudget } from '../BudgetContext';

// function AddBudgetForm() {
//   const [extraBudget, setExtraBudget] = useState(NaN);
//   const { budget, setInitialBudget, transactions, setTransactions } = useBudget();
//   const [resetOptions, setResetOptions] = useState({
//     budget: false,
//     expenses: false,
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//     setInitialBudget(prev => prev + parseFloat(extraBudget));
//     setExtraBudget(NaN);
//   }

//   function handleResetClick() {
//     const resetOptions = [
//       { label: "Reset Budget", value: "budget" },
//       { label: "Reset Expenses", value: "expenses" },
//     ];

//     const resetChoices = window.prompt(
//       "What would you like to reset?\n\n" +
//       resetOptions.map((option, index) => `${index + 1}. ${option.label}`).join("\n") +
//       "\n\nSelect options by entering the corresponding numbers, separated by commas."
//     );

//     if (resetChoices !== null) {
//       const selectedOptions = resetChoices.split(",").map(option => option.trim());
//       const validOptions = selectedOptions.every(option =>
//         resetOptions.some((resetOption, index) => option === (index + 1).toString())
//       );

//       if (validOptions) {
//         setResetOptions({
//           budget: selectedOptions.includes((resetOptions.findIndex(option => option.value === "budget") + 1).toString()),
//           expenses: selectedOptions.includes((resetOptions.findIndex(option => option.value === "expenses") + 1).toString()),
//         });
//       } else {
//         alert("Invalid choice. Please try again.");
//       }
//     }
//   }

//   function handleResetConfirmation() {
//     const resetBudget = resetOptions.budget;
//     const resetExpenses = resetOptions.expenses;

//     const confirmReset = window.confirm(
//       `Are you sure you want to reset ${resetBudget ? "budget" : ""} ${
//         resetBudget && resetExpenses ? "and" : ""
//       } ${resetExpenses ? "expenses" : ""}?`
//     );

//     if (confirmReset) {
//       if (resetBudget) {
//         setInitialBudget(0);
//       }
//       if (resetExpenses) {
//         setTransactions([]);
//       }
//       setResetOptions({ budget: false, expenses: false });
//     }
//   }

//   return (
//     <div className="card">
//       <form onSubmit={handleSubmit} className="add-budget">
//         <input
//           type="number"
//           value={extraBudget}
//           onChange={(e) => setExtraBudget(e.target.value)}
//           placeholder="Add Budget"
//           required
//         />
//         <button type="submit">Add Budget</button>
//       </form>
//       <div>
//         <button type="button" onClick={handleResetClick}>
//           Reset
//         </button>
//         {(resetOptions.budget || resetOptions.expenses) && (
//           <div>
//             <p>You have chosen to reset:</p>
//             {resetOptions.budget && <p>- Budget</p>}
//             {resetOptions.expenses && <p>- Expenses</p>}
//             <button type="button" onClick={handleResetConfirmation}>
//               Confirm Reset
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AddBudgetForm;

// import React, { useState } from "react";
// import { useBudget } from '../BudgetContext';

// function AddBudgetForm() {
//   const [extraBudget, setExtraBudget] = useState(NaN);
//   const { budget, setInitialBudget, transactions, setTransactions } = useBudget();
//   const [resetOptions, setResetOptions] = useState({
//     budget: false,
//     expenses: false,
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//     setInitialBudget(prev => prev + parseFloat(extraBudget));
//     setExtraBudget(NaN);
//   }

//   function handleResetClick() {
//     const resetOptions = [
//       { label: "Reset Budget", value: "budget" },
//       { label: "Reset Expenses", value: "expenses" },
//       { label: "Reset Both", value: "both" },
//     ];

//     const resetChoice = window.prompt(
//       "What would you like to reset?\n\n" +
//       resetOptions.map((option, index) => `${index + 1}. ${option.label}`).join("\n")
//     );

//     if (resetChoice !== null) {
//       const selectedOption = resetOptions.find((option, index) => resetChoice === (index + 1).toString());

//       if (selectedOption) {
//         setResetOptions({
//           budget: selectedOption.value === "budget" || selectedOption.value === "both",
//           expenses: selectedOption.value === "expenses" || selectedOption.value === "both",
//         });
//       } else {
//         alert("Invalid choice. Please try again.");
//       }
//     }
//   }

//   function handleResetConfirmation() {
//     const resetBudget = resetOptions.budget;
//     const resetExpenses = resetOptions.expenses;

//     const confirmReset = window.confirm(
//       `Are you sure you want to reset ${resetBudget ? "budget" : ""} ${
//         resetBudget && resetExpenses ? "and" : ""
//       } ${resetExpenses ? "expenses" : ""}?`
//     );

//     if (confirmReset) {
//       if (resetBudget) {
//         setInitialBudget(0);
//       }
//       if (resetExpenses) {
//         setTransactions([]);
//       }
//       setResetOptions({ budget: false, expenses: false });
//     }
//   }

//   return (
//     <div className="card">
//       <form onSubmit={handleSubmit} className="add-budget">
//         <input
//           type="number"
//           value={extraBudget}
//           onChange={(e) => setExtraBudget(e.target.value)}
//           placeholder="Add Budget"
//           required
//         />

//         <button type="button" onClick={handleResetClick}>
//           Reset
//         </button>

//         <button type="submit">Add Budget</button>

//       </form>
//       {(resetOptions.budget || resetOptions.expenses) && (
//         <div>
//           <p>You have chosen to reset:</p>
//           {resetOptions.budget && <p>- Budget</p>}
//           {resetOptions.expenses && <p>- Expenses</p>}
//           <button type="button" onClick={handleResetConfirmation}>
//             Confirm Reset
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddBudgetForm;

// import React, { useState } from "react";
// import { useBudget } from '../BudgetContext';

// function AddBudgetForm() {
//   const [extraBudget, setExtraBudget] = useState(NaN);
//   const { budget, setInitialBudget, transactions, setTransactions } = useBudget();
//   const [resetOptions, setResetOptions] = useState({
//     budget: false,
//     expenses: false,
//   });

//   function handleSubmit(event) {
//     event.preventDefault();
//     setInitialBudget(prev => prev + parseFloat(extraBudget));
//     setExtraBudget(NaN);
//   }

//   function handleResetClick() {
//     const resetOptions = [
//       { label: "Reset Budget", value: "budget" },
//       { label: "Reset Expenses", value: "expenses" },
//       { label: "Reset Both", value: "both" },
//     ];

//     const resetChoice = window.prompt(
//       "What would you like to reset?\n\n" +
//       resetOptions.map((option, index) => `${index + 1}. ${option.label}`).join("\n")
//     );

//     if (resetChoice !== null) {
//       const selectedOption = resetOptions.find((option, index) => resetChoice === (index + 1).toString());

//       if (selectedOption) {
//         setResetOptions({
//           budget: selectedOption.value === "budget" || selectedOption.value === "both",
//           expenses: selectedOption.value === "expenses" || selectedOption.value === "both",
//         });
//         handleResetConfirmation();
//       } else {
//         alert("Invalid choice. Please try again.");
//       }
//     }
//   }

//   function handleResetConfirmation() {
//     const resetBudget = resetOptions.budget;
//     const resetExpenses = resetOptions.expenses;

//     const confirmReset = window.confirm(
//       `Are you sure you want to reset ${resetBudget ? "budget" : ""} ${
//         resetBudget && resetExpenses ? "and" : ""
//       } ${resetExpenses ? "expenses" : ""}?`
//     );

//     if (confirmReset) {
//       if (resetBudget) {
//         setInitialBudget(0);
//       }
//       if (resetExpenses) {
//         setTransactions([]);
//       }
//       setResetOptions({ budget: false, expenses: false });
//     }
//   }

//   return (
//     <div className="card">
//       <form onSubmit={handleSubmit} className="add-budget">
//         <input
//           type="number"
//           value={extraBudget}
//           onChange={(e) => setExtraBudget(e.target.value)}
//           placeholder="Add Budget"
//           required
//         />

//         <button type="button" onClick={handleResetClick}>
//           Reset
//         </button>

//         <button type="submit">Add Budget</button>

//       </form>
//       {(resetOptions.budget || resetOptions.expenses) && (
//         <div>
//           <p>You have chosen to reset:</p>
//           {resetOptions.budget && <p>- Budget</p>}
//           {resetOptions.expenses && <p>- Expenses</p>}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddBudgetForm;

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

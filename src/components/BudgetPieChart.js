// // src/components/BudgetPieChart.js
// import React, { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { useBudget } from '../BudgetContext';
// import 'chart.js/auto'; // This line is necessary to register all Chart.js controllers

// const BudgetPieChart = () => {
//   const { initialBudget, transactions } = useBudget();
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     console.log('Transactions:', transactions); // Add this line
  
//     // Calculate the total expenses
//     const totalExpenses = transactions.reduce((acc, transaction) => {
//       console.log('Transaction:', transaction); // Add this line
//       return acc + transaction.amount;
//     }, 0);
  
//     console.log('Total Expenses:', totalExpenses);

//     // Calculate the remaining budget
//     const remainingBudget = initialBudget - totalExpenses;
//     console.log('Remaining Budget:', remainingBudget);

//     // Prepare the data for the pie chart
//     const data = {
//       labels: ['Remaining Budget', 'Expenses'],
//       datasets: [
//         {
//           data: [remainingBudget, totalExpenses],
//           backgroundColor: ['#36a2eb', '#ff6384'],
//           hoverBackgroundColor: ['#36a2eb', '#ff6384'],
//         },
//       ],
//     };
  
//     console.log('Chart Data:', data); // Add this line
//     setChartData(data);
//   }, [initialBudget, transactions]);

//   return chartData && chartData.datasets && chartData.datasets.length > 0 ? (
//     <div>
//       <h2>Budget Breakdown</h2>
//       <Pie data={chartData} />
//     </div>
//   ) : null;
// };

// export default BudgetPieChart;

// import React, { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { useBudget } from '../BudgetContext';
// import 'chart.js/auto'; // This line is necessary to register all Chart.js controllers
// import '../App.css'
// // import '../Style.css';

// const BudgetPieChart = () => {
//   const { initialBudget, transactions } = useBudget();
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     console.log('Transactions:', transactions); // Add this line

//     // Calculate the total expenses
//     const totalExpenses = transactions.reduce((acc, transaction) => {
//       console.log('Transaction:', transaction); // Add this line
//       return acc + transaction.amount;
//     }, 0);

//     console.log('Total Expenses:', totalExpenses);

//     // Calculate the remaining budget
//     const remainingBudget = initialBudget - totalExpenses;
//     console.log('Remaining Budget:', remainingBudget);

//     // Prepare the data for the pie chart
//     const data = {
//       labels: ['Remaining Budget', 'Expenses'],
//       datasets: [
//         {
//           data: [remainingBudget, totalExpenses],
//           backgroundColor: ['#36a2eb', '#ff6384'],
//           hoverBackgroundColor: ['#36a2eb', '#ff6384'],
//         },
//       ],
//     };

//     console.log('Chart Data:', data); // Add this line
//     setChartData(data);
//   }, [initialBudget, transactions]);

//   return chartData && chartData.datasets && chartData.datasets.length > 0 ? (
//     <div className="pie-chart-container">
//       <h2>Budget Breakdown</h2>
//       <Pie data={chartData} />
//     </div>
//   ) : null;
// };

// export default BudgetPieChart;

import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useBudget } from '../BudgetContext';
import 'chart.js/auto';
import '../App.css';

const BudgetPieChart = () => {
  const { initialBudget, transactions } = useBudget();
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    console.log('Transactions:', transactions);

    const totalExpenses = transactions.reduce((acc, transaction) => {
      console.log('Transaction:', transaction);
      return acc + transaction.amount;
    }, 0);

    console.log('Total Expenses:', totalExpenses);

    const remainingBudget = initialBudget - totalExpenses;
    console.log('Remaining Budget:', remainingBudget);

    const data = {
      labels: ['Remaining Budget', 'Expenses'],
      datasets: [
        {
          data: [remainingBudget, totalExpenses],
          backgroundColor: [
            remainingBudget >= 0 ? '#36a2eb' : '#ffff00', // Green if positive, red if negative
            '#ff6384',
          ],
          hoverBackgroundColor: [
            remainingBudget >= 0 ? '#36a2eb' : '#ffff00', // Green if positive, red if negative
            '#ff6384',
          ],
        },
      ],
    };

    console.log('Chart Data:', data);
    setChartData(data);
  }, [initialBudget, transactions]);

  return chartData && chartData.datasets && chartData.datasets.length > 0 ? (
    <div>
      <h2>Budget Breakdown</h2>
      <div className="pie-chart-container">
        <Pie data={chartData} />
        </div>
    </div>
  ) : null;
};

export default BudgetPieChart;
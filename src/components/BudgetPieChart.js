
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
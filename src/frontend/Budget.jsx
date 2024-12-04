import React, { useEffect, useState } from 'react';

const Budget = () => {
  const [budgetData, setBudgetData] = useState({
    income: 0,
    expenses: [],
    totalExpenses: 0,
    remaining: 0,
  });

  useEffect(() => {
    const fetchBudgetData = async () => {
      try {
        const response = await fetch('/api/budget');
        const data = await response.json();
        const totalExpenses = data.expenses.reduce((sum, expense) => sum + expense.amount, 0);
        const remaining = data.income - totalExpenses;
        setBudgetData({ ...data, totalExpenses, remaining });
      } catch (error) {
        console.error('Error fetching budget data:', error);
      }
    };

    fetchBudgetData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Budget Overview</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-lg font-medium">Monthly Income: ${budgetData.income}</p>
        <p className="text-lg font-medium">Total Expenses: ${budgetData.totalExpenses}</p>
        <p
          className={`text-lg font-medium ${
            budgetData.remaining >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
          }`}
        >
          Remaining Balance: ${budgetData.remaining}
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Expenses</h2>
        {budgetData.expenses.map((expense, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mb-2"
          >
            <span>{expense.category}</span>
            <span>${expense.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Budget;

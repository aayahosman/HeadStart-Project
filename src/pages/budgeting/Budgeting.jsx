import React, { useState } from 'react';
import { PieChart, LineChart, Line, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Plus, Trash2 } from 'lucide-react';

export const Budgeting = () => {
  const [expenses, setExpenses] = useState([
    { category: 'Housing', amount: 800, color: '#FF6B6B' },
    { category: 'Food', amount: 300, color: '#4ECDC4' },
    { category: 'Books', amount: 200, color: '#45B7D1' },
    { category: 'Transportation', amount: 150, color: '#96CEB4' },
  ]);

  const [newExpense, setNewExpense] = useState({ category: '', amount: '' });

  const monthlyData = [
    { month: 'Jan', spending: 1200 },
    { month: 'Feb', spending: 1350 },
    { month: 'Mar', spending: 1100 },
    { month: 'Apr', spending: 1450 },
  ];

  const handleAddExpense = () => {
    if (newExpense.category && newExpense.amount) {
      setExpenses([...expenses, { 
        ...newExpense, 
        color: `#${Math.floor(Math.random()*16777215).toString(16)}` 
      }]);
      setNewExpense({ category: '', amount: '' });
    }
  };

  const handleDeleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Budget Tracker</h1>
        <p className="text-gray-600 mt-2">Manage your monthly expenses</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Expense Input */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Add New Expense</h2>
          </div>
          <div className="p-6">
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                placeholder="Category"
                className="flex-1 p-2 border rounded-md"
                value={newExpense.category}
                onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
              />
              <input
                type="number"
                placeholder="Amount"
                className="flex-1 p-2 border rounded-md"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
              />
              <button
                onClick={handleAddExpense}
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {expenses.map((expense, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: expense.color }} />
                    <span>{expense.category}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium">${expense.amount}</span>
                    <button
                      onClick={() => handleDeleteExpense(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Expense Breakdown</h2>
          </div>
          <div className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenses}
                    dataKey="amount"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {expenses.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Spending Trends */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Spending Trends</h2>
        </div>
        <div className="p-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <Line type="monotone" dataKey="spending" stroke="#8884d8" />
                <Tooltip />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-600">Total Expenses</h3>
            <p className="text-3xl font-bold mt-2">${totalExpenses}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-600">Monthly Budget</h3>
            <p className="text-3xl font-bold mt-2">$2,000</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-600">Remaining</h3>
            <p className="text-3xl font-bold mt-2 text-green-500">${2000 - totalExpenses}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { createFinancialData, getFinancialData } from './API.jsx';

const UserList = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    income: '',
    expenses: '',
    goals: [],
  });

  const [financialData, setFinancialData] = useState(null);

  // Fetch the user's financial data when the component mounts
  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        // Replace 'userId' with actual user ID from your app's authentication context or state
        const data = await getFinancialData('userId'); // Fetch financial data for a user
        setFinancialData(data);
      } catch (error) {
        console.error('Error fetching financial data:', error);
      }
    };

    fetchFinancialData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newFinancialData = await createFinancialData(userData);
      setFinancialData(newFinancialData);
      alert('Financial data submitted successfully!');
    } catch (error) {
      console.error('Error creating financial data:', error);
      alert('There was an error submitting your financial data');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Manage Your Financial Data</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Monthly Income</label>
            <input
              type="number"
              name="income"
              value={userData.income}
              onChange={(e) => setUserData({ ...userData, income: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter monthly income"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Monthly Expenses</label>
            <input
              type="number"
              name="expenses"
              value={userData.expenses}
              onChange={(e) => setUserData({ ...userData, expenses: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter monthly expenses"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Financial Goals</label>
            <div className="space-y-2">
              {['Build emergency fund', 'Save for textbooks', 'Manage student loans', 'Start investing'].map((goal) => (
                <label key={goal} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    checked={userData.goals.includes(goal)}
                    onChange={(e) => {
                      const newGoals = e.target.checked
                        ? [...userData.goals, goal]
                        : userData.goals.filter((g) => g !== goal);
                      setUserData({ ...userData, goals: newGoals });
                    }}
                  />
                  <span className="text-gray-900 dark:text-white">{goal}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Save Financial Data
          </button>
        </form>

        {financialData && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Your Financial Data</h2>
            <p><strong>Income:</strong> ${financialData.income}</p>
            <p><strong>Expenses:</strong> ${financialData.expenses}</p>
            <p><strong>Goals:</strong> {financialData.goals.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;

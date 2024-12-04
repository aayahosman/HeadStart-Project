import React, { useState } from 'react';

const SetGoal = () => {
  const [goal, setGoal] = useState({
    name: '',
    target: '',
    deadline: '',
  });

  const handleChange = (e) => {
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Goal Added:', goal);
    alert('Goal added successfully!');
    setGoal({ name: '', target: '', deadline: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Set New Goal</h1>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Goal Name</label>
          <input
            type="text"
            name="name"
            value={goal.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="e.g., Save for Laptop"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Target Amount</label>
          <input
            type="number"
            name="target"
            value={goal.target}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="e.g., 1500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={goal.deadline}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Set Goal
        </button>
      </form>
    </div>
  );
};

export default SetGoal;

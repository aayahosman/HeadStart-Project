import React, { useState } from 'react';
import { Target, Plus, Trophy, TrendingUp, DollarSign } from 'lucide-react';

export const Goals = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Emergency Fund',
      target: 1000,
      current: 750,
      deadline: '2024-12-31',
      category: 'Savings',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Textbook Fund',
      target: 500,
      current: 200,
      deadline: '2024-08-31',
      category: 'Education',
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Laptop Savings',
      target: 1200,
      current: 400,
      deadline: '2024-11-30',
      category: 'Technology',
      color: 'bg-purple-500',
    },
  ]);

  const [newGoal, setNewGoal] = useState({
    title: '',
    target: '',
    deadline: '',
    category: '',
  });

  const handleAddGoal = () => {
    if (newGoal.title && newGoal.target && newGoal.deadline) {
      setGoals([
        ...goals,
        {
          ...newGoal,
          id: goals.length + 1,
          current: 0,
          color: 'bg-blue-500',
        },
      ]);
      setNewGoal({ title: '', target: '', deadline: '', category: '' });
    }
  };

  const calculateProgress = (current, target) => (current / target) * 100;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Financial Goals</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Track and achieve your financial targets</p>
      </div>

      {/* Add Goal Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold flex items-center">
            <Target className="w-5 h-5 text-blue-500 mr-2" />
            Create New Goal
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Goal Title"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              value={newGoal.title}
              onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
            />
            <input
              type="number"
              placeholder="Target Amount"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              value={newGoal.target}
              onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
            />
            <input
              type="date"
              placeholder="Deadline"
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              value={newGoal.deadline}
              onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
            />
            <button
              onClick={handleAddGoal}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Goal
            </button>
          </div>
        </div>
      </div>

      {/* Goals List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{goal.title}</h3>
                <Trophy className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {goal.category} - Due by {goal.deadline}
              </p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${goal.color}`}
                    style={{ width: `${calculateProgress(goal.current, goal.target)}%` }}
                  />
                </div>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                  Progress: {goal.current}/{goal.target}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;

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
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Financial Goals</h1>
        <p className="text-gray-600 mt-2">Track and achieve your financial targets</p>
      </div>

      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold flex items-center">
            <Target className="w-5 h-5 text-blue-500 mr-2" />
            Create New Goal
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Goals;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DollarSign, BookOpen, Target, BarChart2, PlusCircle, Compass, FileText } from 'lucide-react';
import { useTheme } from '../../frontend/ThemeContext';

export const Home = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const quickActions = [
    { title: 'Add Expense', icon: PlusCircle, color: 'text-red-500', action: () => navigate('/add-expense') },
    { title: 'Set New Goal', icon: Target, color: 'text-green-500', action: () => navigate('/set-goal') },
    { title: 'View Budget', icon: BarChart2, color: 'text-blue-500', action: () => navigate('/budget') },
  ];

  const metrics = [
    { label: 'Monthly Budget', value: '$1,200', change: '+2%', trend: 'up' },
    { label: 'Total Savings', value: '$450', change: '+12%', trend: 'up' },
    { label: 'Expenses', value: '$750', change: '-5%', trend: 'down' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Your financial journey starts here</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {quickActions.map((action) => (
          <button
            key={action.title}
            onClick={action.action}
            className="flex items-center p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <action.icon className={`w-5 h-5 ${action.color} mr-3`} />
            <span className="font-medium">{action.title}</span>
          </button>
        ))}
      </div>

      {/* Main Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link to="/budgeting">
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <DollarSign className="w-5 h-5 text-green-500 mr-2" />
              <h3 className="font-semibold text-lg">Budgeting</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Track expenses and manage your monthly budget</p>
          </div>
        </Link>

        <Link to="/educate">
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="font-semibold text-lg">Learn</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Financial education modules and resources</p>
          </div>
        </Link>

        <Link to="/goals">
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <Target className="w-5 h-5 text-purple-500 mr-2" />
              <h3 className="font-semibold text-lg">Goals</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Set and track your financial goals</p>
          </div>
        </Link>

        <Link to="/resources">
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <Compass className="w-5 h-5 text-yellow-500 mr-2" />
              <h3 className="font-semibold text-lg">Resources</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Explore tools and information to support your financial journey</p>
          </div>
        </Link>

        {/* New Card for Managing Financial Data */}
        <Link to="/financial-data">
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center mb-4">
              <FileText className="w-5 h-5 text-orange-500 mr-2" />
              <h3 className="font-semibold text-lg">Manage Financial Data</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">View and update your financial data</p>
          </div>
        </Link>
      </div>

      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-6 shadow"
          >
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{metric.label}</p>
            <p className="text-2xl font-bold mt-2">{metric.value}</p>
            <p
              className={`text-sm mt-1 ${
                metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}
            >
              {metric.change} from last month
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow hover:shadow-md transition"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? <Sun className="text-yellow-500 w-6 h-6" /> : <Moon className="text-blue-500 w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;

import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' // Load initial state from localStorage
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark'); // Add the `dark` class
      localStorage.setItem('theme', 'dark'); // Save to localStorage
    } else {
      document.documentElement.classList.remove('dark'); // Remove the `dark` class
      localStorage.setItem('theme', 'light'); // Save to localStorage
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

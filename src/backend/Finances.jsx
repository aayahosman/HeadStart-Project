// src/components/Finances.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';

const Finances = () => {
  const [financialData, setFinancialData] = useState({});
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [goals, setGoals] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      axiosInstance
        .get('/financial-data', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
          setFinancialData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching financial data', error);
        });
    }
  }, [token]);

  const handleSave = () => {
    if (token) {
      axiosInstance
        .post(
          '/financial-data',
          { income, expenses, goals },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((response) => {
          console.log('Financial data saved successfully');
        })
        .catch((error) => {
          console.error('Error saving financial data', error);
        });
    }
  };

  return (
    <div>
      <h2>Financial Data</h2>
      <div>
        <input 
          type="number" 
          value={income} 
          onChange={(e) => setIncome(e.target.value)} 
          placeholder="Income" 
        />
        <input 
          type="number" 
          value={expenses} 
          onChange={(e) => setExpenses(e.target.value)} 
          placeholder="Expenses" 
        />
        <input 
          type="text" 
          value={goals} 
          onChange={(e) => setGoals(e.target.value)} 
          placeholder="Goals (comma separated)" 
        />
        <button onClick={handleSave}>Save</button>
      </div>

      <div>
        <h3>Your Financial Data:</h3>
        <p>Income: {financialData.income}</p>
        <p>Expenses: {financialData.expenses}</p>
        <p>Goals: {financialData.goals}</p>
      </div>
    </div>
  );
};

export default Finances;

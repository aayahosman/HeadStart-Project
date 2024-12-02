// frontend/src/api/api.js
import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend API URL
});

// Signup API call
export const signup = async (userData) => {
  try {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

// Login API call
export const login = async (userData) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Create financial data API call
export const createFinancialData = async (financialData) => {
  try {
    const response = await api.post('/financialData', financialData);
    return response.data;
  } catch (error) {
    console.error('Error creating financial data:', error);
    throw error;
  }
};

// Get financial data API call
export const getFinancialData = async (userId) => {
  try {
    const response = await api.get(`/financialData/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching financial data:', error);
    throw error;
  }
};

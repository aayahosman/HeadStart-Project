// src/axios.js
import axios from 'axios';

// Create an Axios instance to set the base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5001/api', // Replace with your backend URL
});

// Add token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

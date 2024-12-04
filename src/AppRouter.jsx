import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Starting } from './pages/starting/Starting';
import { Budgeting } from './pages/budgeting/Budgeting';
import { Educate } from './pages/educate/Educate';
import { Goals } from './pages/goals/Goals';
import { Resources } from './pages/resources/Resources';
import UserList from './frontend/userList';
import AddExpense from './frontend/AddExpense';
import SetGoal from './frontend/SetGoal'; 
import Budget from './frontend/Budget'; 
import { ThemeProvider } from './frontend/ThemeContext';
import ThemeToggle from './frontend/ThemeToggle';

function AppRouter(props) {
    return (
        <ThemeProvider> 
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                <ThemeToggle />
                <Routes>
                    <Route path="/" element={<Starting />} />  
                    <Route path="/home" element={<Home />} />  
                    <Route path="/starting" element={<Starting />} />
                    <Route path="/budgeting" element={<Budgeting />} />
                    <Route path="/educate" element={<Educate />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/financial-data" element={<UserList />} />
                    <Route path="/add-expense" element={<AddExpense />} />
                    <Route path="/set-goal" element={<SetGoal />} />
                    <Route path="/budget" element={<Budget />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default AppRouter;

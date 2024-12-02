import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Starting } from './pages/starting/Starting'
import { Budgeting } from './pages/budgeting/Budgeting'
import { Educate } from './pages/educate/Educate'
import { Goals } from './pages/goals/Goals'
import { Resources } from './pages/resources/Resources'
import UserList from './frontend/userList';

function AppRouter(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starting" element={<Starting />} />
            <Route path="/budgeting" element={<Budgeting />} />
            <Route path="/educate" element={<Educate />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/financial-data" element={<UserList />} />
        </Routes>
    );
}

export default AppRouter;
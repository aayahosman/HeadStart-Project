import React from 'react';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            {/* Optional: Add a Navbar or Header here */}
            <div className="bg-gray-100 min-h-screen">
                <AppRouter />
            </div>
            {/* Optional: Add a Footer here */}
        </BrowserRouter>
    );
}

export default App;


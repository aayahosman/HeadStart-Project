import React from 'react';

export function PageContainer({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
            <div className="w-full max-w-3xl">{children}</div>
        </div>
    );
}
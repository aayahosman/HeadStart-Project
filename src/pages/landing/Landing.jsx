import React from 'react';
import { PageContainer } from '../../Pagecontainer';
import { Link } from 'react-router-dom';
export function Landing() {
  return (
      <PageContainer>
<div className="fixed inset-0 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-400 flex items-center justify-center p-6">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center space-y-8">
                <h1 className="text-4xl font-extrabold text-gray-800">
                    Welcome to <span className="text-pink-600">EquiLearn</span>
                </h1>
                <p className="text-lg text-gray-600">
                    Transform your notes into structured study guides effortlessly.
                </p>
                
                <Link to="/upload">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 mt-8 mr-6">
                        Start Creating
                    </button>
                </Link>

                <Link to="/visualgraph">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 mt-8">
                        Personalize Your Learning
                    </button>
                </Link>

                <div className="flex justify-center space-x-2 mt-6">
                    <span className="h-2 w-2 bg-pink-600 rounded-full"></span>
                    <span className="h-2 w-2 bg-pink-300 rounded-full"></span>
                    <span className="h-2 w-2 bg-pink-300 rounded-full"></span>
                </div>
            </div>
        </div>
      </PageContainer>
  );
}
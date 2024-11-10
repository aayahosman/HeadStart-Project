import React from 'react';
import { PageContainer } from '../../Pagecontainer';
import { Link } from 'react-router-dom';
export function VisualGraph() {
    return (
        <PageContainer>
<div className="fixed inset-0 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-400 flex items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
                
            <Link to="/">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out">
                        Back to Home
                    </button>
                </Link>
                
                
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                    Personalize Your Learning Experience
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Visual Learners */}
                    <div className="bg-pink-100 rounded-lg shadow p-6 text-center">
                        <h3 className="text-2xl font-semibold text-pink-700 mb-4">Visual Learners</h3>
                        <p className="text-gray-700 mb-4">
                            Visual learners benefit from diagrams, color-coding, and videos.
                        </p>
                        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                            Explore Visual Tools
                        </button>
                    </div>

                    {/* Auditory Learners */}
                    <div className="bg-pink-100 rounded-lg shadow p-6 text-center">
                        <h3 className="text-2xl font-semibold text-pink-700 mb-4">Auditory Learners</h3>
                        <p className="text-gray-700 mb-4">
                            Auditory learners excel with lectures, podcasts, and discussions.
                        </p>
                        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                            Discover Auditory Resources
                        </button>
                    </div>

                    {/* Kinesthetic Learners */}
                    <div className="bg-pink-100 rounded-lg shadow p-6 text-center">
                        <h3 className="text-2xl font-semibold text-pink-700 mb-4">Kinesthetic Learners</h3>
                        <p className="text-gray-700 mb-4">
                            Kinesthetic learners prefer hands-on activities and physical engagement.
                        </p>
                        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                            Find Kinesthetic Activities
                        </button>
                    </div>

                    {/* Reading/Writing Learners */}
                    <div className="bg-pink-100 rounded-lg shadow p-6 text-center">
                        <h3 className="text-2xl font-semibold text-pink-700 mb-4">Reading/Writing Learners</h3>
                        <p className="text-gray-700 mb-4">
                            Reading/writing learners thrive with note-taking, reading, and journaling.
                        </p>
                        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                            Access Reading Resources
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </PageContainer>
    );
}




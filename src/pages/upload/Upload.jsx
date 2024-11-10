import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Upload() {
    const [file, setFile] = useState(null);

    
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        console.log("Selected file:", selectedFile);
    };

    return (
<div className="fixed inset-0 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-400 flex items-center justify-center p-6">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Upload Your Notes</h2>

                <textarea
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                    placeholder="Paste your notes here..."
                ></textarea>

                <div className="space-y-4">
                    <label className="w-full flex flex-col items-center px-4 py-6 bg-pink-500 text-white rounded-lg shadow-lg tracking-wide uppercase cursor-pointer hover:bg-pink-600">
                        <span className="text-base leading-normal">Select a file</span>
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>

                   
                    {file && <p className="text-gray-600">Selected file: {file.name}</p>}

                    <input
                        type="url"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter URL..."
                    />

                    
                    <Link to="/summarize">
                        <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 mt-4">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}







import React, { useState }  from 'react';
import { PageContainer } from '../../Pagecontainer';
import { Link } from 'react-router-dom';
export function Summarize() {
    const [detailLevel, setDetailLevel] = useState(3);
    const [options, setOptions] = useState({
        keyPoints: false,
        definitions: false,
        examples: false,
    });
    const handleOptionChange = (e) => {
        const { id, checked } = e.target;
        setOptions((prevOptions) => ({ ...prevOptions, [id]: checked }));
    };
    return (
        <PageContainer>
            <div className="fixed inset-0 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-400 flex items-center justify-center p-6">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Summarization Options</h2>
                
                <div className="text-left space-y-4">
                    <label className="block">
                        <span className="text-gray-700 font-semibold">Detail Level</span>
                        <input 
                            type="range" 
                            min="1" 
                            max="5" 
                            value={detailLevel} 
                            onChange={(e) => setDetailLevel(e.target.value)} 
                            className="w-full mt-2 accent-pink-600"
                        />
                        <p className="text-gray-600 text-sm mt-1">Level: {detailLevel}</p>
                    </label>
                    
                    <div className="flex items-center space-x-3">
                        <input 
                            type="checkbox" 
                            id="keyPoints" 
                            checked={options.keyPoints} 
                            onChange={handleOptionChange} 
                            className="h-5 w-5 text-pink-600 focus:ring-pink-500 rounded"
                        />
                        <label htmlFor="keyPoints" className="text-gray-700 font-medium">Key Points</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <input 
                            type="checkbox" 
                            id="definitions" 
                            checked={options.definitions} 
                            onChange={handleOptionChange} 
                            className="h-5 w-5 text-pink-600 focus:ring-pink-500 rounded"
                        />
                        <label htmlFor="definitions" className="text-gray-700 font-medium">Definitions</label>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <input 
                            type="checkbox" 
                            id="examples" 
                            checked={options.examples} 
                            onChange={handleOptionChange} 
                            className="h-5 w-5 text-pink-600 focus:ring-pink-500 rounded"
                        />
                        <label htmlFor="examples" className="text-gray-700 font-medium">Examples</label>
                    </div>
                </div>

                <Link to="/studyguide">
                    <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 mt-4">
                        Generate Study Guide
                    </button>
                </Link>
            </div>
        </div>
        </PageContainer>
    );
}
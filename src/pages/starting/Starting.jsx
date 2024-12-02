import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Starting = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    income: '',
    expenses: '',
    goals: []
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to FinLit</h1>
          <p className="text-gray-600 mt-2">Let's get started on your financial journey</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= num ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}>
                {num}
              </div>
              {num < 4 && (
                <div className={`h-1 w-16 ${
                  step > num ? 'bg-blue-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <div className="border-b p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {step === 1 && "Basic Information"}
              {step === 2 && "Financial Situation"}
              {step === 3 && "Goals Setting"}
              {step === 4 && "Final Steps"}
            </h2>
          </div>
          <div className="p-6">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What's your name?
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What year are you in?
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select year</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What's your monthly income?
                  </label>
                  <input
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated monthly expenses?
                  </label>
                  <input
                    type="number"
                    name="expenses"
                    value={formData.expenses}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">Select your financial goals:</p>
                {['Build emergency fund', 'Save for textbooks', 'Manage student loans', 'Start investing'].map((goal) => (
                  <label key={goal} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500"
                      onChange={(e) => {
                        const newGoals = e.target.checked
                          ? [...formData.goals, goal]
                          : formData.goals.filter(g => g !== goal);
                        setFormData({ ...formData, goals: newGoals });
                      }}
                    />
                    <span>{goal}</span>
                  </label>
                ))}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Great! You're almost done!</h3>
                <p className="text-gray-600">
                  We'll use this information to customize your experience and help you reach your financial goals.
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                {step === 4 ? 'Get Started' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starting;
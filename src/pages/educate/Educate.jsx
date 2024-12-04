import React, { useState } from 'react';
import { BookOpen, CheckCircle, Lock, Play } from 'lucide-react';

export const Educate = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: 'Financial Basics',
      description: 'Learn the fundamentals of personal finance',
      lessons: [
        { id: 1, title: 'Understanding Income', completed: true, duration: '10 min' },
        { id: 2, title: 'Budgeting 101', completed: true, duration: '15 min' },
        { id: 3, title: 'Saving Strategies', completed: false, duration: '12 min' },
      ],
      progress: 66,
    },
    {
      id: 2,
      title: 'Student Loans',
      description: 'Master your student loan management',
      lessons: [
        { id: 1, title: 'Types of Student Loans', completed: true, duration: '8 min' },
        { id: 2, title: 'Repayment Options', completed: false, duration: '10 min' },
        { id: 3, title: 'Loan Forgiveness', completed: false, duration: '15 min' },
      ],
      progress: 33,
    },
    {
      id: 3,
      title: 'Credit Building',
      description: 'Build and maintain good credit',
      lessons: [
        { id: 1, title: 'Credit Score Basics', completed: false, duration: '10 min' },
        { id: 2, title: 'Building Credit', completed: false, duration: '12 min' },
        { id: 3, title: 'Credit Cards 101', completed: false, duration: '15 min' },
      ],
      progress: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Financial Education</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Master your financial knowledge</p>
      </div>

      {/* Progress Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">Completed Modules</h3>
              <p className="text-3xl font-bold mt-2">2/6</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">Total Time Spent</h3>
              <p className="text-3xl font-bold mt-2">45 mins</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">Knowledge Score</h3>
              <p className="text-3xl font-bold mt-2">85%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {modules.map((module) => (
          <div key={module.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div 
              className="p-6 border-b border-gray-200 dark:border-gray-700 cursor-pointer" 
              onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-blue-500 mr-2" />
                  <h2 className="text-lg font-semibold">{module.title}</h2>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {module.progress}% complete
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
            </div>
            {activeModule === module.id && (
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{module.description}</p>
                <div className="space-y-3">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="flex items-center">
                        {lesson.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        ) : (
                          <Lock className="w-5 h-5 text-gray-400 mr-2" />
                        )}
                        <span>{lesson.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{lesson.duration}</span>
                        <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educate;

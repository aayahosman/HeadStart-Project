import React, { useState } from 'react';
import { Search, ExternalLink, BookOpen, GraduationCap, DollarSign, HelpCircle } from 'lucide-react';

export const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      category: 'Financial Aid',
      icon: DollarSign,
      items: [
        { title: 'FAFSA Guide', description: 'Step-by-step guide to filling out your FAFSA application', link: '#' },
        { title: 'Scholarship Database', description: 'Current scholarship opportunities for first-gen students', link: '#' },
        { title: 'Grant Information', description: 'Available grants and application deadlines', link: '#' }
      ]
    },
    {
      category: 'Academic Support',
      icon: GraduationCap,
      items: [
        { title: 'Campus Financial Office', description: 'Contact information and office hours', link: '#' },
        { title: 'Student Success Center', description: 'Free academic and financial counseling services', link: '#' },
        { title: 'Work Study Programs', description: 'On-campus job opportunities', link: '#' }
      ]
    },
    {
      category: 'Educational Materials',
      icon: BookOpen,
      items: [
        { title: 'Budgeting Basics', description: 'Free course on creating and maintaining a budget', link: '#' },
        { title: 'Credit Score Guide', description: 'Understanding and building your credit score', link: '#' },
        { title: 'Student Loan Guide', description: 'Types of loans and repayment strategies', link: '#' }
      ]
    },
    {
      category: 'FAQ',
      icon: HelpCircle,
      items: [
        { title: 'Common Questions', description: 'Frequently asked questions about financial aid', link: '#' },
        { title: 'Glossary', description: 'Financial terms and definitions', link: '#' },
        { title: 'Emergency Aid', description: 'Resources for unexpected financial emergencies', link: '#' }
      ]
    }
  ];

  const filteredResources = resources.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter((category) => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Financial Resources</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Access tools and information to support your financial journey</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((category) => (
          <div key={category.category} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <category.icon className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold">{category.category}</h2>
              </div>
            </div>
            <div className="space-y-4">
              {category.items.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="block p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;

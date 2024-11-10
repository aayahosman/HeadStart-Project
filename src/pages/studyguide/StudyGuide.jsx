import React, { useState } from 'react';
import { PageContainer } from '../../Pagecontainer';
import { Link } from 'react-router-dom';
export function StudyGuide() {
    const [studyGuideData] = useState({
        keyConcepts: [
            "Colonial Legacy: The enduring influence of colonialism on current education systems, often favoring Western perspectives.",
            "Decolonization: The process of challenging and dismantling colonial structures, narratives, and biases.",
            "Representation: Ensuring diverse voices and perspectives are included in the curriculum.",
            "Indigenous Knowledge Systems: Recognizing and integrating non-Western knowledge traditions and perspectives."
        ],
        definitions: [
            "Decolonizing Education: Efforts to remove colonial biases, structures, and perspectives from educational systems and curricula.",
            "Eurocentrism: A worldview that centers European history, culture, and values, often marginalizing other perspectives.",
            "Intersectionality: A framework for understanding how aspects of identity (e.g., race, gender) intersect and impact one’s experience, including in education."
        ],
        resources: [
            { name: "Decolonizing Education: Nourishing the Learning Spirit", link: "https://www.ubcpress.ca/decolonizing-education" },
            { name: "Decolonization is not a metaphor", link: "https://clas.osu.edu/sites/clas.osu.edu/files/Tuck%20and%20Yang%202012%20Decolonization%20is%20not%20a%20metaphor.pdf" },
            { name: "The Importance of Decolonizing the Curriculum", link: "https://www.aacsb.edu/insights/articles/2023/02/decolonizing-the-business-school-curriculum#:~:text=As%20we%20take%20a%20deeper,epistemologies%20that%20shape%20our%20knowledge." }
        ],
        questions: [
            "How does colonialism continue to shape modern education systems?",
            "What are some ways to integrate Indigenous knowledge into current curricula?",
            "Why is it important to include multiple perspectives in educational materials?"
        ]
    });

    const handleSave = () => {
        localStorage.setItem('studyGuide', JSON.stringify(studyGuideData));
        alert("Study guide saved to local storage!");
    };
    return (
      <PageContainer>
        <div className="fixed inset-0 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-400 flex items-center justify-center p-6">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 space-y-6 overflow-y-auto" style={{ maxHeight: '80vh' }}>
                
            <Link to="/">
                    <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out">
                        Back to Home
                    </button>
                </Link>
                
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Study Guide: Decolonizing Education</h2>

                {/* Key Concepts Section */}
                <div className="bg-pink-100 p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-pink-700 mb-4">Key Concepts</h3>
                    <ul className="text-gray-700 list-disc ml-5 space-y-2">
                        {studyGuideData.keyConcepts.map((concept, index) => (
                            <li key={index}>{concept}</li>
                        ))}
                    </ul>
                </div>

                {/* Definitions Section */}
                <div className="bg-pink-100 p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-pink-700 mb-4">Definitions</h3>
                    <ul className="text-gray-700 list-disc ml-5 space-y-2">
                        {studyGuideData.definitions.map((definition, index) => (
                            <li key={index}>{definition}</li>
                        ))}
                    </ul>
                </div>

                {/* Useful Resources Section */}
                <div className="bg-pink-100 p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-pink-700 mb-4">Useful Resources</h3>
                    <ul className="text-gray-700 list-disc ml-5 space-y-2">
                        {studyGuideData.resources.map((resource, index) => (
                            <li key={index}>
                                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                                    {resource.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Check Your Understanding Section */}
                <div className="bg-pink-100 p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-semibold text-pink-700 mb-4">Check Your Understanding</h3>
                    <ul className="text-gray-700 list-decimal ml-5 space-y-2">
                        {studyGuideData.questions.map((question, index) => (
                            <li key={index}>{question}</li>
                        ))}
                    </ul>
                </div>

                {/* Save and Edit Buttons */}
                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        onClick={handleSave}
                        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                    >
                        Save
                    </button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-6 rounded-lg">
                        Edit
                    </button>
                </div>
            </div>
        </div>
      </PageContainer>
  );
}


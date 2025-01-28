import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const platforms = [
  { name: 'LeetCode', logo: '/logos/leetcode.png', url: 'https://leetcode.com/yourprofile' },
  { name: 'GeeksforGeeks', logo: '/logos/gfg.png', url: 'https://geeksforgeeks.org/yourprofile' },
  { name: 'CodeChef', logo: '/logos/codechef.png', url: 'https://www.codechef.com/users/yourprofile' },
  { name: 'Codeforces', logo: '/logos/codeforces.png', url: 'https://codeforces.com/profile/yourprofile' },
  { name: 'Kaggle', logo: '/logos/kaggle.png', url: 'https://kaggle.com/yourprofile' },
  { name: 'GitHub', logo: '/logos/github.png', url: 'https://github.com/yourprofile' },
];

function Platforms() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">My Journey with Data Structures and Algorithms</h1>
        </div>
      </header>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          <p className="mb-6">
            My journey with Data Structures and Algorithms (DSA) has been filled with challenges and growth. Starting with 
            simple problems on arrays and strings, I gradually moved on to solving complex problems in dynamic programming, 
            graph algorithms, and advanced topics like segment trees and trie structures. Platforms like LeetCode and CodeChef 
            have been instrumental in honing my problem-solving skills.
          </p>
          <p className="mb-8">
            Below, you can explore my profiles on various coding platforms, showcasing my progress and dedication to improving 
            as a programmer.
          </p>
          <button
            onClick={() => setShowPopup(true)}
            className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
          >
            View Coding Profiles
          </button>
        </div>
      </main>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Coding Profiles</h2>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform"
                >
                  <img src={platform.logo} alt={platform.name} className="h-16 w-16 mb-4" />
                  <span className="text-gray-800 dark:text-gray-100 font-medium">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Platforms;

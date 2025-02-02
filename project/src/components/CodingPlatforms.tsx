import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const platforms = [
  {
    name: 'LeetCode',
    logo: 'https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png',
    link: 'https://leetcode.com/u/shrekastic/',
    description: 'Solved 300+ problems covering various algorithms and data structures'
  },
  {
    name: 'GeeksforGeeks',
    logo: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg',
    link: 'https://www.geeksforgeeks.org/user/shubhaamkr271/',
    description: 'A journey of growth, where problem-solving shaped my skills and passion for coding.'
  },
  {
    name: 'CodeChef',
    logo: 'https://cdn.codechef.com/images/cc-logo.svg',
    link: 'https://www.codechef.com/users/shrek1918',
    description: 'Global rank 12 in Starters 133 Division 3 (Rated). 100+ Contest Problems.'
  },
  {
    name: 'Codeforces',
    logo: 'https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png',
    link: 'https://codeforces.com/profile/shrek1918',
    description: '150+ Problems Solved, Participated in 30+ contests.'
  },
  {
    name: 'Kaggle',
    logo: 'https://www.kaggle.com/static/images/site-logo.svg',
    link: 'https://kaggle.com/shrek1918',
    description: 'A journey of growth, where data challenges enhanced my skills and analytical thinking.'
  },
  {
    name: 'GitHub',
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    link: 'https://github.com/shrek1918',
    description: 'A journey of building and collaboration, where projects refined my skills and coding practices.'
  }
];

function CodingPlatforms() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-8 mb-6 text-gray-900 dark:text-white">
            Data Structures & Algorithms Journey
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
            <p>
              My journey in competitive programming and problem-solving spans across multiple platforms,
              where I've consistently worked on improving my algorithmic thinking and coding skills.
              Through dedicated practice and participation in contests, I've developed a strong foundation
              in data structures and algorithms, enabling me to tackle complex problems efficiently.
            </p>
            <p className="mt-4">
              Key achievements include solving 500+ problems across platforms, maintaining consistent
              ratings, and participating in numerous contests. My approach focuses on understanding
              the underlying patterns and implementing optimal solutions using various algorithmic
              paradigms like Dynamic Programming, Graph Algorithms, and Advanced Data Structures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="h-8 object-contain"
                  />
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {platform.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CodingPlatforms;
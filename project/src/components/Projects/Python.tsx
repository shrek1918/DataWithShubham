import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// const pythonProjects = [
//   {
//     title: 'Data Pipeline Automation',
//     description: 'Automated ETL pipeline for processing and analyzing large datasets with error handling and monitoring.',
//     tech: ['Python', 'Apache Airflow', 'Pandas', 'PostgreSQL'],
//     features: [
//       'Automated data extraction from multiple sources',
//       'Data transformation and cleaning',
//       'Automated quality checks and validation',
//       'Error notification system'
//     ],
//     github: 'https://github.com/yourusername/data-pipeline'
//   },
//   {
//     title: 'Web Scraping Framework',
//     description: 'Distributed web scraping system with proxy rotation and data extraction capabilities.',
//     tech: ['Python', 'Scrapy', 'BeautifulSoup', 'MongoDB'],
//     features: [
//       'Proxy rotation and management',
//       'Concurrent scraping',
//       'Data cleaning and export',
//       'Rate limiting and retry mechanism'
//     ],
//     github: 'https://github.com/yourusername/web-scraper'
//   },
//   {
//     title: 'Automation Scripts Collection',
//     description: 'Collection of Python scripts for automating various tasks and improving workflow efficiency.',
//     tech: ['Python', 'PyAutoGUI', 'Schedule', 'Requests'],
//     features: [
//       'File organization and renaming',
//       'Batch image processing',
//       'PDF manipulation and merging',
//       'Email automation'
//     ],
//     github: 'https://github.com/yourusername/automation-scripts'
//   }
// ];

function Python() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            to="/projects"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
            Python Development Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Collection of Python projects focusing on automation, data processing, and system integration.
          </p>
        </div>

        <div className="flex justify-center items-center h-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <p className="text-2xl text-gray-700 dark:text-gray-300 font-semibold">
            🚀 Projects Coming Soon! Stay Tuned.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Python;

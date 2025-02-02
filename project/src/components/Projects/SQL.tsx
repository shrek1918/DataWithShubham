import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// const sqlProjects = [
//   {
//     title: 'Database Optimization Project',
//     description: 'Performance optimization and query tuning for large-scale database systems.',
//     tech: ['PostgreSQL', 'PL/pgSQL', 'pgAdmin', 'Docker'],
//     features: [
//       'Query optimization techniques',
//       'Index strategy implementation',
//       'Performance monitoring',
//       'Database partitioning'
//     ],
//     github: 'https://github.com/yourusername/db-optimization'
//   },
//   {
//     title: 'Data Warehouse Design',
//     description: 'Enterprise data warehouse implementation with ETL processes and reporting.',
//     tech: ['SQL Server', 'SSIS', 'SSAS', 'Power BI'],
//     features: [
//       'Star schema design',
//       'ETL pipeline implementation',
//       'Data mart creation',
//       'Report generation'
//     ],
//     github: 'https://github.com/yourusername/data-warehouse'
//   },
//   {
//     title: 'Database Migration Tool',
//     description: 'Tool for seamless database migration and schema version control.',
//     tech: ['PostgreSQL', 'Python', 'SQLAlchemy', 'Alembic'],
//     features: [
//       'Schema version control',
//       'Data migration scripts',
//       'Rollback functionality',
//       'Migration validation'
//     ],
//     github: 'https://github.com/yourusername/db-migration'
//   }
// ];

function SQL() {
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
            SQL and Database Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Projects focusing on database design, optimization, and data warehousing solutions.
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

export default SQL;

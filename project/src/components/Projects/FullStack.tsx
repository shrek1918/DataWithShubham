import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const fullStackProjects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-featured online shopping platform with cart, payments, and admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    features: [
      'User authentication',
      'Product management',
      'Shopping cart functionality',
      'Payment integration'
    ],
    github: 'https://github.com/yourusername/ecommerce-platform'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Real-time social media analytics and management platform.',
    tech: ['Next.js', 'GraphQL', 'MongoDB', 'WebSocket'],
    features: [
      'Real-time analytics',
      'Content scheduling',
      'Engagement tracking',
      'Report generation'
    ],
    github: 'https://github.com/yourusername/social-dashboard'
  },
  {
    title: 'Project Management System',
    description: 'Comprehensive project management tool with team collaboration features.',
    tech: ['Vue.js', 'Django', 'PostgreSQL', 'Redis'],
    features: [
      'Task management',
      'Team collaboration',
      'File sharing',
      'Progress tracking'
    ],
    github: 'https://github.com/yourusername/project-management'
  }
];

function FullStack() {
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
            Full Stack Development Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            End-to-end web applications showcasing full stack development capabilities.
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

export default FullStack;

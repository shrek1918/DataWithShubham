import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// const frontendProjects = [
//   {
//     title: 'E-commerce Dashboard',
//     description: 'Modern e-commerce admin dashboard with real-time analytics and inventory management.',
//     tech: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
//     features: [
//       'Real-time sales analytics',
//       'Inventory management',
//       'Order processing',
//       'Customer insights dashboard'
//     ],
//     github: 'https://github.com/yourusername/ecommerce-dashboard'
//   },
//   {
//     title: 'Social Media Platform',
//     description: 'Feature-rich social media interface with real-time updates and interactive components.',
//     tech: ['Next.js', 'GraphQL', 'Styled Components', 'Framer Motion'],
//     features: [
//       'Real-time feed updates',
//       'Interactive post creation',
//       'Direct messaging system',
//       'Profile customization'
//     ],
//     github: 'https://github.com/yourusername/social-platform'
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'Modern portfolio website with dark mode, animations, and responsive design.',
//     tech: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
//     features: [
//       'Dark mode support',
//       'Smooth page transitions',
//       'Project showcase',
//       'Contact form integration'
//     ],
//     github: 'https://github.com/yourusername/portfolio'
//   }
// ];

function Frontend() {
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
            Frontend Development Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Modern web applications built with React and related technologies, focusing on user experience and responsive design.
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

export default Frontend;

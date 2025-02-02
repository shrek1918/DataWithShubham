import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// const backendProjects = [
//   {
//     title: 'E-commerce API',
//     description: 'RESTful API for an e-commerce platform with authentication, product management, and order processing.',
//     tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
//     features: [
//       'User authentication and authorization',
//       'Product CRUD operations',
//       'Order management',
//       'Payment integration'
//     ],
//     github: 'https://github.com/yourusername/ecommerce-api'
//   },
//   {
//     title: 'Real-time Chat Server',
//     description: 'WebSocket-based chat server supporting multiple rooms and private messaging.',
//     tech: ['Node.js', 'Socket.io', 'Redis', 'Express'],
//     features: [
//       'Real-time messaging',
//       'Multiple chat rooms',
//       'Private messaging',
//       'User presence tracking'
//     ],
//     github: 'https://github.com/yourusername/chat-server'
//   },
//   {
//     title: 'Task Management API',
//     description: 'Microservices-based task management system with task scheduling and notifications.',
//     tech: ['Node.js', 'NestJS', 'PostgreSQL', 'RabbitMQ'],
//     features: [
//       'Task CRUD operations',
//       'Task scheduling',
//       'Email notifications',
//       'User management'
//     ],
//     github: 'https://github.com/yourusername/task-api'
//   }
// ];

function Backend() {
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
            Backend Development Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore my backend development projects showcasing scalable architectures, API design, and database optimization.
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

export default Backend;

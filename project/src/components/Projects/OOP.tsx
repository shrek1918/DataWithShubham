// import { ArrowLeft } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const oopProjects = [
//   {
//     title: 'Design Patterns Implementation',
//     description: 'Comprehensive implementation of common design patterns with practical examples.',
//     tech: ['Java', 'Spring Boot', 'JUnit', 'Maven'],
//     features: [
//       'Creational patterns implementation',
//       'Structural patterns examples',
//       'Behavioral patterns showcase',
//       'Real-world use cases'
//     ],
//     github: 'https://github.com/yourusername/design-patterns'
//   },
//   {
//     title: '2D Game Engine',
//     description: 'Object-oriented game engine implementation with component system and physics.',
//     tech: ['C++', 'OpenGL', 'SDL2', 'Box2D'],
//     features: [
//       'Entity component system',
//       'Physics simulation',
//       'Collision detection',
//       'Scene management'
//     ],
//     github: 'https://github.com/yourusername/game-engine'
//   },
//   {
//     title: 'Library Management System',
//     description: 'Complete library management system showcasing SOLID principles and clean architecture.',
//     tech: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL'],
//     features: [
//       'Book management',
//       'Member tracking',
//       'Loan system',
//       'Fine calculation'
//     ],
//     github: 'https://github.com/yourusername/library-system'
//   }
// ];

// function OOP() {
//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-12">
//           <Link
//             to="/projects"
//             className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
//           >
//             <ArrowLeft className="h-5 w-5 mr-2" />
//             Back to Projects
//           </Link>
//           <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
//             Object-Oriented Programming Projects
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300">
//             Projects demonstrating OOP principles, design patterns, and clean architecture practices.
//           </p>
//         </div>

//         <div className="grid gap-8">
//           {oopProjects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
//             >
//               <div className="p-8">
//                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                   {project.title}
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-300 mb-6">
//                   {project.description}
//                 </p>
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                     Technologies Used
//                   </h3>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
//                     Key Features
//                   </h3>
//                   <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
//                     {project.features.map((feature, featureIndex) => (
//                       <li key={featureIndex}>{feature}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
//                 >
//                   View on GitHub
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OOP;
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// const oopProjects = [
//   {
//     title: 'Design Patterns Implementation',
//     description: 'Comprehensive implementation of common design patterns with practical examples.',
//     tech: ['Java', 'Spring Boot', 'JUnit', 'Maven'],
//     features: [
//       'Creational patterns implementation',
//       'Structural patterns examples',
//       'Behavioral patterns showcase',
//       'Real-world use cases'
//     ],
//     github: 'https://github.com/yourusername/design-patterns'
//   },
//   {
//     title: '2D Game Engine',
//     description: 'Object-oriented game engine implementation with component system and physics.',
//     tech: ['C++', 'OpenGL', 'SDL2', 'Box2D'],
//     features: [
//       'Entity component system',
//       'Physics simulation',
//       'Collision detection',
//       'Scene management'
//     ],
//     github: 'https://github.com/yourusername/game-engine'
//   },
//   {
//     title: 'Library Management System',
//     description: 'Complete library management system showcasing SOLID principles and clean architecture.',
//     tech: ['Java', 'Spring Boot', 'Hibernate', 'PostgreSQL'],
//     features: [
//       'Book management',
//       'Member tracking',
//       'Loan system',
//       'Fine calculation'
//     ],
//     github: 'https://github.com/yourusername/library-system'
//   }
// ];

function OOP() {
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
            Object-Oriented Programming Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Projects demonstrating OOP principles, design patterns, and clean architecture practices.
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

export default OOP;

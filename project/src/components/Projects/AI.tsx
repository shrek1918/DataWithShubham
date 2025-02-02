import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// const aiProjects = [
//   {
//     title: 'Intelligent Chatbot',
//     description: 'Advanced chatbot system using natural language processing and machine learning.',
//     tech: ['Python', 'TensorFlow', 'NLTK', 'FastAPI'],
//     features: [
//       'Natural language understanding',
//       'Context awareness',
//       'Multi-language support',
//       'Integration API'
//     ],
//     github: 'https://github.com/yourusername/ai-chatbot'
//   },
//   {
//     title: 'Recommendation Engine',
//     description: 'AI-powered content recommendation system using collaborative filtering.',
//     tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'], 
//     features: [
//       'Collaborative filtering',
//       'Content-based filtering',
//       'User behavior analysis',
//       'A/B testing framework'
//     ],
//     github: 'https://github.com/yourusername/recommendation-engine'
//   },
//   {
//     title: 'Computer Vision System',
//     description: 'Advanced computer vision system for object detection and recognition.',
//     tech: ['Python', 'OpenCV', 'PyTorch', 'TensorFlow'],
//     features: [
//       'Real-time object detection',
//       'Face recognition',
//       'Motion tracking',
//       'Image segmentation'
//     ],
//     github: 'https://github.com/yourusername/computer-vision'
//   }
// ];

function AI() {
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
            Artificial Intelligence Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Advanced AI projects showcasing machine learning, natural language processing, and computer vision applications.
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

export default AI;

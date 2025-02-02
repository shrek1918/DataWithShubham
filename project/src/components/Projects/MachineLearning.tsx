import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// const mlProjects = [
//   {
//     title: 'Customer Churn Prediction',
//     description: 'Machine learning model to predict customer churn with high accuracy.',
//     tech: ['Python', 'scikit-learn', 'XGBoost', 'Pandas'],
//     features: [
//       'Feature engineering pipeline',
//       'Model evaluation metrics',
//       'Cross-validation implementation',
//       'Model deployment API'
//     ],
//     github: 'https://github.com/yourusername/churn-prediction'
//   },
//   {
//     title: 'Stock Price Predictor',
//     description: 'Deep learning model for stock price prediction using historical data.',
//     tech: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
//     features: [
//       'LSTM architecture',
//       'Real-time data processing',
//       'Technical indicator analysis',
//       'Backtesting framework'
//     ],
//     github: 'https://github.com/yourusername/stock-predictor'
//   },
//   {
//     title: 'Image Classification System',
//     description: 'Convolutional Neural Network for multi-class image classification.',
//     tech: ['Python', 'PyTorch', 'OpenCV', 'Matplotlib'],
//     features: [
//       'Custom CNN architecture',
//       'Data augmentation pipeline',
//       'Transfer learning implementation',
//       'Model performance analysis'
//     ],
//     github: 'https://github.com/yourusername/image-classifier'
//   }
// ];

function MachineLearning() {
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
            Machine Learning Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Advanced machine learning projects showcasing predictive modeling, deep learning, and data analysis.
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

export default MachineLearning;

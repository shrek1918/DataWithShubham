import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Full Stack Development',
    icon: '🌐',
    link: '/projects/full-stack',
    description: 'End-to-end web applications built with modern technologies like React, Node.js, and PostgreSQL',
    projects: [
      {
        title: 'E-commerce Platform',
        tech: 'React, Node.js, Express, PostgreSQL',
        description: 'Full-featured online shopping platform with cart, payments, and admin dashboard'
      },
      {
        title: 'Social Media Dashboard',
        tech: 'Next.js, GraphQL, MongoDB',
        description: 'Real-time social media analytics and management platform'
      }
    ]
  },
  {
    name: 'Machine Learning',
    icon: '🤖',
    link: '/projects/machine-learning',
    description: 'Advanced ML models for predictive analytics and pattern recognition',
    projects: [
      {
        title: 'Customer Churn Prediction',
        tech: 'Python, scikit-learn, XGBoost',
        description: 'ML model to predict customer churn with 94% accuracy'
      },
      {
        title: 'Stock Price Predictor',
        tech: 'Python, TensorFlow, Pandas',
        description: 'LSTM-based model for stock price prediction'
      }
    ]
  },
  {
    name: 'Deep Learning',
    icon: '🧠',
    link: '/projects/deep-learning',
    description: 'Neural networks and deep learning models for complex pattern recognition',
    projects: [
      {
        title: 'Image Classification System',
        tech: 'PyTorch, CNN, Transfer Learning',
        description: 'Custom CNN model for multi-class image classification'
      },
      {
        title: 'Sentiment Analysis',
        tech: 'BERT, Transformers, PyTorch',
        description: 'Fine-tuned BERT model for sentiment analysis'
      }
    ]
  },
  {
    name: 'Artificial Intelligence',
    icon: '🎯',
    link: '/projects/ai',
    description: 'AI solutions for automation and intelligent decision making',
    projects: [
      {
        title: 'Chatbot System',
        tech: 'OpenAI API, Python, FastAPI',
        description: 'Intelligent chatbot for customer support'
      },
      {
        title: 'Recommendation Engine',
        tech: 'Python, Collaborative Filtering',
        description: 'AI-powered content recommendation system'
      }
    ]
  },
  {
    name: 'Backend Development',
    icon: '⚙️',
    link: '/projects/backend',
    description: 'Robust and scalable backend systems and APIs',
    projects: [
      {
        title: 'RESTful API Service',
        tech: 'Node.js, Express, MongoDB',
        description: 'Scalable API service with authentication and caching'
      },
      {
        title: 'Microservices Architecture',
        tech: 'Docker, Kubernetes, Go',
        description: 'Distributed system with microservices architecture'
      }
    ]
  },
  {
    name: 'Frontend Development',
    icon: '💻',
    link: '/projects/frontend',
    description: 'Responsive and interactive user interfaces',
    projects: [
      {
        title: 'Portfolio Website',
        tech: 'React, Tailwind CSS, Vite',
        description: 'Modern portfolio website with dark mode and animations'
      },
      {
        title: 'Dashboard UI',
        tech: 'Vue.js, D3.js, TypeScript',
        description: 'Interactive analytics dashboard with data visualization'
      }
    ]
  },
  {
    name: 'SQL & Databases',
    icon: '🗄️',
    link: '/projects/sql',
    description: 'Database design and optimization projects',
    projects: [
      {
        title: 'Database Optimization',
        tech: 'PostgreSQL, Query Optimization',
        description: 'Performance tuning and query optimization project'
      },
      {
        title: 'Data Warehouse',
        tech: 'SQL, ETL, Data Modeling',
        description: 'Enterprise data warehouse design and implementation'
      }
    ]
  },
  {
    name: 'Python Development',
    icon: '🐍',
    link: '/projects/python',
    description: 'Python applications and automation scripts',
    projects: [
      {
        title: 'Data Pipeline',
        tech: 'Python, Apache Airflow',
        description: 'Automated data processing and ETL pipeline'
      },
      {
        title: 'Web Scraper',
        tech: 'Python, BeautifulSoup, Scrapy',
        description: 'Distributed web scraping system'
      }
    ]
  },
  {
    name: 'Object-Oriented Programming',
    icon: '🎨',
    link: '/projects/oop',
    description: 'Projects showcasing OOP principles and design patterns',
    projects: [
      {
        title: 'Design Patterns',
        tech: 'Java, Spring Boot',
        description: 'Implementation of common design patterns'
      },
      {
        title: 'Game Engine',
        tech: 'C++, OpenGL',
        description: 'Simple 2D game engine using OOP principles'
      }
    ]
  }
];

function ProjectCategory({ category }: { category: typeof projects[0] }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{category.icon}</span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {category.name}
            </h3>
          </div>
          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {category.description}
        </p>
        <div className="space-y-3">
          {category.projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                {project.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {project.tech}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
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
            Featured Projects
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
            <p>
              Explore my diverse portfolio of projects spanning various domains of software development
              and data science. Each project demonstrates my expertise in different technologies
              and my approach to solving complex problems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((category, index) => (
            <ProjectCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
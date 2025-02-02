import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const projectCategories = [
  {
    name: 'Machine Learning',
    icon: '🤖',
    description: 'Advanced ML models and predictive analytics projects',
    link: '/projects/machine-learning',
    bgImage: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'Python',
    icon: '🐍',
    description: 'Python applications, automation, and data processing',
    link: '/projects/python',
    bgImage: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'Frontend',
    icon: '💻',
    description: 'Modern web applications with responsive design',
    link: '/projects/frontend',
    bgImage: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'OOP',
    icon: '🎨',
    description: 'Object-oriented programming projects and design patterns',
    link: '/projects/oop',
    bgImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'SQL',
    icon: '🗄️',
    description: 'Database design, optimization, and management',
    link: '/projects/sql',
    bgImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'Backend',
    icon: '⚙️',
    description: 'Scalable backend systems and APIs',
    link: '/projects/backend',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'Full Stack',
    icon: '🌐',
    description: 'End-to-end web applications and systems',
    link: '/projects/full-stack',
    bgImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80'
  },
  {
    name: 'Artificial Intelligence',
    icon: '🎯',
    description: 'AI solutions and intelligent systems',
    link: '/projects/ai',
    bgImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80'
  }
];

function FeaturedProjects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-12">
            <p>
              Welcome to my project portfolio! Here you'll find a diverse collection of projects 
              spanning various domains of software development and data science. Each category 
              represents a different aspect of my technical expertise, from machine learning models 
              to full-stack applications.
            </p>
            <p>
              These projects demonstrate my problem-solving approach, coding standards, and ability 
              to deliver robust solutions. Click on any category to explore detailed case studies, 
              technical implementations, and the impact of each project.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectCategories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group relative bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200 h-64"
              style={{
                backgroundImage: `url("${category.bgImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 dark:from-blue-500/90 dark:to-purple-500/90"></div>
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                  <p className="text-blue-100 mb-4">{category.description}</p>
                </div>
                <div className="flex items-center text-white">
                  <span>View Projects</span>
                  <ExternalLink className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, ExternalLink, Moon, Sun, Download } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import CodingPlatforms from './components/CodingPlatforms';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FeaturedProjects from './components/FeaturedProjects';
import Backend from './components/Projects/Backend';
import Python from './components/Projects/Python';
import Frontend from './components/Projects/Frontend';
import OOP from './components/Projects/OOP';
import SQL from './components/Projects/SQL';
import MachineLearning from './components/Projects/MachineLearning';
import FullStack from './components/Projects/FullStack';
import AI from './components/Projects/AI';

function NavigationAwareApp() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const MainContent = () => (
    <>
      {/* Hero Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Shubham Kumar
              </h1>
              <div className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                Netaji Subhash Engineering College
                <br />
                Kolkata, India
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-4">
                <Mail className="h-4 w-4" />
                <a href="mailto:shubhamkr.work@outlook.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                  shubhamkr.work@outlook.com
                </a>
              </div>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">About Me</h2>
                <p>
                  I am a passionate data scientist specializing in machine learning and artificial intelligence. 
                  With expertise in statistical analysis, deep learning, and data visualization, I transform complex 
                  data into actionable insights. My work focuses on developing innovative solutions using Python, 
                  TensorFlow, and scikit-learn, with a particular interest in computer vision and natural language processing.
                </p>
                <a
                  href="/SHUBHAM_KUMAR_DS.pdf"
                  download
                  className="inline-flex items-center px-4 py-2 mt-4 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="new_dp.jpg"
                  alt="Shubham Kumar"
                  className="w-64 h-64 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl relative z-10"
                />
              </div>
              <div className="flex space-x-6 mt-8">
                <a
                  href="https://linkedin.com/in/shubham-kumar185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/shrek1918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://kaggle.com/shrek1918"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 4.25c1.465 0 2.65 1.185 2.65 2.65 0 1.465-1.185 2.65-2.65 2.65-1.465 0-2.65-1.185-2.65-2.65 0-1.465 1.185-2.65 2.65-2.65zm5.872 11.604c-.642.639-1.485.956-2.327.956-.843 0-1.686-.317-2.327-.956l-1.219-1.219-1.219 1.219c-.642.639-1.485.956-2.327.956-.843 0-1.686-.317-2.327-.956-.639-.642-.956-1.485-.956-2.327 0-.843.317-1.686.956-2.327l3.546-3.546c.642-.639 1.485-.956 2.327-.956.843 0 1.686.317 2.327.956l3.546 3.546c.639.642.956 1.485.956 2.327 0 .843-.317 1.686-.956 2.327z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms & Projects Section */}
      <section id="platforms" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/platforms"
              className="group relative bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 dark:from-blue-500/90 dark:to-purple-500/90"></div>
              <div className="relative p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Coding Platforms</h2>
                <p className="text-blue-100 mb-6">
                  Explore my problem-solving journey through LeetCode, CodeChef, and other competitive 
                  programming platforms. View my solutions and coding patterns.
                </p>
                <div className="flex items-center text-white">
                  <span>View Profiles</span>
                  <ExternalLink className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>

            <Link
              to="/projects"
              className="group relative bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-200"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-indigo-600/90 dark:from-purple-500/90 dark:to-indigo-500/90"></div>
              <div className="relative p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-indigo-100 mb-6">
                  Discover my data science and machine learning projects. From predictive analytics 
                  to deep learning models, explore my technical expertise.
                </p>
                <div className="flex items-center text-white">
                  <span>View Projects</span>
                  <ExternalLink className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              DataWithShubham.com
            </Link>
            <div className="flex items-center space-x-8">
              {isHomePage && (
                <nav className="hidden md:flex space-x-8">
                  <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
                  <a href="#platforms" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Platforms</a>
                  <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                </nav>
              )}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/platforms" element={<CodingPlatforms />} />
        <Route path="/projects" element={<FeaturedProjects />} />
        <Route path="/projects/backend" element={<Backend />} />
        <Route path="/projects/python" element={<Python />} />
        <Route path="/projects/frontend" element={<Frontend />} />
        <Route path="/projects/oop" element={<OOP />} />
        <Route path="/projects/sql" element={<SQL />} />
        <Route path="/projects/machine-learning" element={<MachineLearning />} />
        <Route path="/projects/full-stack" element={<FullStack />} />
        <Route path="/projects/ai" element={<AI />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 transition-colors duration-200">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} DataWithShubham.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavigationAwareApp />
    </Router>
  );
}

export default App;
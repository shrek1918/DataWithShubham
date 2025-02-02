import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formState
        }).toString(),
      });
      
      setFormState({ name: '', email: '', message: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Get in Touch</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="block w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="block w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className="block w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white resize-none"
              required
            ></textarea>
          </div>

          <div className="relative">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Send Message
            </button>
            {showSuccess && (
              <div className="absolute bottom-[-30px] left-0 right-0 flex items-center justify-center text-green-500 dark:text-green-400">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Message sent successfully!</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
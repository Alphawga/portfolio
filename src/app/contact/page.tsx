'use client';
import { useState } from 'react';
import FadeIn from '@/components/FadeIn';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeIn delay={200}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Let&apos;s Connect</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m always interested in hearing about new projects and opportunities.
                Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="animate-float">
                  <h3 className="font-bold mb-2">Email</h3>
                  <a href="mailto:bamidele.ajibola.alpha@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    bamidele.ajibola.alpha@gmail.com
                  </a>
                </div>
                
                <div className="animate-float" style={{ animationDelay: '0.2s' }}>
                  <h3 className="font-bold mb-2">Social</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/alphawga" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://linkedin.com/in/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={400}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors transform hover:scale-[1.02] active:scale-[0.98] duration-200"
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </main>
  );
} 
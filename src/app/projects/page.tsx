'use client';
import { useState } from 'react';
import FadeIn from '@/components/FadeIn';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      category: "Web",
      image: "/projects/ecommerce.jpg",
      link: "https://github.com/username/project"
    },
    {
      title: "AI Content Generator",
      description: "ML-powered application for generating marketing content",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      category: "AI",
      image: "/projects/ai-generator.jpg",
      link: "https://github.com/username/project"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application",
      tech: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      image: "/projects/fitness-app.jpg",
      link: "https://github.com/username/project"
    }
  ];

  const categories = ["All", "Web", "Mobile", "AI"];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-8">Projects</h1>
        </FadeIn>
        
        {/* Category Filter */}
        <FadeIn delay={200}>
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full border-2 border-blue-600 
                  ${activeCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white'
                  } transition-all duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>
        
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.title} delay={300 + index * 100}>
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700">
                  {/* Replace with actual project images */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    [Project Image]
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded animate-float"
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 
                    transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <FadeIn>
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No projects found in this category.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </main>
  );
} 
'use client'

import FadeIn from '@/components/FadeIn';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Timeline from '@/components/Timeline';
import Image from 'next/image';

const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false });

export default function Home() {
  // Projects state
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ["All", "Web", "Mobile", "AI"];
  
  const projects = [
    {
      title: "Traders Bloc",
      description: "A dynamic and secure lending platform revolutionizing financial transactions and credit management.",
      tech: ["Node.js", "Express", "JWT", "Payment Integration", "Real-time Tracking"],
      category: "Web",
      link: "https://traders-bloc-backend-fi21.vercel.app/",
      highlights: [
        "Engineered secure backend infrastructure with Node.js and Express",
        "Implemented comprehensive authentication with token-based systems",
        "Designed secure payment workflows for loan transactions",
        "Developed real-time financial tracking and reporting"
      ]
    },
    {
      title: "Schoolwave",
      description: "AI-powered school management system transforming educational operations and processes.",
      tech: ["AI/ML", "React", "Node.js", "Analytics", "Real-time Data"],
      category: "AI",
      link: "https://dev.schoolwave.app/app",
      highlights: [
        "Implemented AI-driven result processing with advanced analytics",
        "Designed intelligent class scheduling algorithms",
        "Built comprehensive student/staff management system",
        "Integrated ML models for predictive performance tracking"
      ]
    },
    {
      title: "TechHill LMS",
      description: "Feature-rich learning management system simplifying e-learning experiences.",
      tech: ["React.js", "Next.js", "Database Optimization", "Analytics"],
      category: "Web",
      link: "https://www.techill.ng/",
      highlights: [
        "Developed modern UI with React.js",
        "Implemented secure server-side logic with Next.js",
        "Optimized database architectures",
        "Integrated third-party analytics tools"
      ]
    },
    {
      title: "OKOH ERP System",
      description: "Tailored enterprise resource planning solution for streamlining organizational workflows.",
      tech: [".NET", "React.js", "SQL", "REST API"],
      category: "Web",
      link: "https://okoh-erp-dev.vercel.app/",
      highlights: [
        "Created agile system with .NET and React.js",
        "Designed intuitive UI/UX interface",
        "Built efficient server-side logic",
        "Implemented scalable architecture"
      ]
    },
    {
      title: "Smertz Business Registration",
      description: "Professional platform for seamless business registration and management.",
      tech: ["React.js", "WordPress", "SEO", "Authentication"],
      category: "Web",
      link: "https://www.thesmertshq.com/",
      highlights: [
        "Integrated React.js frontend with WordPress backend",
        "Delivered responsive and user-friendly interface",
        "Implemented strong authentication protocols",
        "Optimized for SEO best practices"
      ]
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Experience data
  const experiences = [
    {
      date: "2021 - Present",
      title: "Full Stack Developer | Innovar Ideas",
      description: "Led development of scalable web applications using Next.js and React.js. Engineered secure RESTful APIs and managed databases with PostgreSQL and MongoDB. Collaborated with distributed teams to enhance system security and performance."
    },
    {
      date: "2020 - 2021",
      title: "Backend Support | Trade Depot",
      description: "Provided critical backend support for logistics drivers' mobile app, ensuring operational continuity. Optimized system performance and collaborated with remote teams for timely solutions."
    },
    {
      date: "2018 - 2020",
      title: "Web Developer | AG Scholar",
      description: "Developed responsive web applications using HTML, CSS, and JavaScript. Focused on UI design, accessibility, and cross-browser compatibility while optimizing application performance."
    }
  ];

  // Add education and volunteer sections
  const education = [
    {
      date: "Completed",
      title: "Higher National Diploma in Computer Science Technology",
      description: "Ogun State Institute of Technology"
    }
  ];

  const volunteer = [
    {
      date: "January 2024 - Present",
      title: "Full Stack Development Instructor | Next Generation Genius (NGG)",
      description: "Educating over 20 students in full stack development, covering both front-end and back-end technologies."
    }
  ];

  return (
    <main className="flex flex-col">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Ajibola Bamidele</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              A product- and result-oriented software engineer specializing in building exceptional digital experiences.
            </p>
          </FadeIn>
          
          <FadeIn delay={600}>
            <div className="space-x-4">
              <a
                href="#about"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn delay={200}>
              <div>
                <h3 className="text-2xl font-bold mb-4">Ajibola Bamidele (AlphaWGA)</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I&apos;m a passionate software engineer focused on creating impactful digital solutions. 
                  With a strong foundation in web development, mobile applications, and AI, I approach 
                  each project with a product-oriented mindset.
                </p>
                
                {/* Add CV Download Button */}
                <div className="mb-6">
                  <a
                    href="/AJIBOLA BAMIDELE AGIM CV.pdf"
                    download
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    Download CV
                  </a>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">Core Competencies</h4>
                  <ul className="space-y-2">
                    <li className="animate-float">🚀 Full-Stack Development</li>
                    <li className="animate-float" style={{ animationDelay: '0.2s' }}>📱 Mobile App Development</li>
                    <li className="animate-float" style={{ animationDelay: '0.4s' }}>🤖 AI & Machine Learning</li>
                    <li className="animate-float" style={{ animationDelay: '0.6s' }}>☁️ Cloud Architecture</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Timeline events={experiences} />
          </FadeIn>

          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 mt-16">Education</h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Timeline events={education} />
          </FadeIn>

          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 mt-16">Volunteer Experience</h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Timeline events={volunteer} />
          </FadeIn>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
          </FadeIn>
          
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.title} delay={300 + index * 100}>
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={
                          project.title === "Schoolwave" 
                            ? "/schoolwave.png" 
                            : project.title === "Traders Bloc"
                              ? "/traders.png"
                              : project.title === "TechHill LMS"
                                ? "/techill.png"
                                : project.title === "Smertz Business Registration"
                                  ? "/smertz.png"
                                  : project.title === "OKOH ERP System"
                                    ? "/okoh.png"
                                    : `/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}.png`
                        }
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/projects/placeholder.png';
                        }}
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm text-gray-500 dark:text-gray-400">
                        KEY FEATURES
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {project.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="line-clamp-1">{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={200}>
              <div>
                <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I&apos;m always interested in hearing about new projects and opportunities.
                  Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Email</h4>
                    <a href="mailto:bamidele.ajibola.alpha@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      bamidele.ajibola.alpha@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-2">Social</h4>
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
          </div>
        </div>
      </section>
    </main>
  );
}

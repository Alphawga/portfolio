"use client"

import { useState, useEffect } from "react"
import { X, ArrowLeft, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

// Project archive page with same design language
export default function ProjectArchive() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Define complete projects array
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with advanced product filtering and secure checkout.",
      image: "/project1.jpg",
      link: "https://example.com/project1",
      tags: ["Next.js", "TailwindCSS", "Stripe", "Prisma"],
      details: "Built a scalable e-commerce solution with real-time inventory management, customer authentication, and secure payment processing. Implemented advanced product filtering, search functionality, and responsive design for optimal mobile experience.",
      accentColor: "blue"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Electronic health record system for medical practitioners with patient management features.",
      image: "/project2.jpg",
      link: "https://example.com/project2",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      details: "Developed a HIPAA-compliant electronic health record system featuring appointment scheduling, patient records management, and billing integration. Implemented role-based access control and audit trails for enhanced security.",
      accentColor: "green"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Interactive dashboard for monitoring investments, expenses, and financial planning.",
      image: "/project3.jpg",
      link: "https://example.com/project3",
      tags: ["TypeScript", "D3.js", "Firebase", "Redux"],
      details: "Created a real-time financial analytics dashboard with interactive data visualizations, transaction categorization, and budget forecasting tools. Integrated with multiple financial APIs and implemented secure OAuth authentication.",
      accentColor: "amber"
    },
    {
      id: 4,
      title: "Social Media Analytics Tool",
      description: "Platform for tracking and analyzing social media performance across multiple channels.",
      image: "/project4.jpg", 
      link: "https://example.com/project4",
      tags: ["Python", "React", "PostgreSQL", "AWS"],
      details: "Built a comprehensive analytics platform that aggregates data from multiple social media APIs, providing actionable insights through customizable dashboards and automated reporting. Implemented sentiment analysis and trend detection using machine learning algorithms.",
      accentColor: "red"
    },
    {
      id: 5,
      title: "Fitness Tracking Application",
      description: "Mobile-first web app for tracking workouts, nutrition, and fitness progress.",
      image: "/project5.jpg",
      link: "https://example.com/project5",
      tags: ["React Native", "GraphQL", "MongoDB", "Node.js"],
      details: "Developed a comprehensive fitness tracking solution with workout planning, nutrition logging, and progress visualization. Implemented geolocation for outdoor activities, heart rate monitor integration, and social sharing features.",
      accentColor: "purple"
    },
    {
      id: 6,
      title: "Content Management System",
      description: "Custom CMS built for digital publishers with advanced content creation tools.",
      image: "/project6.jpg",
      link: "https://example.com/project6",
      tags: ["Vue.js", "Laravel", "MySQL", "Docker"],
      details: "Created a flexible content management system with a WYSIWYG editor, media library, and scheduled publishing. Implemented user role management, content versioning, and SEO optimization tools tailored for digital publishers.",
      accentColor: "teal"
    },
    {
      id: 7,
      title: "Real Estate Listing Platform",
      description: "Property search and listing platform with virtual tour capabilities.",
      image: "/project7.jpg",
      link: "https://example.com/project7",
      tags: ["Angular", "Node.js", "MongoDB", "Three.js"],
      details: "Built a feature-rich real estate platform with advanced property search, interactive maps, and virtual property tours. Implemented agent dashboards, lead management tools, and automated listing verification.",
      accentColor: "sky"
    },
    {
      id: 8,
      title: "Learning Management System",
      description: "Educational platform for course creation, student enrollment, and progress tracking.",
      image: "/project8.jpg",
      link: "https://example.com/project8",
      tags: ["React", "Django", "PostgreSQL", "Redis"],
      details: "Developed a comprehensive LMS with course authoring tools, interactive assessments, and student progress analytics. Implemented video streaming integration, discussion forums, and certificate generation.",
      accentColor: "green"
    },
    {
      id: 9,
      title: "Event Management Platform",
      description: "End-to-end solution for planning, promoting, and managing events of all sizes.",
      image: "/project9.jpg",
      link: "https://example.com/project9",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      details: "Created an event management system with ticketing, attendee management, and event promotion tools. Implemented QR code check-in, seating arrangements, and post-event analytics dashboards.",
      accentColor: "violet"
    },
    {
      id: 10,
      title: "Supply Chain Management System",
      description: "Enterprise solution for tracking inventory, suppliers, and logistics.",
      image: "/project10.jpg",
      link: "https://example.com/project10",
      tags: ["React", "Spring Boot", "PostgreSQL", "Docker"],
      details: "Developed a comprehensive supply chain management system with inventory tracking, supplier management, and logistics optimization. Implemented barcode scanning, predictive analytics for inventory forecasting, and real-time shipping updates.",
      accentColor: "orange"
    }
  ]

  // Client work projects
  const clientProjects = [
    {
      id: 101,
      title: "Enterprise Resource Planning System",
      client: "Manufacturing Corp",
      description: "Custom ERP solution integrating production, inventory, sales, and finance modules.",
      tags: ["React", "Java", "Oracle", "Docker"],
      year: "2022"
    },
    {
      id: 102,
      title: "Digital Banking Platform",
      client: "Financial Services Inc",
      description: "Secure online banking solution with transaction management and financial planning tools.",
      tags: ["Angular", "Spring Boot", "PostgreSQL", "AWS"],
      year: "2021"
    },
    {
      id: 103,
      title: "Hotel Management System",
      client: "Luxury Hotels Group",
      description: "Comprehensive property management system with booking, guest services, and analytics.",
      tags: ["Vue.js", "Node.js", "MongoDB", "Redis"],
      year: "2020"
    },
    {
      id: 104,
      title: "E-Learning Platform",
      client: "Education Institute",
      description: "Interactive learning platform with course management, assessments, and student analytics.",
      tags: ["React", "Django", "PostgreSQL", "AWS"],
      year: "2019"
    }
  ]

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen])

  // Group projects into pairs for desktop view
  const projectPairs = []
  for (let i = 0; i < projects.length; i += 2) {
    if (i + 1 < projects.length) {
      projectPairs.push([projects[i], projects[i + 1]])
    } else {
      projectPairs.push([projects[i]])
    }
  }

  return (
    <div className="bg-[#1C1C1C] text-[#F4F4F4] min-h-screen relative group/spotlight">
      {/* Mouse tracker */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(191, 161, 129, 0.08), transparent 80%)`,
        }}
      />

      <div className="max-w-screen-xl mx-auto">
        {/* Mobile Header */}
        <header className="sticky top-0 z-30 bg-[#1C1C1C]/90 backdrop-blur-md p-4 border-b border-[#BFA181]/10">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-[#BFA181]">
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
            <button 
              className="p-2 rounded-md border border-[#BFA181]/20 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={18} className="text-[#BFA181]" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#BFA181]"
                >
                  <line x1="4" y1="8" x2="20" y2="8"></line>
                  <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 md:hidden bg-[#1C1C1C]/95 flex flex-col p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-end">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} className="text-[#BFA181]" />
                </button>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 space-y-6">
                <Link
                  href="/"
                  className="text-xl font-medium text-[#F4F4F4] hover:text-[#BFA181] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/resume-archive"
                  className="text-xl font-medium text-[#F4F4F4] hover:text-[#BFA181] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume Archive
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="py-8 md:py-12 px-5 md:px-12 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <div className="mb-12">
              <Link
                href="/"
                className="hidden md:inline-flex items-center text-[#BFA181] hover:text-[#F4F4F4] mb-6 text-sm group transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-[#F4F4F4] mt-2">Project Archive</h1>
              <p className="text-[#D4C5B0] mt-4 text-sm md:text-base max-w-xl">
                An extensive collection of my work across various domains and technologies. Each project represents challenges overcome and solutions delivered.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Featured Projects</h2>
              
              <div className="space-y-16">
                {projectPairs.map((pair, pairIndex) => (
                  <div 
                    key={pairIndex} 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    {pair.map((project) => (
                      <div 
                        key={project.id} 
                        className="group relative flex flex-col border border-[#BFA181]/20 rounded-lg overflow-hidden hover:border-[#BFA181]/50 transition-all duration-300 bg-[#1F1F1F]"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <div className="absolute inset-0 bg-black/30 z-10"></div>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        
                        <div className="flex-1 p-5">
                          <h3 className="text-xl font-semibold text-[#F4F4F4] mb-2 group-hover:text-[#BFA181] transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-[#D4C5B0] text-sm mb-4">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tags.map((tag, i) => (
                              <span 
                                key={i} 
                                className="px-2 py-0.5 text-[10px] rounded-full bg-[#252525] border border-[#BFA181]/30 text-[#D4C5B0]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <p className="text-[#D4C5B0]/80 text-xs mb-4">
                            {project.details}
                          </p>
                          
                          <div className="mt-auto pt-4">
                            <Link 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[#BFA181] hover:text-[#D4C5B0] text-sm font-medium transition-colors"
                            >
                              <span>View Project</span>
                              <ArrowUpRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Client Work Section */}
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Client Work</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clientProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="group p-5 border border-[#BFA181]/20 rounded-lg bg-[#1F1F1F] hover:border-[#BFA181]/50 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-[#F4F4F4] group-hover:text-[#BFA181] transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-[#BFA181] px-2 py-0.5 border border-[#BFA181]/30 rounded">{project.year}</span>
                    </div>
                    
                    <div className="text-[#BFA181] text-sm mb-2">{project.client}</div>
                    
                    <p className="text-[#D4C5B0] text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-0.5 text-[10px] rounded-full bg-[#252525] border border-[#BFA181]/30 text-[#D4C5B0]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mb-16 p-6 border border-[#BFA181]/20 rounded-lg bg-[#1F1F1F] text-center">
              <h2 className="text-2xl font-semibold text-[#F4F4F4] mb-3">Interested in working together?</h2>
              <p className="text-[#D4C5B0] text-sm mb-6 max-w-lg mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#BFA181] text-[#1C1C1C] rounded-md hover:bg-[#D4C5B0] transition-colors font-medium"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Footer */}
            <footer className="pt-6 pb-8 border-t border-[#BFA181]/10">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-[#D4C5B0] text-xs mb-3 md:mb-0">
                  Built with Next.js and Tailwind CSS
                </div>
                <div className="text-[#BFA181] text-xs">
                  © 2023 Ajibola Bamidele Agim
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
} 
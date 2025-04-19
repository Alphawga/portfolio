"use client"

import { useState, useEffect } from "react"
import { X, ArrowLeft, Download, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

// Resume archive page with same design language
export default function ResumeArchive() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Define full experience array including additional entries not shown on home page
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      company: "Finance Corporation",
      date: "2022 - Present",
      description: "Leading frontend development for an enterprise financial platform serving over 500,000 users worldwide.",
      tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux"],
      details: [
        "Architected and implemented a component library that reduced development time by 40%",
        "Led migration from legacy codebase to Next.js, improving performance metrics by 60%",
        "Mentored junior developers and established code quality standards",
        "Collaborated with design team to create an accessible UI/UX system"
      ]
    },
    {
      id: 2,
      title: "Fullstack Developer",
      company: "Tech Innovations Ltd",
      date: "2020 - 2022",
      description: "Developed and maintained scalable web applications for clients across diverse industries.",
      tags: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
      details: [
        "Built RESTful APIs handling 1M+ daily requests with 99.9% uptime",
        "Implemented real-time features using WebSockets for collaborative tools",
        "Optimized database queries, reducing response times by 35%",
        "Integrated third-party services and payment gateways for e-commerce solutions"
      ]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Solutions Inc",
      date: "2018 - 2020",
      description: "Created responsive web interfaces for enterprise clients in the healthcare and finance sectors.",
      tags: ["HTML/CSS", "JavaScript", "React", "Redux", "Jest"],
      details: [
        "Developed modular React components for a healthcare management system",
        "Implemented state management solutions using Redux and Context API",
        "Created comprehensive test suites achieving 90%+ code coverage",
        "Collaborated with UI/UX team to implement pixel-perfect designs"
      ]
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      date: "2017 - 2018",
      description: "Contributed to frontend and backend development for early-stage startups.",
      tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "jQuery"],
      details: [
        "Built responsive websites for clients across multiple industries",
        "Implemented custom WordPress themes and plugins",
        "Developed and maintained database schemas for web applications",
        "Created interactive UI elements using JavaScript and jQuery"
      ]
    },
    {
      id: 5,
      title: "Web Development Intern",
      company: "Design Agency",
      date: "2016 - 2017",
      description: "Assisted in the development and maintenance of client websites and web applications.",
      tags: ["HTML/CSS", "JavaScript", "WordPress", "Bootstrap"],
      details: [
        "Developed and maintained client websites using WordPress",
        "Created responsive layouts using Bootstrap and custom CSS",
        "Assisted senior developers with debugging and fixing issues",
        "Participated in client meetings and requirement gathering sessions"
      ]
    },
    {
      id: 6,
      title: "Freelance Web Developer",
      company: "Self-employed",
      date: "2015 - 2016",
      description: "Provided web development services to small businesses and individuals.",
      tags: ["HTML/CSS", "JavaScript", "PHP", "WordPress"],
      details: [
        "Designed and developed websites for small businesses",
        "Implemented e-commerce solutions using WooCommerce",
        "Provided maintenance and support services",
        "Consulted on SEO and web performance optimization"
      ]
    }
  ]

  // Education entries
  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Technology University",
      date: "2019 - 2021",
      description: "Specialized in Web Technologies and Human-Computer Interaction",
      details: [
        "GPA: 3.8/4.0",
        "Thesis: \"Improving User Experience in Progressive Web Applications\"",
        "Recipient of Academic Excellence Scholarship"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      institution: "National University",
      date: "2014 - 2018",
      description: "Focus on Software Development and Database Systems",
      details: [
        "GPA: 3.6/4.0",
        "Capstone Project: E-commerce Platform with Recommendation System",
        "Dean's List for 6 consecutive semesters"
      ]
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
                  href="/archive"
                  className="text-xl font-medium text-[#F4F4F4] hover:text-[#BFA181] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Project Archive
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="py-8 md:py-12 px-5 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="mb-12">
              <Link
                href="/"
                className="hidden md:inline-flex items-center text-[#BFA181] hover:text-[#F4F4F4] mb-6 text-sm group transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-[#F4F4F4] mt-2">Resume Archive</h1>
              <p className="text-[#D4C5B0] mt-4 text-sm md:text-base max-w-xl">
                A detailed overview of my professional experience, skills, and education. This page contains my complete work history.
              </p>
            </div>

            {/* Resume Download Section */}
            <div className="mb-10 p-4 md:p-6 border border-[#BFA181]/20 rounded-lg bg-[#1F1F1F]">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[#F4F4F4] mb-2">Download Complete Resume</h2>
                  <p className="text-[#D4C5B0] text-sm">Get a comprehensive PDF version of my resume</p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-4 py-2 mt-4 md:mt-0 border border-[#BFA181] text-[#BFA181] hover:bg-[#BFA181] hover:text-[#1C1C1C] rounded-md transition-colors font-medium"
                >
                  <Download size={16} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Professional Experience</h2>
              
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div 
                    key={experience.id}
                    className="relative pl-8 md:pl-10 pb-8 group"
                  >
                    {/* Timeline connector */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-3 md:left-4 top-3 bottom-0 w-0.5 bg-[#BFA181]/30 group-hover:bg-[#BFA181]/50 transition-colors duration-300"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#BFA181]/30 flex items-center justify-center group-hover:border-[#BFA181] transition-colors duration-300">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-[#BFA181]/50 rounded-full group-hover:bg-[#BFA181] transition-colors duration-300"></div>
                    </div>
                    
                    <div className="transition-all duration-300 group-hover:translate-x-1">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-[#F4F4F4]">{experience.title}</h3>
                        <div className="text-sm text-[#BFA181]">{experience.company}</div>
                        <div className="text-xs text-[#D4C5B0]/70">{experience.date}</div>
                      </div>
                      
                      <p className="text-[#D4C5B0] text-sm mb-3">{experience.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {experience.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-[#1F1F1F] border border-[#BFA181]/30 text-[#D4C5B0]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <ul className="list-disc list-inside text-[#D4C5B0] text-xs space-y-1.5 ml-1">
                        {experience.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Education</h2>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={edu.id}
                    className="relative pl-8 md:pl-10 pb-8 group"
                  >
                    {/* Timeline connector */}
                    {index < education.length - 1 && (
                      <div className="absolute left-3 md:left-4 top-3 bottom-0 w-0.5 bg-[#BFA181]/30 group-hover:bg-[#BFA181]/50 transition-colors duration-300"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#BFA181]/30 flex items-center justify-center group-hover:border-[#BFA181] transition-colors duration-300">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-[#BFA181]/50 rounded-full group-hover:bg-[#BFA181] transition-colors duration-300"></div>
                    </div>
                    
                    <div className="transition-all duration-300 group-hover:translate-x-1">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-[#F4F4F4]">{edu.degree}</h3>
                        <div className="text-sm text-[#BFA181]">{edu.institution}</div>
                        <div className="text-xs text-[#D4C5B0]/70">{edu.date}</div>
                      </div>
                      
                      <p className="text-[#D4C5B0] text-sm mb-3">{edu.description}</p>
                      
                      <ul className="list-disc list-inside text-[#D4C5B0] text-xs space-y-1.5 ml-1">
                        {edu.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Core Skills</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "JavaScript/TypeScript", 
                  "React/Next.js", 
                  "Node.js",
                  "HTML/CSS",
                  "MongoDB",
                  "RESTful APIs",
                  "Redux/Context API",
                  "Tailwind CSS",
                  "GraphQL",
                  "Testing (Jest/RTL)",
                  "UI/UX Design",
                  "Git/Version Control",
                  "Performance Optimization",
                  "Responsive Design",
                  "Agile/Scrum",
                  "CI/CD"
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="p-3 border border-[#BFA181]/20 rounded-md bg-[#1F1F1F] text-center hover:border-[#BFA181]/50 transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    <span className="text-[#D4C5B0] text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Me CTA */}
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
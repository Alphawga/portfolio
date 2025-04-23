"use client"

import { useState, useEffect } from "react"
import { X, ArrowLeft, Download, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

// Resume archive page with same design language
export default function ResumeArchive() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Define full experience array based on provided resume
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Innovar Ideas",
      companyUrl: "https://innovartech.ng/",
      date: "2021 - Present",
      description: "Leading development of web applications and APIs while collaborating with international teams.",
      tags: ["React.js", "Next.js", "Node.js", "RESTful APIs", "CI/CD"],
      details: [
        "Designed and scaled web applications using React.js and Next.js",
        "Reduced API response times by 40% through optimized server-side logic in Node.js",
        "Built secure RESTful APIs, increasing system reliability and ensuring industry-standard compliance",
        "Collaborated with international teams, implementing robust data pipelines for enhanced accessibility",
        "Deployed daily updates via CI/CD pipelines, maintaining 99.9% system uptime"
      ]
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Trade Depot",
      companyUrl: "https://www.tradedepot.co/",
      date: "2020 - 2021",
      description: "Improved backend systems for logistics operations, enhancing reliability and performance.",
      tags: ["Node.js", "Database Optimization", "API Development", "Debugging"],
      details: [
        "Diagnosed and resolved critical backend issues for logistics systems, enhancing uptime for 200+ drivers",
        "Streamlined backend workflows, reducing debugging time by 25%",
        "Contributed to improving app stability by optimizing database queries and integrations"
      ]
    },
    {
      id: 3,
      title: "Web Developer",
      company: "AG Scholar",
      companyUrl: "#",
      date: "2017 - 2020",
      description: "Developed and maintained interactive web platforms for educational services.",
      tags: ["HTML/CSS", "JavaScript", "Cross-browser Compatibility", "User Experience"],
      details: [
        "Developed and maintained interactive web platforms, driving a 25% increase in user engagement",
        "Enhanced cross-browser compatibility, ensuring 95% accessibility compliance",
        "Regularly updated features, improving user retention by 15%"
      ]
    }
  ]

  // Projects section from resume
  const projects = [
    {
      id: 1,
      title: "Traders Bloc",
      description: "A secure lending platform revolutionizing financial transactions.",
      details: [
        "Implemented role-based access controls, ensuring 100% data security compliance",
        "Streamlined payment workflows, reducing transaction processing time by 35%"
      ],
      tags: ["Security", "Payments", "Role-based Access"],
      link: "https://github.com/Alphawga/traders-bloc-backend"
    },
    {
      id: 2,
      title: "SchoolWave",
      description: "AI-powered school management system.",
      details: [
        "Designed AI-driven result processing algorithms, reducing manual workload by 70%",
        "Built interactive dashboards for administrators, increasing decision-making efficiency",
        "Integrated machine learning models to track student performance with 90% accuracy"
      ],
      tags: ["AI/ML", "Analytics", "Education Tech"],
      link: "https://schoolwave.ng/"
    },
    {
      id: 3,
      title: "TechHill LMS",
      description: "A modern learning management system.",
      details: [
        "Delivered an intuitive React.js front end, improving user experience for 10,000+ learners",
        "Optimized server-side rendering with Next.js, cutting load times by 50%",
        "Integrated analytics tools to track user engagement and performance metrics"
      ],
      tags: ["React.js", "Next.js", "Analytics"],
      link: "https://www.techill.ng/"
    },
    {
      id: 4,
      title: "OKOH Enterprise Management System",
      description: "Custom ERP solution.",
      details: [
        "Designed scalable backend logic, reducing processing delays by 20%",
        "Improved workflow automation, saving 10+ hours/week for administrative staff",
        "Built a scalable backend with Node.js and Express.js, handling 10,000+ daily transactions"
      ],
      tags: ["ERP", "Node.js", "Workflow Automation"],
      link: "https://www.okohinternational.com/"
    }
  ]

  // Education entry
  const education = [
    {
      id: 1,
      degree: "Higher National Diploma in Computer Science Technology",
      institution: "Ogun State Institute of Technology",
      date: "Completed",
      description: "Focused on computer science fundamentals and practical applications",
      details: []
    }
  ]

  
  const volunteer = [
    {
      id: 1,
      title: "Full Stack Development Instructor",
      organization: "Next Generation Genius (NGG)",
      organizationUrl: "https://next.afrovanguard.org.ng/",
      date: "January 2024 - Present",
      description: "Mentoring students in full-stack development technologies",
      details: [
        "Mentored 20+ students in full-stack technologies, contributing to their career advancement"
      ]
    }
  ]

  const skills = {
    languages: ["JavaScript (ES6+)", "Python", "Ruby", "Swift", "Java"],
    frontend: ["React.js", "Next.js", "HTML/CSS"],
    backend: ["Node.js", "Django", "Flask", "Ruby on Rails"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM"],
    devops: ["AWS", "Docker", "Git", "CI/CD"],
    tools: ["Protocol Buffers", "gRPC", "Postman", "VS Code"]
  }

 
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
                  href="/AJIBOLA BAMIDELE AGIM CV.pdf" 
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 mt-4 md:mt-0 border border-[#BFA181] text-[#BFA181] hover:bg-[#BFA181] hover:text-[#1C1C1C] rounded-md transition-colors font-medium"
                >
                  <Download size={16} />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* Summary Section */}
            <div className="mb-12 p-4 md:p-6 border border-[#BFA181]/20 rounded-lg bg-[#1F1F1F]">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">Summary</h2>
              <p className="text-[#D4C5B0] text-sm leading-relaxed">
                Results-oriented Full Stack Developer with 7+ years of experience delivering scalable, secure, and innovative solutions across web, SaaS, and enterprise domains. Adept at bridging technical and business needs, with a proven track record in AI-powered systems, cloud architectures, and collaborative global teams. Passionate about driving economic empowerment through impactful technology.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="mb-12">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Core Competencies</h2>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="min-w-[200px] text-[#F4F4F4] font-medium text-sm">Full Stack Development</div>
                  <div className="text-[#D4C5B0] text-sm">Proficient in building end-to-end solutions with modern frameworks.</div>
                </div>
                <div className="flex items-start">
                  <div className="min-w-[200px] text-[#F4F4F4] font-medium text-sm">AI/ML Integration</div>
                  <div className="text-[#D4C5B0] text-sm">Expertise in deploying machine learning models for SaaS and enterprise tools.</div>
                </div>
                <div className="flex items-start">
                  <div className="min-w-[200px] text-[#F4F4F4] font-medium text-sm">Cloud Scalability</div>
                  <div className="text-[#D4C5B0] text-sm">Extensive experience in cloud-native applications on AWS and CI/CD pipelines.</div>
                </div>
                <div className="flex items-start">
                  <div className="min-w-[200px] text-[#F4F4F4] font-medium text-sm">Team Collaboration</div>
                  <div className="text-[#D4C5B0] text-sm">Proven ability to work with distributed teams and mentor aspiring developers.</div>
                </div>
                <div className="flex items-start">
                  <div className="min-w-[200px] text-[#F4F4F4] font-medium text-sm">Performance Optimization</div>
                  <div className="text-[#D4C5B0] text-sm">Skilled in improving system performance and data security.</div>
                </div>
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
                        <div className="text-sm text-[#BFA181]">
                          {experience.companyUrl !== "#" ? (
                            <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {experience.company}
                            </a>
                          ) : (
                            experience.company
                          )}
                        </div>
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

            {/* Projects Section */}
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Notable Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    className="p-4 border border-[#BFA181]/20 rounded-lg bg-[#1F1F1F] hover:border-[#BFA181]/50 transition-all duration-300 group"
                  >
                    <h3 className="text-lg font-semibold text-[#F4F4F4] mb-2 group-hover:text-[#BFA181] transition-colors">
                      {project.link !== "#" ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center">
                          {project.title}
                          <ArrowUpRight className="ml-1 h-4 w-4 opacity-70" />
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="text-[#D4C5B0] text-sm mb-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-[#252525] border border-[#BFA181]/30 text-[#D4C5B0]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="list-disc list-inside text-[#D4C5B0] text-xs space-y-1.5 ml-1">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
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
                      
                      {edu.details.length > 0 && (
                        <ul className="list-disc list-inside text-[#D4C5B0] text-xs space-y-1.5 ml-1">
                          {edu.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteer Section */}
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Volunteer Experience</h2>
              
              <div className="space-y-8">
                {volunteer.map((exp, index) => (
                  <div 
                    key={exp.id}
                    className="relative pl-8 md:pl-10 pb-8 group"
                  >
                    {/* Timeline connector */}
                    {index < volunteer.length - 1 && (
                      <div className="absolute left-3 md:left-4 top-3 bottom-0 w-0.5 bg-[#BFA181]/30 group-hover:bg-[#BFA181]/50 transition-colors duration-300"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#BFA181]/30 flex items-center justify-center group-hover:border-[#BFA181] transition-colors duration-300">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-[#BFA181]/50 rounded-full group-hover:bg-[#BFA181] transition-colors duration-300"></div>
                    </div>
                    
                    <div className="transition-all duration-300 group-hover:translate-x-1">
                      <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-[#F4F4F4]">{exp.title}</h3>
                        <div className="text-sm text-[#BFA181]">
                          {exp.organizationUrl ? (
                            <a href={exp.organizationUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                              {exp.organization}
                            </a>
                          ) : (
                            exp.organization
                          )}
                        </div>
                        <div className="text-xs text-[#D4C5B0]/70">{exp.date}</div>
                      </div>
                      
                      <p className="text-[#D4C5B0] text-sm mb-3">{exp.description}</p>
                      
                      <ul className="list-disc list-inside text-[#D4C5B0] text-xs space-y-1.5 ml-1">
                        {exp.details.map((detail, i) => (
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
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Technical Skills</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#F4F4F4] font-medium text-sm mb-2">Languages & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.languages, ...skills.frontend, ...skills.backend].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 text-xs rounded-md bg-[#1F1F1F] border border-[#BFA181]/20 text-[#D4C5B0] hover:border-[#BFA181]/50 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[#F4F4F4] font-medium text-sm mb-2">Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 text-xs rounded-md bg-[#1F1F1F] border border-[#BFA181]/20 text-[#D4C5B0] hover:border-[#BFA181]/50 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[#F4F4F4] font-medium text-sm mb-2">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.devops, ...skills.tools].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 text-xs rounded-md bg-[#1F1F1F] border border-[#BFA181]/20 text-[#D4C5B0] hover:border-[#BFA181]/50 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Me CTA */}
            <div className="mb-16 p-6 border border-[#BFA181]/20 rounded-lg bg-[#1F1F1F] text-center">
              <h2 className="text-2xl font-semibold text-[#F4F4F4] mb-3">Interested in working together?</h2>
              <p className="text-[#D4C5B0] text-sm mb-6 max-w-lg mx-auto">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
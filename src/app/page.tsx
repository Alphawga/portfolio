"use client"

import { useState, useEffect, useRef } from "react"
import { X, Github, Linkedin, Mail, ArrowRight, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    software: useRef<HTMLElement>(null),
    ecommerce: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  useEffect(() => {
    // Set client-side flag
    setIsClient(true)

    const handleScroll = () => {
      const sections = Object.entries(sectionRefs)
      const scrollPosition = window.scrollY + window.innerHeight * 0.4

      let currentSection = "about"
      for (const [id, ref] of sections) {
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          currentSection = id
        }
      }
      setActiveSection(currentSection)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsMenuOpen((prev) => !prev)
      }
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("mousemove", handleMouseMove)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMenuOpen, sectionRefs])

  const projects = [
    {
      id: 1,
      title: "SchoolWave",
      role: "Lead Full-Stack Developer",
      timeline: "6 months",
      impact: "70% workload reduction",
      distress: "Manual school management processes were time-consuming and prone to errors, hindering operational efficiency.",
      process: "Engineered an AI-powered school management system. Designed AI-driven result processing algorithms using Node.js and integrated analytics with MongoDB.",
      delight: "Transformed educational operations by reducing manual result processing workload by 70% and providing data-driven insights.",
      image: "/schoolwave.png",
      link: "https://schoolwave.ng/",
      tags: ["AI/ML", "React", "Node.js", "Analytics", "MongoDB"],
      category: "AI Automation",
      accentColor: "accentGreen",
    },
    {
      id: 2,
      title: "TechHill LMS",
      role: "Full-Stack Developer",
      timeline: "4 months",
      impact: "10,000+ active learners",
      distress: "Existing learning platforms lacked intuitive user experiences, hindering learner engagement.",
      process: "Built a modern Learning Management System using React.js and Next.js. Focused on delivering an intuitive frontend and optimizing database interactions for performance.",
      delight: "Enhanced educational experiences for 10,000+ learners through a significantly improved, user-friendly interface.",
      image: "/techill.png",
      link: "https://www.techill.ng/",
      tags: ["React.js", "Next.js", "Database Optimization", "Analytics"],
      category: "Education Tech",
      accentColor: "accentRed",
    },
    {
      id: 3,
      title: "OKOH ERP System",
      role: "Full-Stack Architect",
      timeline: "8 months",
      impact: "20% faster processing",
      distress: "The client required a streamlined system to manage complex enterprise resources efficiently.",
      process: "Developed a custom Enterprise Resource Planning (ERP) solution using .NET and React.js. Designed scalable backend logic with Node.js/Express.js and SQL.",
      delight: "Streamlined business operations by implementing a scalable backend, reducing processing delays by 20%.",
      image: "/okoh.png",
      link: "https://www.okohinternational.com/",
      tags: [".NET", "React.js", "SQL", "Node.js", "Express.js"],
      category: "Enterprise Software",
      accentColor: "mutedGold",
    },
    {
      id: 4,
      title: "Traders Bloc",
      role: "Backend Lead & Security Engineer",
      timeline: "5 months",
      impact: "100% security compliance",
      distress: "Financial institutions faced inefficiencies and security risks in traditional lending processes.",
      process: "Developed a secure lending platform using Node.js and React. Implemented role-based access controls and integrated secure payment gateways, ensuring 100% data security compliance.",
      delight: "Revolutionized financial transactions with a secure and efficient platform, streamlining the lending process.",
      image: "/traders.png",
      link: "https://traders-bloc-backend.vercel.app/",
      tags: ["Node.js", "React", "Express", "Payment Integration", "RESTful API"],
      category: "FinTech",
      accentColor: "accentBlue",
    },




  ]

  const experience = [
    {
      date: "2021 — Present",
      title: "Software Developer",
      company: "Innovar Ideas",
      link: "https://innovartech.ng/",
      description: "Designed and scaled web applications using React.js and Next.js while building secure RESTful APIs and collaborating with international teams.",
      tags: ["React.js", "Next.js", "Node.js", "RESTful APIs", "CI/CD"]
    },
    {
      date: "2020 — 2021",
      title: "Backend Engineer",
      company: "Trade Depot",
      link: "https://www.tradedepot.co/",
      description: "Diagnosed and resolved critical backend issues for logistics systems, enhancing uptime for 200+ drivers while optimizing database queries and integrations.",
      tags: ["Node.js", "Database Optimization", "API Development", "Debugging"]
    },
    {
      date: "2017 — 2020",
      title: "Web Developer",
      company: "AG Scholar",
      link: "#",
      description: "Developed and maintained interactive web platforms for educational services, enhancing cross-browser compatibility and ensuring 95% accessibility compliance.",
      tags: ["HTML/CSS", "JavaScript", "Cross-browser Compatibility", "User Experience"]
    },
    {
      date: "2024 — Present",
      title: "Full Stack Development Instructor",
      company: "Next Generation Genius (NGG)",
      link: "https://next.afrovanguard.org.ng/",
      description: "Mentored 20+ students in full-stack technologies, contributing to their career advancement through practical training and guidance.",
      tags: ["Mentoring", "Technical Training", "Full Stack Development"]
    },
  ]

  return (
    <div className="bg-[#1C1C1C] text-[#F4F4F4] min-h-screen relative group/spotlight">
      {isClient && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 transition duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(191, 161, 129, 0.08), transparent 80%)`,
          }}
        />
      )}
      <div className="max-w-screen-xl mx-auto">
        <header className="sticky top-0 z-30 md:hidden bg-[#1C1C1C]/90 backdrop-blur-md p-4 border-b border-[#BFA181]/10">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg text-[#BFA181]">Ajibola</h2>
            <button 
              className="p-2 rounded-md border border-[#BFA181]/20"
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
                {[
                  { id: "about", label: "About" },
                  { id: "experience", label: "Experience" },
                  { id: "software", label: "Software Solutions" },
                  { id: "ecommerce", label: "E-commerce Services" },
                  { id: "projects", label: "Projects" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-xl font-medium text-[#F4F4F4] hover:text-[#BFA181] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/AJIBOLA BAMIDELE AGIM CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center bg-[#BFA181] text-[#1C1C1C] px-4 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View Résumé
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col md:flex-row">
          <div className="md:fixed md:w-[340px] lg:w-[400px] md:h-screen md:overflow-y-auto z-20 bg-[#1F1F1F] w-full">
            <div className="p-6 md:p-8 md:h-full flex flex-col pt-4 md:pt-8">
              <div className="mb-6 md:mb-12">
                <h1 className="text-2xl md:text-3xl font-bold text-[#F4F4F4]">
                  Ajibola Bamidele
                </h1>
                
                <h2 className="text-lg font-medium text-[#BFA181] mt-2">
                  Software Developer
                </h2>

                <p className="text-[#D4C5B0] mt-4 text-sm md:text-base max-w-xs">
                  I help businesses scale with custom software, e-commerce platforms, and AI automation that drive measurable growth.
                </p>

                <div className="mt-4 max-w-xs">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#D4C5B0]/90 mb-4">
                    <span>8+ Years Experience</span>
                    <span className="text-[#BFA181]">•</span>
                    <span>50+ Projects Delivered</span>
                    <span className="text-[#BFA181]">•</span>
                    <span>40-Day E-commerce Guarantee</span>
                  </div>
                </div>

                <div className="mt-6 max-w-xs">
                  <Link
                    href="#contact"
                    className="inline-flex items-center bg-[#BFA181] text-[#1C1C1C] px-5 py-2.5 rounded-md hover:bg-[#AD8D6F] transition-colors text-sm font-medium"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <p className="text-[#D4C5B0]/80 text-xs mt-2">Available for projects & full-time roles</p>
                </div>
              </div>
              
              <nav className="hidden md:flex flex-col space-y-3 mb-8">
                {[
                  { id: "about", label: "About" },
                  { id: "experience", label: "Experience" },
                  { id: "software", label: "Software Solutions" },
                  { id: "ecommerce", label: "E-commerce Services" },
                  { id: "projects", label: "Projects" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`flex items-center space-x-3 text-sm relative group transition-colors duration-300 ${activeSection === item.id
                        ? "text-[#F4F4F4] font-medium"
                        : "text-[#D4C5B0] hover:text-[#F4F4F4]"
                      }`}
                  >
                    {isClient && (
                      <motion.div
                        className="h-0.5 bg-[#BFA181] absolute left-[-20px] md:left-[-32px]"
                        initial={{ width: 0 }}
                        animate={{
                          width: activeSection === item.id ? 16 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span>{item.label}</span>
                      </Link>
                ))}
              </nav>
              
              <div className="flex space-x-5 mt-auto">
                {[
                  { icon: Github, href: "https://github.com/Alphawga" },
                  { icon: Linkedin, href: "https://linkedin.com/in/bamidele-ajibola-9b7913178" },
                  { icon: Mail, href: "mailto:Bamidele.ajibola.alpha@gmail.com" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4C5B0] hover:text-[#BFA181] transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
            </div>

              <Link
                href="/AJIBOLA BAMIDELE AGIM CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 hidden md:inline-flex items-center bg-[#BFA181] text-[#1C1C1C] px-4 py-2 rounded-md hover:bg-[#AD8D6F] transition-colors text-sm w-fit"
              >
                View Résumé
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                  width="14" 
                  height="14" 
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  className="ml-2"
                  >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
              </Link>
              </div>
          </div>

          <main className="flex-1 md:ml-[380px] lg:ml-[440px] relative z-10">
            <div className="py-6 md:py-12 px-5 md:px-12 lg:px-16">
              <section id="about" ref={sectionRefs.about} className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">About</h3>
                <div className="max-w-xl space-y-4 text-sm md:text-base text-[#D4C5B0]">
                  <p>
                    I transform business challenges into scalable software solutions. With 8+ years building custom applications, e-commerce platforms, and AI-driven systems, I help companies reduce operational costs by up to 70% while increasing efficiency and revenue. My clients see real results: streamlined operations, automated workflows, and platforms that serve 100,000+ users.
                  </p>

                  <p>
                    My process starts with understanding your business goals—not just writing code. Whether you need a complete <span className="text-[#BFA181]">e-commerce platform in 40 days</span>, an <span className="text-[#BFA181]">AI automation system</span>, or <span className="text-[#BFA181]">custom enterprise software</span>, I deliver solutions that your team can actually use and your customers will love. From concept to deployment, I handle the full development lifecycle with clean, maintainable code and pixel-perfect interfaces.
                  </p>

                  <p>
                    From fast-growing startups to established enterprises, I've shipped 50+ production applications across education, finance, logistics, and e-commerce sectors. I've worked with dynamic <span className="text-[#BFA181]">tech startups</span>, <span className="text-[#BFA181]">digital product studios</span>, and <span className="text-[#BFA181]">large corporations</span>—consistently delivering solutions that scale and drive measurable business impact.
                  </p>
        </div>
      </section>

              <section className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">What I Do</h3>
                <div className="max-w-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="#ecommerce" className="group p-5 rounded-lg bg-[#BFA181]/10 border border-[#BFA181]/20 hover:bg-[#BFA181]/15 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-md bg-[#BFA181]/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#BFA181]">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#F4F4F4] font-semibold mb-1 text-sm group-hover:text-[#BFA181] transition-colors">E-commerce Development</h4>
                          <p className="text-[#D4C5B0] text-xs leading-relaxed">Launch revenue-generating online stores in 40 days</p>
                        </div>
                      </div>
                    </a>

                    <a href="#software" className="group p-5 rounded-lg bg-[#BFA181]/10 border border-[#BFA181]/20 hover:bg-[#BFA181]/15 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-md bg-[#BFA181]/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#BFA181]">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#F4F4F4] font-semibold mb-1 text-sm group-hover:text-[#BFA181] transition-colors">Custom Software Solutions</h4>
                          <p className="text-[#D4C5B0] text-xs leading-relaxed">Build scalable applications tailored to your business</p>
                        </div>
                      </div>
                    </a>

                    <a href="#software" className="group p-5 rounded-lg bg-[#BFA181]/10 border border-[#BFA181]/20 hover:bg-[#BFA181]/15 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-md bg-[#BFA181]/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#BFA181]">
                            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#F4F4F4] font-semibold mb-1 text-sm group-hover:text-[#BFA181] transition-colors">AI & Automation</h4>
                          <p className="text-[#D4C5B0] text-xs leading-relaxed">Eliminate repetitive tasks and unlock data-driven insights</p>
                        </div>
                      </div>
                    </a>

                    <a href="#software" className="group p-5 rounded-lg bg-[#BFA181]/10 border border-[#BFA181]/20 hover:bg-[#BFA181]/15 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-md bg-[#BFA181]/20 flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#BFA181]">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#F4F4F4] font-semibold mb-1 text-sm group-hover:text-[#BFA181] transition-colors">System Modernization</h4>
                          <p className="text-[#D4C5B0] text-xs leading-relaxed">Transform legacy systems without disrupting operations</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </section>

              <section id="experience" ref={sectionRefs.experience} className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">Experience</h3>
                <div className="max-w-xl">
                  {experience.slice(0, 3).map((job, index) => (
                    <div 
                      key={index} 
                      className="relative mb-10 group p-5 rounded-md transition-all duration-300 hover:bg-[#BFA181]/10 hover:shadow-xl hover:backdrop-blur-sm"
                    >
                      <div className="absolute left-[-10px] top-5 h-3 w-3 rounded-full bg-[#BFA181]"></div>
                      
                      <div className="text-[#D4C5B0] text-sm mb-1">{job.date}</div>
                      
                      <h3 className="flex items-center text-base font-semibold text-[#F4F4F4] mb-2">
                        <ArrowRight className="inline-block h-4 w-4 mr-2 text-[#BFA181] transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                        <span>{job.title} · <Link href={job.link} className="text-[#BFA181] hover:underline">{job.company}</Link></span>
                      </h3>
                      
                      <p className="text-[#D4C5B0] text-sm mb-3">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-[#1C1C1C] border border-[#BFA181]/30 text-[#D4C5B0]">
                            {tag}
                </span>
            ))}
          </div>
        </div>
                  ))}
              </div>
                <div className="mt-8 max-w-xl">
                  <Link
                    href="/resume-archive"
                    className="inline-flex items-center text-[#BFA181] hover:text-[#F4F4F4] group transition-colors duration-300 text-sm"
                  >
                    <span>View Full Resume Archive</span>
                    <svg className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </section>

              <section id="software" ref={sectionRefs.software} className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">Software Solutions</h3>
                <div className="max-w-xl space-y-8">
                  <p className="text-[#D4C5B0] text-sm md:text-base">
                    I specialize in building custom software solutions that transform business operations and drive growth. From concept to deployment, I deliver scalable, secure, and user-friendly applications tailored to your specific needs.
                  </p>

                  <div className="grid gap-6">
                    <div className="p-5 rounded-lg bg-[#BFA181]/10 border border-[#BFA181]/20 hover:bg-[#BFA181]/15 transition-all duration-300">
                      <h4 className="text-[#F4F4F4] font-semibold mb-2">Custom Web Applications</h4>
                      <p className="text-[#D4C5B0] text-sm">Full-stack web applications built with React, Next.js, and Node.js. Scalable architecture with secure authentication and real-time features.</p>
                    </div>

                    <div className="p-5 rounded-lg bg-[#BFA181]/10 border border-[#BFA181]/20 hover:bg-[#BFA181]/15 transition-all duration-300">
                      <h4 className="text-[#F4F4F4] font-semibold mb-2">Business Process Automation</h4>
                      <p className="text-[#D4C5B0] text-sm">Streamline operations with automated workflows, data processing, and integration systems that reduce manual work and improve efficiency.</p>
                    </div>

                    <div className="p-5 rounded-lg bg-[#BFA181]/10 border border-[#BFA181]/20 hover:bg-[#BFA181]/15 transition-all duration-300">
                      <h4 className="text-[#F4F4F4] font-semibold mb-2">API Development & Integration</h4>
                      <p className="text-[#D4C5B0] text-sm">RESTful APIs, third-party integrations, and microservices architecture to connect your systems and extend functionality.</p>
                    </div>

                    <div className="p-5 rounded-lg bg-[#BFA181]/10 border border-[#BFA181]/20 hover:bg-[#BFA181]/15 transition-all duration-300">
                      <h4 className="text-[#F4F4F4] font-semibold mb-2">Legacy System Modernization</h4>
                      <p className="text-[#D4C5B0] text-sm">Transform outdated systems with modern technologies while preserving critical data and ensuring seamless migration.</p>
                    </div>
                  </div>

                  <div className="bg-[#1C1C1C]/80 backdrop-blur-md rounded-lg p-6 border border-[#BFA181]/20 shadow-lg">
                    <p className="text-[#BFA181] font-medium mb-3">Ready to transform your business with custom software?</p>
                    <Link
                      href="#contact"
                      className="inline-flex items-center bg-[#BFA181] text-[#1C1C1C] px-6 py-3 rounded-md hover:bg-[#AD8D6F] transition-colors text-sm font-medium"
                    >
                      Let's Discuss Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </section>

              <section id="ecommerce" ref={sectionRefs.ecommerce} className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">E-commerce Services</h3>
                <div className="max-w-xl space-y-8">
                  <div className="bg-gradient-to-r from-[#BFA181]/20 to-[#AD8D6F]/20 p-6 rounded-lg border border-[#BFA181]/30">
                    <h4 className="text-xl font-bold text-[#F4F4F4] mb-2">Complete E-commerce Solutions in 40 Days</h4>
                    <p className="text-[#D4C5B0] text-sm md:text-base">
                      Get your business online with a fully functional e-commerce platform. From design to deployment, I deliver comprehensive solutions that drive sales and growth.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA181] mt-2"></div>
                      <div>
                        <h5 className="text-[#F4F4F4] font-medium text-sm">Custom Design & Development</h5>
                        <p className="text-[#D4C5B0] text-sm">Responsive, mobile-optimized stores built with modern technologies</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA181] mt-2"></div>
                      <div>
                        <h5 className="text-[#F4F4F4] font-medium text-sm">Payment Gateway Integration</h5>
                        <p className="text-[#D4C5B0] text-sm">Secure payment processing with multiple payment options</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA181] mt-2"></div>
                      <div>
                        <h5 className="text-[#F4F4F4] font-medium text-sm">Inventory Management System</h5>
                        <p className="text-[#D4C5B0] text-sm">Complete product catalog and stock management</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA181] mt-2"></div>
                      <div>
                        <h5 className="text-[#F4F4F4] font-medium text-sm">Admin Dashboard</h5>
                        <p className="text-[#D4C5B0] text-sm">Easy-to-use backend for managing orders, customers, and analytics</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-[#BFA181] mt-2"></div>
                      <div>
                        <h5 className="text-[#F4F4F4] font-medium text-sm">SEO Optimization</h5>
                        <p className="text-[#D4C5B0] text-sm">Built-in SEO features to help your store rank higher</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1C1C1C]/80 backdrop-blur-md rounded-lg p-6 border border-[#BFA181]/20 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-[#BFA181] font-medium mb-1">Ready to launch your online store?</p>
                        <p className="text-[#D4C5B0] text-sm">Get a complete e-commerce solution delivered in 40 days</p>
                      </div>
                      <Link
                        href="#contact"
                        className="inline-flex items-center bg-[#BFA181] text-[#1C1C1C] px-6 py-3 rounded-md hover:bg-[#AD8D6F] transition-colors text-sm font-medium whitespace-nowrap"
                      >
                        Start Your Store
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <section id="projects" ref={sectionRefs.projects} className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">Projects</h3>
                <div className="max-w-xl space-y-12">
                  {projects.slice(0, 5).map((project) => (
                    <div
                      key={project.id}
                      className="group p-4 rounded-lg transition-all duration-300 hover:bg-[#BFA181]/10 hover:shadow-xl hover:backdrop-blur-sm overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 text-[10px] rounded-md bg-[#BFA181]/20 border border-[#BFA181]/40 text-[#BFA181] font-medium uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="px-2 py-1 text-[10px] rounded-md bg-[#1C1C1C]/80 border border-[#BFA181]/20 text-[#D4C5B0]">
                          {project.timeline}
                        </span>
                        <span className="px-2 py-1 text-[10px] rounded-md bg-[#1C1C1C]/80 border border-[#BFA181]/20 text-[#BFA181] font-semibold">
                          {project.impact}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start mb-4">
                        <div className="sm:col-span-1">
                          <div className="relative aspect-video rounded-md overflow-hidden border border-[#BFA181]/20 shadow-md">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <h3 className="flex items-center text-base font-semibold text-[#F4F4F4] mb-1">
                            <Link href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-[#BFA181] transition-colors">
                              <span>{project.title}</span>
                              <ArrowUpRight className="inline-block h-4 w-4 ml-1.5 text-[#BFA181] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                            </Link>
                          </h3>
                          <p className="text-[10px] text-[#D4C5B0]/80 mb-3 italic">{project.role}</p>
                          <div className="space-y-3 text-sm text-[#D4C5B0]">
                            <div>
                              <h4 className="font-semibold text-[#BFA181]/90 text-xs uppercase tracking-wider mb-1">The Distress</h4>
                              <p className="leading-relaxed">{project.distress}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-[#BFA181]/90 text-xs uppercase tracking-wider mb-1">The Process</h4>
                              <p className="leading-relaxed">{project.process}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-[#BFA181]/90 text-xs uppercase tracking-wider mb-1">The Delight</h4>
                              <p className="leading-relaxed">{project.delight}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-[#1C1C1C]/70 border border-[#BFA181]/30 text-[#D4C5B0]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 max-w-xl">
                  <Link 
                    href="/archive"
                    className="inline-flex items-center text-[#BFA181] hover:text-[#F4F4F4] group transition-colors duration-300 text-sm"
                  >
                    <span>View Full Project Archive</span>
                    <svg className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
        </div>
      </section>

              <section className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">Client Success Stories</h3>
                <div className="max-w-xl space-y-6">
                  <div className="bg-[#BFA181]/10 p-6 rounded-lg border border-[#BFA181]/20">
                    <p className="text-[#D4C5B0] text-sm italic mb-4">
                      "Ajibola transformed our manual school management processes with an AI-powered system that reduced our result processing workload by 70%. The impact on our operational efficiency has been remarkable."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#BFA181]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#BFA181] font-semibold text-sm">SW</span>
                      </div>
                      <div>
                        <p className="text-[#F4F4F4] font-medium text-sm">SchoolWave Team</p>
                        <p className="text-[#D4C5B0] text-xs">Education Technology</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#BFA181]/10 p-6 rounded-lg border border-[#BFA181]/20">
                    <p className="text-[#D4C5B0] text-sm italic mb-4">
                      "The secure lending platform Ajibola developed revolutionized our financial operations. The implementation of role-based access controls and payment gateway integration exceeded our expectations."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#BFA181]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#BFA181] font-semibold text-sm">TB</span>
                      </div>
                      <div>
                        <p className="text-[#F4F4F4] font-medium text-sm">Traders Bloc</p>
                        <p className="text-[#D4C5B0] text-xs">Financial Services</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#BFA181]/10 p-6 rounded-lg border border-[#BFA181]/20">
                    <p className="text-[#D4C5B0] text-sm italic mb-4">
                      "Working with Ajibola on our ERP system was seamless. The scalable backend solution reduced our processing delays by 20% and improved our overall business operations significantly."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#BFA181]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#BFA181] font-semibold text-sm">OK</span>
                      </div>
                      <div>
                        <p className="text-[#F4F4F4] font-medium text-sm">OKOH International</p>
                        <p className="text-[#D4C5B0] text-xs">Enterprise Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">How We Work Together</h3>
                <div className="max-w-xl space-y-6">
                  <p className="text-[#D4C5B0] text-sm">
                    From discovery to deployment, I follow a proven process that ensures your project is delivered on time, within scope, and exceeding expectations.
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-[#BFA181]/20 border border-[#BFA181]/30 flex items-center justify-center">
                          <span className="text-[#BFA181] font-bold">1</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#F4F4F4] font-semibold mb-1 text-sm">Discovery Call</h4>
                        <p className="text-[#D4C5B0] text-xs mb-1">Understand your goals, challenges, and requirements</p>
                        <span className="text-[#BFA181]/80 text-[10px] font-medium">Week 1</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-[#BFA181]/20 border border-[#BFA181]/30 flex items-center justify-center">
                          <span className="text-[#BFA181] font-bold">2</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#F4F4F4] font-semibold mb-1 text-sm">Proposal & Planning</h4>
                        <p className="text-[#D4C5B0] text-xs mb-1">Detailed roadmap, timeline, and technical architecture</p>
                        <span className="text-[#BFA181]/80 text-[10px] font-medium">Week 1-2</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-[#BFA181]/20 border border-[#BFA181]/30 flex items-center justify-center">
                          <span className="text-[#BFA181] font-bold">3</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#F4F4F4] font-semibold mb-1 text-sm">Development & Testing</h4>
                        <p className="text-[#D4C5B0] text-xs mb-1">Agile development with weekly progress updates and demos</p>
                        <span className="text-[#BFA181]/80 text-[10px] font-medium">Week 2-6 (varies by project)</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-[#BFA181]/20 border border-[#BFA181]/30 flex items-center justify-center">
                          <span className="text-[#BFA181] font-bold">4</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#F4F4F4] font-semibold mb-1 text-sm">Launch & Support</h4>
                        <p className="text-[#D4C5B0] text-xs mb-1">Smooth deployment with ongoing maintenance and optimization</p>
                        <span className="text-[#BFA181]/80 text-[10px] font-medium">Week 6+ (ongoing)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#BFA181]/10 p-4 rounded-lg border border-[#BFA181]/20 mt-6">
                    <p className="text-[#D4C5B0] text-xs">
                      <span className="text-[#BFA181] font-semibold">E-commerce projects:</span> Delivered in 40 days guaranteed.
                      <span className="block mt-1"><span className="text-[#BFA181] font-semibold">Custom software:</span> Timelines vary based on complexity—typically 2-6 months.</span>
                    </p>
                  </div>
                </div>
              </section>

              <section id="contact" ref={sectionRefs.contact} className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">Let's Work Together</h3>
                <div className="max-w-xl space-y-8">

                  <div className="bg-gradient-to-r from-[#BFA181]/20 to-[#AD8D6F]/20 p-6 rounded-lg border border-[#BFA181]/30">
                    <h4 className="text-xl font-bold text-[#F4F4F4] mb-3">Ready to Transform Your Business?</h4>
                    <p className="text-[#D4C5B0] text-sm md:text-base mb-4">
                      I'm available for full-time positions, contract work, and project-based engagements. Let's discuss how I can help you achieve your business goals.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#BFA181]"></div>
                        <span className="text-[#D4C5B0] text-sm">Full-time opportunities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#BFA181]"></div>
                        <span className="text-[#D4C5B0] text-sm">Contract projects</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#BFA181]"></div>
                        <span className="text-[#D4C5B0] text-sm">E-commerce development</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#BFA181]"></div>
                        <span className="text-[#D4C5B0] text-sm">Custom software solutions</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1C1C1C]/80 backdrop-blur-md rounded-lg p-6 border border-[#BFA181]/20 shadow-lg">
                    <h4 className="text-[#BFA181] font-semibold mb-4 text-sm">Choose Your Preferred Contact Method</h4>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <a
                        href="mailto:Bamidele.ajibola.alpha@gmail.com"
                        className="flex items-center justify-center space-x-2 bg-[#BFA181]/10 hover:bg-[#BFA181]/20 border border-[#BFA181]/30 hover:border-[#BFA181]/50 rounded-lg p-4 transition-all duration-300 group"
                      >
                        <Mail size={18} className="text-[#BFA181]" />
                        <div className="text-left">
                          <p className="text-[#F4F4F4] text-sm font-medium group-hover:text-[#BFA181] transition-colors">Send Email</p>
                          <p className="text-[#D4C5B0] text-[10px]">Quick inquiry</p>
                        </div>
                      </a>
                      <a
                        href="https://linkedin.com/in/bamidele-ajibola-9b7913178"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 bg-[#BFA181]/10 hover:bg-[#BFA181]/20 border border-[#BFA181]/30 hover:border-[#BFA181]/50 rounded-lg p-4 transition-all duration-300 group"
                      >
                        <Linkedin size={18} className="text-[#BFA181]" />
                        <div className="text-left">
                          <p className="text-[#F4F4F4] text-sm font-medium group-hover:text-[#BFA181] transition-colors">Connect on LinkedIn</p>
                          <p className="text-[#D4C5B0] text-[10px]">Professional network</p>
                        </div>
                      </a>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-xs text-[#D4C5B0]/80">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#BFA181]">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>I respond to all inquiries within 24 hours</span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-[#1C1C1C]/80 backdrop-blur-md rounded-lg p-5 border border-[#BFA181]/20 hover:border-[#BFA181]/40 transition-all duration-300">
                      <h5 className="text-[#BFA181] font-semibold mb-2 text-sm">Free Consultation</h5>
                      <p className="text-[#D4C5B0] text-xs">30-minute strategy call to discuss your project needs and goals</p>
                    </div>
                    <div className="bg-[#1C1C1C]/80 backdrop-blur-md rounded-lg p-5 border border-[#BFA181]/20 hover:border-[#BFA181]/40 transition-all duration-300">
                      <h5 className="text-[#BFA181] font-semibold mb-2 text-sm">Transparent Process</h5>
                      <p className="text-[#D4C5B0] text-xs">Clear timelines, milestones, and regular communication throughout</p>
                    </div>
                  </div>

                  <div className="bg-[#1C1C1C]/80 backdrop-blur-md rounded-lg p-5 border border-[#BFA181]/20 shadow-lg">
                    <ContactForm />
                  </div>

                  <div className="text-center">
                    <p className="text-[#D4C5B0] text-sm mb-4">
                      Prefer a direct conversation? Let's connect on your preferred platform:
                    </p>
                    <div className="flex justify-center space-x-6">
                      <a
                        href="mailto:Bamidele.ajibola.alpha@gmail.com"
                        className="flex items-center space-x-2 text-[#BFA181] hover:text-[#F4F4F4] transition-colors"
                      >
                        <Mail size={16} />
                        <span className="text-sm">Email</span>
                      </a>
                      <a
                        href="https://linkedin.com/in/bamidele-ajibola-9b7913178"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[#BFA181] hover:text-[#F4F4F4] transition-colors"
                      >
                        <Linkedin size={16} />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/Alphawga"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[#BFA181] hover:text-[#F4F4F4] transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm">GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <footer className="pt-4 pb-6 border-t border-[#BFA181]/10">
                <div className="max-w-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-[#D4C5B0] text-xs mb-3 md:mb-0">
                      Built with Next.js and Tailwind CSS
            </div>
                    <div className="text-[#BFA181] text-xs">
                      © 2024 Ajibola Bamidele Agim
              </div>
            </div>
          </div>
              </footer>
          </div>
          </main>
        </div>
      </div>
    </div>
  )
}


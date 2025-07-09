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

  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
    
  }

  useEffect(() => {
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
      distress: "Manual school management processes were time-consuming and prone to errors, hindering operational efficiency.",
      process: "Engineered an AI-powered school management system. Designed AI-driven result processing algorithms using Node.js and integrated analytics with MongoDB.",
      delight: "Transformed educational operations by reducing manual result processing workload by 70% and providing data-driven insights.",
      image: "/schoolwave.png",
      link: "https://schoolwave.ng/",
      tags: ["AI/ML", "React", "Node.js", "Analytics", "MongoDB"],
      accentColor: "accentGreen",
    },
    {
      id: 2,
      title: "TechHill LMS",
      distress: "Existing learning platforms lacked intuitive user experiences, hindering learner engagement.",
      process: "Built a modern Learning Management System using React.js and Next.js. Focused on delivering an intuitive frontend and optimizing database interactions for performance.",
      delight: "Enhanced educational experiences for 10,000+ learners through a significantly improved, user-friendly interface.",
      image: "/techill.png",
      link: "https://www.techill.ng/",
      tags: ["React.js", "Next.js", "Database Optimization", "Analytics"],
      accentColor: "accentRed",
    },
    {
      id: 3,
      title: "OKOH ERP System",
      distress: "The client required a streamlined system to manage complex enterprise resources efficiently.",
      process: "Developed a custom Enterprise Resource Planning (ERP) solution using .NET and React.js. Designed scalable backend logic with Node.js/Express.js and SQL.",
      delight: "Streamlined business operations by implementing a scalable backend, reducing processing delays by 20%.",
      image: "/okoh.png",
      link: "https://www.okohinternational.com/",
      tags: [".NET", "React.js", "SQL", "Node.js", "Express.js"],
      accentColor: "mutedGold",
    },
    {
      id: 4,
      title: "Traders Bloc",
      distress: "Financial institutions faced inefficiencies and security risks in traditional lending processes.",
      process: "Developed a secure lending platform using Node.js and React. Implemented role-based access controls and integrated secure payment gateways, ensuring 100% data security compliance.",
      delight: "Revolutionized financial transactions with a secure and efficient platform, streamlining the lending process.",
      image: "/traders.png",
      link: "https://traders-bloc-backend.vercel.app/",
      tags: ["Node.js", "React", "Express", "Payment Integration", "RESTful API"],
      accentColor: "accentBlue",
    },
    
   
    
  ]

  const experience = [
    {
      date: "2021 — Present",
      title: "Full Stack Developer",
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
      <motion.div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(191, 161, 129, 0.08), transparent 80%)`,
        }}
      />
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
                  Full Stack Developer
                </h2>
                
                <p className="text-[#D4C5B0] mt-4 text-sm md:text-base max-w-xs">
                  I build accessible, pixel-perfect digital experiences for the web.
                </p>
              </div>
              
              <nav className="hidden md:flex flex-col space-y-3 mb-8">
                {[
                  { id: "about", label: "About" },
                  { id: "experience", label: "Experience" },
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
                    <motion.div
                      className="h-0.5 bg-[#BFA181] absolute left-[-20px] md:left-[-32px]"
                          initial={{ width: 0 }}
                      animate={{
                        width: activeSection === item.id ? 16 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                        />
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
                    Driven by a passion for transforming initial distress into user delight, I specialize in crafting accessible, pixel-perfect digital experiences. My expertise lies in translating complex problems into elegant full-stack applications and intuitive user interfaces, ensuring both aesthetic appeal and robust, high-performance engineering.
                  </p>
                  
                  <p>
                    As a <span className="text-[#BFA181]">Full Stack Developer</span>, I focus on building end-to-end solutions that solve real-world problems. From conceptualizing ideas to delivering polished products, I excel at creating and maintaining the components that power modern web applications. My commitment extends to rigorous adherence to web accessibility standards and best practices, ensuring every user enjoys an inclusive and seamless experience.
                  </p>
                  
                  <p>
                    Throughout my career, I've honed my skills in diverse environments—from dynamic <span className="text-[#BFA181]">start-ups</span> and <span className="text-[#BFA181]">digital product studios</span> to established <span className="text-[#BFA181]">advertising agencies</span> and <span className="text-[#BFA181]">large corporations</span>—consistently turning innovative ideas into tangible, impactful products.
                  </p>
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
              
              <section id="projects" ref={sectionRefs.projects} className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">Projects</h3>
                <div className="max-w-xl space-y-12">
                  {projects.slice(0, 5).map((project) => (
                    <div 
                      key={project.id}
                      className="group p-4 rounded-lg transition-all duration-300 hover:bg-[#BFA181]/10 hover:shadow-xl hover:backdrop-blur-sm overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start mb-4">
                        <div className="sm:col-span-1">
                          <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden border border-[#BFA181]/20 shadow-md">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <h3 className="flex items-center text-base font-semibold text-[#F4F4F4] mb-2">
                            <Link href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-[#BFA181] transition-colors">
                              <span>{project.title}</span>
                              <ArrowUpRight className="inline-block h-4 w-4 ml-1.5 text-[#BFA181] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                            </Link>
                          </h3>
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

              <section id="contact" ref={sectionRefs.contact} className="mb-16 md:mb-24 scroll-mt-20 md:scroll-mt-24">
                <h3 className="text-sm uppercase tracking-wider text-[#BFA181] mb-4 font-medium">Contact</h3>
                <div className="max-w-xl">
                  <p className="mb-4 text-[#D4C5B0] text-sm">
                    I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
                  </p>
                  
                  <div className="bg-[#1C1C1C]/80 backdrop-blur-md rounded-lg p-5 border border-[#BFA181]/20 shadow-lg">
                    <ContactForm />
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
                      © 2023 Ajibola Bamidele Agim
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


"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, X, Github, Linkedin, Twitter, Mail, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

function VerticalProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  const projects = [
    {
      id: 1,
      title: "Traders Bloc",
      description: "A secure lending platform revolutionizing financial transactions.",
      image: "/traders.png",
      tags: ["Node.js", "React", "Express", "Payment Integration", "RESTful API"],
      details: [
        "Implemented role-based access controls, ensuring 100% data security compliance.",
        "Streamlined payment workflows, reducing transaction processing time by 35%.",
        "Engineered secure backend infrastructure with Node.js and Express.",
      ],
      accentColor: "accentBlue",
    },
    {
      id: 2,
      title: "SchoolWave",
      description: "AI-powered school management system transforming educational operations.",
      image: "/schoolwave.png",
      tags: ["AI/ML", "React", "Node.js", "Analytics", "MongoDB"],
      details: [
        "Designed AI-driven result processing algorithms, reducing manual workload by 70%.",
        "Built interactive dashboards for administrators, increasing decision-making efficiency.",
        "Integrated machine learning models to track student performance with 90% accuracy.",
      ],
      accentColor: "accentGreen",
    },
    {
      id: 3,
      title: "TechHill LMS",
      description: "A modern learning management system enhancing educational experiences.",
      image: "/techill.png",
      tags: ["React.js", "Next.js", "Database Optimization", "Analytics"],
      details: [
        "Delivered an intuitive React.js front end, improving user experience for 10,000+ learners.",
        "Optimized server-side rendering with Next.js, cutting load times by 50%.",
        "Integrated analytics tools to track user engagement and performance metrics.",
      ],
      accentColor: "accentRed",
    },
    {
      id: 4,
      title: "OKOH ERP System",
      description: "Custom enterprise resource planning solution for streamlined operations.",
      image: "/okoh.png",
      tags: [".NET", "React.js", "SQL", "Node.js", "Express.js"],
      details: [
        "Designed scalable backend logic, reducing processing delays by 20%.",
        "Improved workflow automation, saving 10+ hours/week for administrative staff.",
        "Built a scalable backend with Node.js and Express.js, handling 10,000+ daily transactions.",
      ],
      accentColor: "mutedGold",
    },
  ]

  // Track scroll progress for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      // Calculate which project is most visible
      const windowHeight = window.innerHeight
      let maxVisibleIndex = 0
      let maxVisibleArea = 0

      projectRefs.current.forEach((projectRef, index) => {
        if (!projectRef) return

        const rect = projectRef.getBoundingClientRect()
        const visibleTop = Math.max(0, rect.top)
        const visibleBottom = Math.min(windowHeight, rect.bottom)
        const visibleArea = Math.max(0, visibleBottom - visibleTop)

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea
          maxVisibleIndex = index
        }
      })

      if (maxVisibleIndex !== activeIndex) {
        setActiveIndex(maxVisibleIndex)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeIndex])

  const scrollToProject = (index: number) => {
    projectRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }



  // Helper function to get background color class based on accent color name
  const getAccentBg = (colorName: string, opacity = 5) => {
    switch (colorName) {
      case "accentBlue":
        return `bg-[#AD8D6F]/${opacity}` // Replace blue with secondary gold
      case "accentGreen":
        return `bg-[#BFA181]/${opacity}` // Replace green with primary gold
      case "accentRed":
        return `bg-[#D4C5B0]/${opacity}` // Replace red with muted beige
      default:
        return `bg-[#BFA181]/${opacity}` // Default to primary gold
    }
  }

  // Helper function to get border color class
  const getAccentBorder = (colorName: string, opacity = 30) => {
    switch (colorName) {
      case "accentBlue":
        return `border-[#AD8D6F]/${opacity}` // Replace blue with secondary gold
      case "accentGreen":
        return `border-[#BFA181]/${opacity}` // Replace green with primary gold
      case "accentRed":
        return `border-[#D4C5B0]/${opacity}` // Replace red with muted beige
      default:
        return `border-[#BFA181]/${opacity}` // Default to primary gold
    }
  }

  // Helper function to get text color class
  const getAccentTextClass = (colorName: string) => {
    switch (colorName) {
      case "accentBlue":
        return "text-[#AD8D6F]" // Replace blue with secondary gold
      case "accentGreen":
        return "text-[#BFA181]" // Replace green with primary gold
      case "accentRed":
        return "text-[#D4C5B0]" // Replace red with muted beige
      default:
        return "text-[#BFA181]" // Default to primary gold
    }
  }

  return (
    <div className="relative flex flex-col lg:flex-row">
      {/* Fixed Description Panel */}
      <div className="sticky top-20 lg:top-28 z-10 mb-8 w-full lg:w-1/2 lg:pr-8 h-fit max-h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.5
            }}
            className="bg-[#1C1C1C]/90 backdrop-blur-md rounded-xl md:rounded-2xl p-5 md:p-6 border border-[#BFA181]/20 shadow-lg"
          >
            <div className="mb-3">
              {projects[activeIndex].tags.map((tag, index) => (
                <span
                  key={index}
                  className={`inline-block text-xs rounded-full px-2 py-1 mr-2 mb-2 ${
                    getAccentBg(projects[activeIndex].accentColor, 20)
                  } ${getAccentTextClass(projects[activeIndex].accentColor)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#F4F4F4] tracking-tight">{projects[activeIndex].title}</h3>
            
            <p className="text-[#D4C5B0] mb-5">{projects[activeIndex].description}</p>
            
            <div className="space-y-2 md:space-y-3">
              {projects[activeIndex].details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start space-x-3"
                >
                  <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${getAccentBg(projects[activeIndex].accentColor, 100)}`}></div>
                  <p className="text-sm md:text-base text-[#F4F4F4]/90">{detail}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 md:mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#BFA181" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`px-4 py-2 rounded-full text-sm border ${getAccentBorder(projects[activeIndex].accentColor, 50)} ${getAccentTextClass(projects[activeIndex].accentColor)} hover:bg-[#BFA181] hover:text-[#1C1C1C] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:ring-offset-2 focus:ring-offset-[#1C1C1C]`}
              >
                View Project
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex justify-between mt-6">
          <motion.button
            className={`p-2 md:p-3 rounded-full border border-[#BFA181]/20 ${
              activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#BFA181]/10 hover:border-[#BFA181]/50"
            }`}
            whileHover={activeIndex !== 0 ? { y: -2, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" } : {}}
            onClick={() => activeIndex > 0 && scrollToProject(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous project"
          >
            <ChevronUp className="text-[#BFA181]" size={18} />
          </motion.button>

          <div className="flex space-x-2">
            {projects.map((project, index) => {
              // Get the appropriate background color class based on the project's accent color
              const bgColorClass =
                project.accentColor === "accentBlue"
                  ? "bg-accentBlue"
                  : project.accentColor === "accentGreen"
                    ? "bg-accentGreen"
                    : project.accentColor === "accentRed"
                      ? "bg-accentRed"
                      : "bg-mutedGold"

              const bgColorClassInactive =
                project.accentColor === "accentBlue"
                  ? "bg-accentBlue/30 hover:bg-accentBlue/50"
                  : project.accentColor === "accentGreen"
                    ? "bg-accentGreen/30 hover:bg-accentGreen/50"
                    : project.accentColor === "accentRed"
                      ? "bg-accentRed/30 hover:bg-accentRed/50"
                      : "bg-mutedGold/30 hover:bg-mutedGold/50"

              return (
                <motion.button
                  key={index}
                  onClick={() => scrollToProject(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? `${bgColorClass} w-5 md:w-6` : bgColorClassInactive
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View project ${index + 1}`}
                />
              )
            })}
          </div>

          <motion.button
            className={`p-2 md:p-3 rounded-full border border-[#BFA181]/20 ${
              activeIndex === projects.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#BFA181]/10 hover:border-[#BFA181]/50"
            }`}
            whileHover={activeIndex !== projects.length - 1 ? { y: 2, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" } : {}}
            onClick={() => activeIndex < projects.length - 1 && scrollToProject(activeIndex + 1)}
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
          >
            <ChevronDown className="text-[#BFA181]" size={18} />
          </motion.button>
        </div>
      </div>

      {/* Scrollable Projects with Parallax */}
      <div ref={containerRef} className="w-full lg:w-1/2 lg:ml-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el: HTMLDivElement | null) => {
              projectRefs.current[index] = el
              return undefined
            }}
            className="min-h-[60vh] md:min-h-[85vh] mb-16 md:mb-32 flex items-center relative"
          >
            <motion.div
              className="project-card bg-[#1C1C1C] rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-[#BFA181]/20 group w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateX: index % 2 === 0 ? [-2, 0] : [2, 0],
                rotateY: index % 2 === 0 ? [2, 0] : [-2, 0]
              }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.8
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Background gradient specific to project accent color */}
              <motion.div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${getAccentBg(project.accentColor, 5)}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: activeIndex === index ? 0.2 : 0 }}
                transition={{ duration: 1 }}
              />
              
              <div
                className={`p-2 md:p-4 transition-colors duration-500 ${getAccentBg(project.accentColor, activeIndex === index ? 8 : 5)} group-hover:${getAccentBg(project.accentColor, 10)}`}
              >
                <motion.div 
                  className="rounded-lg overflow-hidden border border-[#BFA181]/20 h-[200px] sm:h-[300px] md:h-[400px] relative"
                  style={{
                    // Parallax effect on image
                    y: activeIndex === index ? 0 : `calc(${(index - activeIndex) * 20}px)`
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 30 }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="project-image object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 md:p-6 transition-opacity duration-500"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-white text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/80 text-sm md:text-base line-clamp-2">{project.description}</p>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span 
                            key={i} 
                            className={`text-xs px-2 py-1 rounded-full ${getAccentBg(project.accentColor, 40)} text-white/90`}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white/90">
                            +{project.tags.length - 3}
                          </span>
                        )}
                  </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                </div>
              
              {/* Animated accent line */}
              <motion.div 
                className={`h-1 ${getAccentBg(project.accentColor, 100)} transition-all duration-700 ease-in-out`}
                initial={{ width: "0%" }}
                whileInView={{ width: activeIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </motion.div>
            
            {/* Floating project number */}
            <motion.div
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: activeIndex === index ? 1 : 0.3, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className={`text-6xl md:text-8xl font-bold ${
                activeIndex === index ? getAccentTextClass(project.accentColor) : 'text-[#BFA181]/20'
              } opacity-60`}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator - hide on smaller screens */}
      <motion.div
        className="hidden lg:flex flex-col items-center absolute left-1/2 bottom-0 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-warmBeige text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="accent-pulse"
        >
          <ChevronDown className="text-[#BFA181]" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-[#F4F4F4]">
      {/* Navigation */}
      <motion.header
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-4"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-2xl text-[#BFA181]">ALPHAWGA</span>
              </Link>
            </motion.div>

            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <motion.div
                className="relative"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-[#1C1C1C]/40 backdrop-blur-md rounded-full border border-[#BFA181]/20"></div>
                <nav className="relative flex items-center px-6 py-2.5 rounded-full">
                  {["Home", "Work", "About", "Blog", "More"].map((item) => (
                    <motion.div
                      key={item}
                      className="relative px-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className={`${isMenuOpen ? 'text-[#F4F4F4] hover:text-[#BFA181]' : 'text-[#D4C5B0] hover:text-[#F4F4F4]'} transition-colors relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA181] focus-visible:ring-offset-2 focus-visible:rounded-sm`}
                      >
                        {item}
                        <motion.span
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BFA181] group-hover:w-full transition-all duration-300"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden relative z-20 p-2 rounded-md overflow-hidden group"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-[#1C1C1C]/40 backdrop-blur-md border border-[#BFA181]/20 rounded-md"></div>
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X size={24} className="text-[#BFA181]" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-[#1C1C1C]/95 flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-end p-4">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} className="text-[#BFA181]" />
              </motion.button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              {["Home", "Work", "About", "Contact"].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl font-medium text-[#F4F4F4] hover:text-[#BFA181] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Menu Popover */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <motion.div
              className="relative w-full max-w-lg max-h-[85vh] overflow-hidden rounded-xl bg-[#1C1C1C]/95 border border-[#BFA181]/20 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Bar */}
              <div className="flex items-center border-b border-[#BFA181]/20 p-4">
                <div className="mr-2 text-[#BFA181]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-transparent border-none outline-none text-[#F4F4F4] placeholder-[#D4C5B0]/50"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#D4C5B0] hover:text-[#F4F4F4] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Section */}
              <div className="p-2 overflow-y-auto max-h-[60vh]">
                <div className="px-3 py-2 text-sm text-[#D4C5B0]">Navigation</div>

                {[
                  {
                    title: "Home",
                    icon: (
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#BFA181] text-[#1C1C1C]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </div>
                    ),
                    description: "Welcome to my forever work-in-progress!",
                  },
                  {
                    title: "Projects",
                    icon: (
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#BFA181]/30 text-[#D4C5B0]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                      </div>
                    ),
                    description: "Showcase of my projects",
                  },
                  {
                    title: "Blog",
                    icon: (
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#BFA181]/30 text-[#D4C5B0]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                      </div>
                    ),
                    description: "Thoughts, mental models, and tutorials",
                  },
                  {
                    title: "Guestbook",
                    icon: (
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#BFA181]/30 text-[#D4C5B0]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16z"></path>
                        </svg>
                      </div>
                    ),
                    description: "Leave a message for me",
                  },
                  {
                    title: "Links",
                    icon: (
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#BFA181]/30 text-[#D4C5B0]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </div>
                    ),
                    description: "All my links are here",
                  },
                  {
                    title: "About",
                    icon: (
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1C1C1C] border border-[#BFA181]/30 text-[#D4C5B0]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <circle cx="12" cy="10" r="3"></circle>
                          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                        </svg>
                      </div>
                    ),
                    description: "Learn more about me",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={`#${item.title.toLowerCase()}`}
                    className={`${isMenuOpen ? 'text-[#F4F4F4] hover:text-[#BFA181]' : 'text-[#1C1C1C]/70 hover:text-[#1C1C1C]'} transition-colors relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BFA181] focus-visible:ring-offset-2 focus-visible:rounded-sm`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <div>
                      <div className="font-medium text-[#F4F4F4]">{item.title}</div>
                      <div className="text-sm text-[#D4C5B0]">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#BFA181]/20 p-4">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <Link href="https://linkedin.com" className="text-[#D4C5B0] hover:text-[#F4F4F4] transition-colors">
                      <Linkedin size={18} />
                    </Link>
                    <Link href="https://github.com" className="text-[#D4C5B0] hover:text-[#F4F4F4] transition-colors">
                      <Github size={18} />
                    </Link>
                    <Link href="https://twitter.com" className="text-[#D4C5B0] hover:text-[#F4F4F4] transition-colors">
                      <Twitter size={18} />
                    </Link>
                  </div>
                  <div className="text-xs text-[#D4C5B0] flex items-center gap-2">
                    <span className="flex items-center">
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
                        className="mr-1"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                      </svg>
                      to navigate
                    </span>
                    <span>|</span>
                    <span className="flex items-center">
                      Press <span className="mx-1 px-1.5 py-0.5 rounded bg-[#BFA181]/20 text-[#F4F4F4]">⌘</span> to open
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-40 md:pb-32 relative overflow-hidden section-divider">
        <div className="absolute inset-0 bg-gradient-to-b from-[#BFA181]/5 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div
              className="inline-flex items-center bg-[#1C1C1C]/80 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 border border-[#BFA181]/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-[#BFA181] text-[#1C1C1C] text-xs font-medium px-2 py-0.5 md:px-2.5 md:py-1 rounded-full mr-2">Open</span>
              <span className="text-xs md:text-sm text-[#D4C5B0]">Available for new opportunities</span>
              <ArrowRight size={14} className="ml-1 md:ml-2 text-[#BFA181]" />
            </motion.div>

            <motion.h1
              className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 max-w-4xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I transform complex <span className="italic text-[#BFA181]">technical challenges</span> into{" "}
              <span className="italic text-[#BFA181]">impactful solutions</span>
            </motion.h1>

            <motion.div
              className="flex items-center space-x-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#BFA181]/20 blur-md"></div>
                <Image
                  src="/smertz.png"
                  alt="Profile"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-[#BFA181] relative z-10"
                />
              </div>
              <div className="text-left">
                <p className="text-lg md:text-xl text-[#F4F4F4]">Hello, I&apos;m Ajibola Bamidele Agim</p>
                <p className="text-[#D4C5B0]">Multidisciplinary Full Stack Developer</p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Link href="#contact" className="primary-button flex items-center justify-center w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:ring-offset-2 focus:ring-offset-[#1C1C1C]">
                  Let&apos;s Connect <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="mailto:Bamidele.ajibola.alpha@gmail.com"
                  className="bg-[#1C1C1C] text-[#D4C5B0] px-4 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#1C1C1C]/80 border border-[#BFA181]/30 hover:border-[#BFA181] transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:-translate-y-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:ring-offset-2 focus:ring-offset-[#1C1C1C]"
                >
                  <Mail size={16} className="mr-2" /> Contact Me
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/AJIBOLA BAMIDELE AGIM CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1C1C1C] text-[#D4C5B0] px-4 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#1C1C1C]/80 border border-[#BFA181]/30 hover:border-[#BFA181] transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:shadow-[0_5px_15px_rgba(191,161,129,0.2)] hover:-translate-y-1 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:ring-offset-2 focus:ring-offset-[#1C1C1C]"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="mr-2 text-[#BFA181]"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="m9 15 3 3 3-3" />
                  </svg>
                  Download CV
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="relative mt-20 mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1C1C] z-10"></div>
            <div className="h-[300px] md:h-[400px] bg-gradient-to-r from-[#BFA181]/20 to-[#D4C5B0]/20 rounded-3xl overflow-hidden relative border border-[#BFA181]/20">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute w-full h-full bg-[url('/smertz.png')] bg-cover bg-center"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="gradient-divider"></div>

      {/* Featured Work Section */}
      <section id="work" className="py-20 bg-[#1C1C1C] section-divider">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#BFA181] uppercase tracking-wider mb-2">FEATURED CASE STUDIES</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Curated <span className="text-[#BFA181]">work</span>
            </h2>
          </motion.div>

          <VerticalProjectCarousel />
        </div>
      </section>

      <div className="h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-[#BFA181]/30 to-transparent"></div>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-12 md:py-20 bg-[#1C1C1C]/50 section-divider">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-10 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#BFA181] uppercase tracking-wider mb-2 text-sm md:text-base">I CONSTANTLY TRY TO IMPROVE</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#F4F4F4]">My Tech Stack</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 max-w-4xl mx-auto">
            {[
              { name: "JavaScript", color: "bg-[#1C1C1C]", accent: "border-[#BFA181]" },
              { name: "React.js", color: "bg-[#1C1C1C]", accent: "border-[#BFA181]" },
              { name: "Next.js", color: "bg-[#1C1C1C]", accent: "border-[#BFA181]" },
              { name: "Node.js", color: "bg-[#1C1C1C]", accent: "border-[#BFA181]" },
              { name: "Python", color: "bg-[#1C1C1C]", accent: "border-[#AD8D6F]" },
              { name: "Django", color: "bg-[#1C1C1C]", accent: "border-[#AD8D6F]" },
              { name: "Ruby", color: "bg-[#1C1C1C]", accent: "border-[#AD8D6F]" },
              { name: "PostgreSQL", color: "bg-[#1C1C1C]", accent: "border-[#BFA181]" },
              { name: "MongoDB", color: "bg-[#1C1C1C]", accent: "border-[#BFA181]" },
              { name: "AWS", color: "bg-[#1C1C1C]", accent: "border-[#D4C5B0]" },
              { name: "Docker", color: "bg-[#1C1C1C]", accent: "border-[#D4C5B0]" },
              { name: "CI/CD", color: "bg-[#1C1C1C]", accent: "border-[#D4C5B0]" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                className={`${tech.color} text-[#D4C5B0] rounded-xl py-2 px-3 md:py-3 md:px-4 flex items-center justify-center text-center border ${tech.accent} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:text-[#F4F4F4] group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs md:text-sm font-medium relative">
                  {tech.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${tech.accent.replace("border-", "bg-")} group-hover:w-full transition-all duration-300`}
                  ></span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-accentBlue/30 to-transparent"></div>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-[#1C1C1C] section-divider">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#BFA181] uppercase tracking-wider mb-2 text-sm md:text-base">MORE ABOUT ME</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#F4F4F4] leading-tight">
                Full-Stack Developer with <br className="hidden md:block" />
                <span className="text-[#BFA181] italic">7+ years of expertise</span>
              </h2>

              <div className="space-y-4 md:space-y-6 text-[#D4C5B0] text-sm md:text-base">
                <p>
                  Results-oriented Full Stack Developer with 7+ years of experience delivering scalable, secure, and innovative 
                  solutions across web, SaaS, and enterprise domains. Adept at bridging technical and business needs, with a proven 
                  track record in AI-powered systems, cloud architectures, and collaborative global teams.
                </p>
                <p>
                  I specialize in building end-to-end solutions with modern frameworks, deploying machine learning models for 
                  SaaS and enterprise tools, and developing cloud-native applications with a focus on performance optimization 
                  and data security.
                </p>
                <p className="font-medium text-[#F4F4F4]">
                  Passionate about driving economic empowerment through impactful technology.
                </p>
              </div>

              <div className="flex space-x-4 mt-6 md:mt-8">
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="https://github.com/Alphawga"
                    target="_blank"
                    className="text-[#BFA181] hover:text-[#F4F4F4] transition-colors"
                  >
                    <Github size={22} />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link
                    href="https://linkedin.com/in/bamidele-ajibola-9b7913178"
                    target="_blank"
                    className="text-[#BFA181] hover:text-[#F4F4F4] transition-colors"
                  >
                    <Linkedin size={22} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative hidden sm:block"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute -inset-4 bg-[#BFA181]/10 rounded-full blur-3xl"></div>
              <div className="relative bg-[#1C1C1C] rounded-3xl overflow-hidden aspect-square border border-[#BFA181]/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <Image
                  src="/smertz.png"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-accentGreen/30 to-transparent"></div>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#1C1C1C] to-[#1C1C1C]/90 text-[#F4F4F4] section-divider">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
              TRANSFORMING <span className="text-[#BFA181]">IDEAS</span>
              <br />
              INTO <span className="text-[#BFA181]">IMPACTFUL TECHNOLOGY</span>
            </h2>

            <div className="relative inline-block mt-6 md:mt-8 mb-10 md:mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="#contact" className="primary-button inline-flex items-center text-sm md:text-base py-2.5 md:py-3.5 px-5 md:px-7">
                  Get In Touch <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
              <motion.div
                className="absolute -right-8 md:-right-12 -top-8 md:-top-12 hidden sm:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="relative w-16 md:w-24 h-16 md:h-24">
                  <div className="absolute inset-0 rounded-full border-2 border-[#BFA181] flex items-center justify-center">
                    <div className="w-12 md:w-20 h-12 md:h-20 rounded-full border-2 border-[#BFA181] flex items-center justify-center">
                      <div className="text-[10px] md:text-xs text-center leading-tight text-[#D4C5B0]">
                        <div>OPEN</div>
                        <div>TO</div>
                        <div>WORK</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <p className="text-lg md:text-xl mb-3 md:mb-4 text-[#F4F4F4]">I&apos;m available for full-time roles & consultant opportunities.</p>
            <p className="text-[#BFA181] text-sm md:text-base">
              I specialize in scalable web applications, AI integration, and cloud architecture.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-accentRed/30 to-transparent"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1C1C1C]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <p className="text-[#BFA181] uppercase tracking-wider mb-2">GET IN TOUCH</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#F4F4F4]">Let&apos;s Work Together</h2>
            </div>

            <div className="contact-form bg-[#1C1C1C]/80 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-8 border border-[#BFA181]/20 shadow-lg">
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#D4C5B0] mb-1 md:mb-2 text-sm md:text-base">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-[#1C1C1C] border border-[#BFA181]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-transparent text-[#F4F4F4] text-sm md:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#D4C5B0] mb-1 md:mb-2 text-sm md:text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-[#1C1C1C] border border-[#BFA181]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-transparent text-[#F4F4F4] text-sm md:text-base"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[#D4C5B0] mb-1 md:mb-2 text-sm md:text-base">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-[#1C1C1C] border border-[#BFA181]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-transparent text-[#F4F4F4] text-sm md:text-base"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#D4C5B0] mb-1 md:mb-2 text-sm md:text-base">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-[#1C1C1C] border border-[#BFA181]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BFA181] focus:border-transparent text-[#F4F4F4] text-sm md:text-base"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <button type="submit" className="w-full primary-button py-2 md:py-3 px-4 md:px-6 rounded-lg text-sm md:text-base">
                    Send Message
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-[#1C1C1C]/90 border-t border-[#BFA181]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <Link href="/" className="font-bold text-lg md:text-xl text-[#BFA181]">
                Ajibola Bamidele Agim
              </Link>
            </div>

            <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
              <div>
                <h3 className="font-bold mb-1 md:mb-2 text-[#F4F4F4]">Location</h3>
                <p className="text-[#D4C5B0] text-sm">Lagos, Nigeria</p>
              </div>

              <div>
                <h3 className="font-bold mb-1 md:mb-2 text-[#F4F4F4]">Portfolio</h3>
                <Link href="https://portfolio-rho-gold-26.vercel.app/" target="_blank" className="text-[#D4C5B0] hover:text-[#F4F4F4] transition-colors text-sm">
                  portfolio-rho-gold-26.vercel.app
                    </Link>
              </div>

              <div>
                <h3 className="font-bold mb-1 md:mb-2 text-[#F4F4F4]">Contact</h3>
                <p className="text-[#D4C5B0] text-sm break-all">Bamidele.ajibola.alpha@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


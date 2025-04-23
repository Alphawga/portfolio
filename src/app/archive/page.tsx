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
      title: "PrecisionGrammar",
      description: "Elevate Your Content. Achieve Excellence. Professional, Accurate, and Reliable Document Reviews.",
      image: "/placeholder.svg",
      link: "https://precisiongrammar.com",
      tags: ["Document Review", "Content Editing", "Proofreading", "Professional Writing"],
      details: "Professional, Accurate, and Reliable Document Reviews Tailored to Your Needs. Our service helps writers and professionals elevate their content with expert grammatical review and content improvement suggestions.",
      accentColor: "blue"
    },
    {
      id: 2,
      title: "EasyMultiLingo",
      description: "Streamline your workflow, ensure accuracy, and collaborate seamlessly using our advanced review platform.",
      image: "/placeholder.svg",
      link: "https://easymultilingo.com",
      tags: ["Multilingual", "Document Review", "Collaboration", "Workflow"],
      details: "Elevate Your Document Review Process with EasyMultiLingo. Save time, boost productivity, and achieve professional results—all in one place. Our platform specializes in multilingual document review and collaboration.",
      accentColor: "green"
    },
    {
      id: 3,
      title: "PrecisionKeywords",
      description: "Tailor-made SEO strategies to increase market potential and achieve competitive search rankings.",
      image: "/placeholder.svg",
      link: "https://precisionkeywords.com",
      tags: ["SEO", "Digital Marketing", "Keyword Strategy", "Website Growth"],
      details: "Accelerate your digital success with our tailor-made SEO strategies. Increase your market potential, achieve competitive search rankings, and fuel website growth—fast. Our approach focuses on targeted keyword optimization for maximum impact.",
      accentColor: "amber"
    },
    {
      id: 4,
      title: "EatCleanFit",
      description: "Fuel Your Body with Delicious, Healthy Meals that Prevent Disease and Promote Well-being.",
      image: "/placeholder.svg", 
      link: "https://eatcleanfit.com",
      tags: ["Nutrition", "Meal Planning", "Health", "Wellness"],
      details: "Explore our collection of tasty pasta options, carefully designed to simplify your meal planning, promote your well-being, and keep every bite satisfying. Our focus is on clean eating for optimal fitness and health outcomes.",
      accentColor: "red"
    },
    {
      id: 5,
      title: "CopyImpactHub",
      description: "Transform Your Brand With Copy That Inspires Action and Drives Growth.",
      image: "/placeholder.svg",
      link: "https://copyimpacthub.com",
      tags: ["Copywriting", "Content Marketing", "SEO Content", "Brand Development"],
      details: "At CopyImpactHub, we deliver polished, SEO-optimized content designed to engage, rank, and grow. Our team specializes in creating compelling copy that resonates with audiences and inspires them to take action.",
      accentColor: "purple"
    },
    {
      id: 6,
      title: "FitNutritionGuide",
      description: "Complete nutrition services with fastest delivery and easy pickup options.",
      image: "/placeholder.svg",
      link: "https://fitnutritionguide.com",
      tags: ["Nutrition", "Food Delivery", "Meal Planning", "Health"],
      details: "Comprehensive nutrition guide with convenient food delivery service. Our platform combines expert nutrition advice with practical meal options that can be quickly delivered or easily picked up, making healthy eating accessible.",
      accentColor: "teal"
    },
    {
      id: 7,
      title: "DissertCoach",
      description: "Expert Document Review & Analysis Services for Academic Excellence.",
      image: "/placeholder.svg",
      link: "https://dissertcoach.com",
      tags: ["Academic", "Document Review", "Analysis", "Research"],
      details: "Fast, accurate, and multilingual document review solutions tailored specifically for your academic needs. Our service specializes in dissertation review, research paper analysis, and academic document enhancement.",
      accentColor: "sky"
    },
    {
      id: 8,
      title: "AIQuickTag",
      description: "Intelligent AI Tagging for Superior Content Management and Organization.",
      image: "/placeholder.svg",
      link: "https://aiquicktag.com",
      tags: ["AI", "Content Management", "Tagging", "Automation"],
      details: "Boost productivity, simplify content organization, and enhance searchability through powerful AI-generated tags. Our platform uses advanced artificial intelligence to automatically categorize and tag content for improved management.",
      accentColor: "green"
    },
    {
      id: 9,
      title: "SnackToFit",
      description: "Healthy snack options designed for active lifestyles and fitness enthusiasts.",
      image: "/placeholder.svg",
      link: "https://snacktofit.com",
      tags: ["Nutrition", "Snacks", "Fitness", "Health"],
      details: "Carefully crafted healthy snack options that support your fitness goals and active lifestyle. Our products balance nutrition and taste, providing convenient energy boosting options for busy professionals and athletes.",
      accentColor: "violet"
    },
    {
      id: 10,
      title: "BeatzPal",
      description: "Music collaboration platform for artists, producers, and audio professionals.",
      image: "/placeholder.svg",
      link: "https://beatzpal.com",
      tags: ["Music", "Collaboration", "Audio Production", "Artists"],
      details: "Digital platform enabling seamless collaboration between musicians, producers, and audio professionals. Share tracks, collaborate on projects, and connect with fellow artists in an integrated environment designed for creative expression.",
      accentColor: "orange"
    }
  ]

  // Client work projects
  const clientProjects = [
    {
      id: 101,
      title: "Grammar Correction API",
      client: "Education Technology Firm",
      description: "Advanced API for detecting and correcting grammatical errors in educational content.",
      tags: ["NLP", "API Development", "Education Tech", "Python"],
      year: "2023"
    },
    {
      id: 102,
      title: "Multilingual Document System",
      client: "International Publishing Company",
      description: "Robust system for managing multilingual document workflows and translations.",
      tags: ["React", "Node.js", "MongoDB", "i18n"],
      year: "2022"
    },
    {
      id: 103,
      title: "SEO Analytics Dashboard",
      client: "Digital Marketing Agency",
      description: "Comprehensive dashboard for tracking and optimizing SEO performance metrics.",
      tags: ["Vue.js", "D3.js", "API Integration", "Analytics"],
      year: "2021"
    },
    {
      id: 104,
      title: "Nutrition Planning Platform",
      client: "Health & Wellness Startup",
      description: "Interactive platform for personalized nutrition planning and meal recommendations.",
      tags: ["React", "Node.js", "PostgreSQL", "Machine Learning"],
      year: "2020"
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
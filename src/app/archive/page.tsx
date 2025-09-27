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
  const [isClient, setIsClient] = useState(false)

  // Featured projects (from landing page)
  const featuredProjects = [
    {
      id: 1,
      title: "SchoolWave",
      description: "Manual school management processes were time-consuming and prone to errors, hindering operational efficiency.",
      process: "Engineered an AI-powered school management system. Designed AI-driven result processing algorithms using Node.js and integrated analytics with MongoDB.",
      delight: "Transformed educational operations by reducing manual result processing workload by 70% and providing data-driven insights.",
      image: "/schoolwave.png",
      link: "https://schoolwave.ng/",
      tags: ["AI/ML", "React", "Node.js", "Analytics", "MongoDB"],
      accentColor: "accentGreen",
      isFeatured: true
    },
    {
      id: 2,
      title: "TechHill LMS",
      description: "Existing learning platforms lacked intuitive user experiences, hindering learner engagement.",
      process: "Built a modern Learning Management System using React.js and Next.js. Focused on delivering an intuitive frontend and optimizing database interactions for performance.",
      delight: "Enhanced educational experiences for 10,000+ learners through a significantly improved, user-friendly interface.",
      image: "/techill.png",
      link: "https://www.techill.ng/",
      tags: ["React.js", "Next.js", "Database Optimization", "Analytics"],
      accentColor: "accentRed",
      isFeatured: true
    },
    {
      id: 3,
      title: "OKOH ERP System",
      description: "The client required a streamlined system to manage complex enterprise resources efficiently.",
      process: "Developed a custom Enterprise Resource Planning (ERP) solution using .NET and React.js. Designed scalable backend logic with Node.js/Express.js and SQL.",
      delight: "Streamlined business operations by implementing a scalable backend, reducing processing delays by 20%.",
      image: "/okoh.png",
      link: "https://www.okohinternational.com/",
      tags: [".NET", "React.js", "SQL", "Node.js", "Express.js"],
      accentColor: "mutedGold",
      isFeatured: true
    },
    {
      id: 4,
      title: "Traders Bloc",
      description: "Financial institutions faced inefficiencies and security risks in traditional lending processes.",
      process: "Developed a secure lending platform using Node.js and React. Implemented role-based access controls and integrated secure payment gateways, ensuring 100% data security compliance.",
      delight: "Revolutionized financial transactions with a secure and efficient platform, streamlining the lending process.",
      image: "/traders.png",
      link: "https://traders-bloc-backend.vercel.app/",
      tags: ["Node.js", "React", "Express", "Payment Integration", "RESTful API"],
      accentColor: "accentBlue",
      isFeatured: true
    }
  ]

  // Additional projects
  const additionalProjects = [
    {
      id: 101,
      title: "PrecisionGrammar",
      description: "Elevate Your Content. Achieve Excellence. Professional, Accurate, and Reliable Document Reviews.",
      image: "/placeholder.svg",
      link: "https://precisiongrammar.com",
      tags: ["Document Review", "Content Editing", "Proofreading", "Professional Writing"],
      details: "Professional, Accurate, and Reliable Document Reviews Tailored to Your Needs. Our service helps writers and professionals elevate their content with expert grammatical review and content improvement suggestions.",
      accentColor: "blue"
    },
    {
      id: 102,
      title: "EasyMultiLingo",
      description: "Streamline your workflow, ensure accuracy, and collaborate seamlessly using our advanced review platform.",
      image: "/placeholder.svg",
      link: "https://easymultilingo.com",
      tags: ["Multilingual", "Document Review", "Collaboration", "Workflow"],
      details: "Elevate Your Document Review Process with EasyMultiLingo. Save time, boost productivity, and achieve professional results—all in one place. Our platform specializes in multilingual document review and collaboration.",
      accentColor: "green"
    },
    {
      id: 103,
      title: "PrecisionKeywords",
      description: "Tailor-made SEO strategies to increase market potential and achieve competitive search rankings.",
      image: "/placeholder.svg",
      link: "https://precisionkeywords.com",
      tags: ["SEO", "Digital Marketing", "Keyword Strategy", "Website Growth"],
      details: "Accelerate your digital success with our tailor-made SEO strategies. Increase your market potential, achieve competitive search rankings, and fuel website growth—fast. Our approach focuses on targeted keyword optimization for maximum impact.",
      accentColor: "amber"
    },
    {
      id: 104,
      title: "EatCleanFit",
      description: "Fuel Your Body with Delicious, Healthy Meals that Prevent Disease and Promote Well-being.",
      image: "/placeholder.svg",
      link: "https://eatcleanfit.com",
      tags: ["Nutrition", "Meal Planning", "Health", "Wellness"],
      details: "Explore our collection of tasty pasta options, carefully designed to simplify your meal planning, promote your well-being, and keep every bite satisfying. Our focus is on clean eating for optimal fitness and health outcomes.",
      accentColor: "red"
    },
    {
      id: 105,
      title: "CopyImpactHub",
      description: "Transform Your Brand With Copy That Inspires Action and Drives Growth.",
      image: "/placeholder.svg",
      link: "https://copyimpacthub.com",
      tags: ["Copywriting", "Content Marketing", "SEO Content", "Brand Development"],
      details: "At CopyImpactHub, we deliver polished, SEO-optimized content designed to engage, rank, and grow. Our team specializes in creating compelling copy that resonates with audiences and inspires them to take action.",
      accentColor: "purple"
    },
    {
      id: 106,
      title: "FitNutritionGuide",
      description: "Complete nutrition services with fastest delivery and easy pickup options.",
      image: "/placeholder.svg",
      link: "https://fitnutritionguide.com",
      tags: ["Nutrition", "Food Delivery", "Meal Planning", "Health"],
      details: "Comprehensive nutrition guide with convenient food delivery service. Our platform combines expert nutrition advice with practical meal options that can be quickly delivered or easily picked up, making healthy eating accessible.",
      accentColor: "teal"
    },
    {
      id: 107,
      title: "DissertCoach",
      description: "Expert Document Review & Analysis Services for Academic Excellence.",
      image: "/placeholder.svg",
      link: "https://dissertcoach.com",
      tags: ["Academic", "Document Review", "Analysis", "Research"],
      details: "Fast, accurate, and multilingual document review solutions tailored specifically for your academic needs. Our service specializes in dissertation review, research paper analysis, and academic document enhancement.",
      accentColor: "sky"
    },
    {
      id: 108,
      title: "AIQuickTag",
      description: "Intelligent AI Tagging for Superior Content Management and Organization.",
      image: "/placeholder.svg",
      link: "https://aiquicktag.com",
      tags: ["AI", "Content Management", "Tagging", "Automation"],
      details: "Boost productivity, simplify content organization, and enhance searchability through powerful AI-generated tags. Our platform uses advanced artificial intelligence to automatically categorize and tag content for improved management.",
      accentColor: "green"
    },
    {
      id: 109,
      title: "SnackToFit",
      description: "Healthy snack options designed for active lifestyles and fitness enthusiasts.",
      image: "/placeholder.svg",
      link: "https://snacktofit.com",
      tags: ["Nutrition", "Snacks", "Fitness", "Health"],
      details: "Carefully crafted healthy snack options that support your fitness goals and active lifestyle. Our products balance nutrition and taste, providing convenient energy boosting options for busy professionals and athletes.",
      accentColor: "violet"
    },
    {
      id: 110,
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
    // Set client-side flag
    setIsClient(true)

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

  // Combine all projects with featured first
  const allProjects = [...featuredProjects, ...additionalProjects]

  // Group projects into pairs for desktop view
  const projectPairs = []
  for (let i = 0; i < allProjects.length; i += 2) {
    if (i + 1 < allProjects.length) {
      projectPairs.push([allProjects[i], allProjects[i + 1]])
    } else {
      projectPairs.push([allProjects[i]])
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

            {/* Featured Projects Section */}
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Featured Projects</h2>

              <div className="space-y-16">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`group p-6 rounded-lg transition-all duration-300 hover:bg-[#BFA181]/10 hover:shadow-xl hover:backdrop-blur-sm overflow-hidden ${index % 2 === 0 ? 'border-l-4 border-l-[#BFA181]' : 'border-r-4 border-r-[#BFA181]'}`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
                      <div className="sm:col-span-1">
                        <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden border border-[#BFA181]/20 shadow-md">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="flex items-center gap-2 mb-3">
                          <h3 className="text-xl font-semibold text-[#F4F4F4]">
                            <Link href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-[#BFA181] transition-colors">
                              {project.title}
                              <ArrowUpRight className="inline-block h-4 w-4 ml-1.5 text-[#BFA181] transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                            </Link>
                          </h3>
                          <span className="px-2 py-1 text-xs bg-[#BFA181] text-[#1C1C1C] rounded-full font-medium">Featured</span>
                        </div>

                        <div className="space-y-4 text-sm text-[#D4C5B0]">
                          <div>
                            <h4 className="font-semibold text-[#BFA181]/90 text-xs uppercase tracking-wider mb-1">The Challenge</h4>
                            <p className="leading-relaxed">{project.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#BFA181]/90 text-xs uppercase tracking-wider mb-1">The Solution</h4>
                            <p className="leading-relaxed">{project.process}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#BFA181]/90 text-xs uppercase tracking-wider mb-1">The Impact</h4>
                            <p className="leading-relaxed">{project.delight}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 text-[10px] rounded-full bg-[#1C1C1C]/70 border border-[#BFA181]/30 text-[#D4C5B0]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Projects Grid */}
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-wider text-[#BFA181] mb-6 font-medium">Additional Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {additionalProjects.map((project) => (
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
                  © 2024 Ajibola Bamidele Agim
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
} 
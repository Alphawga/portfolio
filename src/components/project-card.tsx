"use client"

import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  details: string[]
  accentColor: string
}

interface ProjectCardProps {
  project: Project
  isActive: boolean
}

export default function ProjectCard({ project, isActive }: ProjectCardProps) {
  // Map accent color to actual Tailwind class




  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1C1C1C]/80 backdrop-blur-md rounded-2xl p-6 border border-[#BFA181]/20"
    >
      <h3 className="text-2xl font-bold mb-2 text-[#F4F4F4]">{project.title}</h3>
      <p className="text-[#D4C5B0] mb-4">{project.description}</p>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm border border-[#BFA181]/30 text-[#D4C5B0]`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {project.details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className={`w-1.5 h-1.5 rounded-full mt-2 bg-${project.accentColor}`} />
            <p className="text-[#D4C5B0]">{detail}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


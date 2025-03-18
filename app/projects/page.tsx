"use client"

import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Project } from "@/types"

const projects: Project[] = [
  {
    title: "Community Health Analytics Platform",
    description: "A data visualization platform that helps healthcare providers identify areas of need in underserved communities.",
    technologies: ["Python", "React", "D3.js", "PostgreSQL"],
    image: "/projects/health-analytics.jpg",
    github: "https://github.com/yourusername/health-analytics",
    demo: "https://health-analytics-demo.com",
  },
  {
    title: "Social Impact Assessment Tool",
    description: "An AI-powered tool that measures and predicts the social impact of community development projects.",
    technologies: ["Python", "TensorFlow", "FastAPI", "Vue.js"],
    image: "/projects/impact-assessment.jpg",
    github: "https://github.com/yourusername/impact-assessment",
    demo: "https://impact-assessment-demo.com",
  },
  {
    title: "Data Literacy Training Platform",
    description: "An interactive platform that teaches data literacy skills to non-profit organizations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    image: "/projects/data-literacy.jpg",
    github: "https://github.com/yourusername/data-literacy",
    demo: "https://data-literacy-demo.com",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 font-space-grotesk text-theme-text">Projects</h1>
        <p className="text-xl text-theme-text">Data Science & Social Impact Initiatives</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 font-space-grotesk text-theme-text">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


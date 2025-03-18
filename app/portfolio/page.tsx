"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    image: "/placeholder.svg?height=300&width=400",
    description: "A fully functional online store built with React and Node.js.",
  },
  {
    id: 2,
    title: "Weather App",
    image: "/placeholder.svg?height=300&width=400",
    description: "A responsive weather application using a third-party API.",
  },
  {
    id: 3,
    title: "Task Management System",
    image: "/placeholder.svg?height=300&width=400",
    description: "A full-stack task management application with user authentication.",
  },
]

export default function Portfolio() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 font-space-grotesk">Portfolio</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 font-space-grotesk">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


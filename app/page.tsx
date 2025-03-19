"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaChartBar, FaLightbulb, FaHandsHelping } from "react-icons/fa"

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative w-48 h-48 mx-auto mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-theme-primary via-theme-secondary to-theme-accent animate-gradient" />
          <div className="relative w-full h-full rounded-full border-4 border-white overflow-hidden">
            <Image
              src="/profile-placeholder.jpg"
              alt="Your Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <h1 className="text-5xl font-bold mb-6 font-space-grotesk text-theme-text">Ayo it me Vinh</h1>
        <p className="text-xl text-theme-text mb-8">Ethical Tech Bro</p>
        
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm passionate about leveraging data science to create positive social impact. With expertise in machine learning 
            and data analytics, I work on projects that address real-world challenges and contribute to community development. 
            My goal is to bridge the gap between technology and social good, making data-driven solutions accessible to those 
            who need them most.
          </p>
        </motion.div>

        <Link
          href="/projects"
          className="bg-theme-primary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          View My Projects
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            title: "Data Analysis",
            icon: FaChartBar,
            description: "Uncovering insights to drive social change",
            color: "text-theme-primary",
          },
          {
            title: "Social Impact",
            icon: FaHandsHelping,
            description: "Using data science to make a difference",
            color: "text-theme-secondary",
          },
          {
            title: "Innovation",
            icon: FaLightbulb,
            description: "Developing creative solutions for social good",
            color: "text-theme-accent",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2"
          >
            <item.icon className={`text-4xl ${item.color} mb-4`} />
            <h2 className="text-2xl font-semibold mb-4 font-space-grotesk text-theme-text">{item.title}</h2>
            <p className="text-theme-text">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}


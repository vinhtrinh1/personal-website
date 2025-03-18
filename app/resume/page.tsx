"use client"

import { motion } from "framer-motion"
import { Experience, Education } from "@/types"

const experience: Experience[] = [
  {
    title: "Senior Data Scientist",
    company: "Social Impact Analytics",
    period: "2020 - Present",
    description: "Leading data-driven initiatives to improve social service delivery and community outcomes.",
  },
  {
    title: "Data Analyst",
    company: "Community Development Institute",
    period: "2018 - 2020",
    description: "Developed predictive models for identifying at-risk populations and optimizing resource allocation.",
  },
]

const education: Education[] = [
  {
    degree: "Master of Science in Data Science",
    school: "University of Technology",
    period: "2016 - 2018",
    description: "Specialized in social impact analytics and machine learning applications.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "State University",
    period: "2012 - 2016",
    description: "Focus on data structures, algorithms, and software engineering.",
  },
]

const skills = [
  "Python",
  "R",
  "SQL",
  "Machine Learning",
  "Data Visualization",
  "Project Management",
  "Statistical Analysis",
  "Social Impact Assessment",
]

export default function ResumePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 font-space-grotesk text-theme-text">Resume</h1>
        <p className="text-xl text-theme-text">Data Scientist & Social Impact Specialist</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-space-grotesk text-theme-text">Experience</h2>
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-8"
              >
                <h3 className="text-xl font-semibold text-theme-text">{job.title}</h3>
                <p className="text-theme-primary mb-2">{job.company}</p>
                <p className="text-gray-600 mb-2">{job.period}</p>
                <p className="text-gray-700">{job.description}</p>
              </motion.div>
            ))}
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 font-space-grotesk text-theme-text">Education</h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-8"
              >
                <h3 className="text-xl font-semibold text-theme-text">{edu.degree}</h3>
                <p className="text-theme-primary mb-2">{edu.school}</p>
                <p className="text-gray-600 mb-2">{edu.period}</p>
                <p className="text-gray-700">{edu.description}</p>
              </motion.div>
            ))}
          </section>
        </div>

        <div>
          <section>
            <h2 className="text-2xl font-bold mb-6 font-space-grotesk text-theme-text">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm text-center"
                >
                  <span className="text-theme-text">{skill}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


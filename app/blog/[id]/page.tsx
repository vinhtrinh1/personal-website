"use client"

import { motion } from "framer-motion"
import { BlogPost } from "@/types"

const blogPost: BlogPost = {
  id: 1,
  title: "Using Data Science for Social Impact",
  excerpt: "How data analysis can drive positive change in communities",
  date: "March 18, 2024",
  readTime: "5 min read",
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>{blogPost.date}</span>
            <span>{blogPost.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 font-space-grotesk text-theme-text">
            {blogPost.title}
          </h1>
          <p className="text-xl text-gray-600">{blogPost.excerpt}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2>Key Findings</h2>
          <ul>
            <li>Data-driven decision making improves community outcomes</li>
            <li>Machine learning models can predict areas of high social need</li>
            <li>Visualization tools help communicate complex social issues</li>
          </ul>
          <h2>Methodology</h2>
          <p>
            Our research involved analyzing demographic data, social service utilization patterns, and community feedback. We used advanced statistical methods and machine learning algorithms to identify patterns and predict future needs.
          </p>
          <h2>Conclusion</h2>
          <p>
            By leveraging data science techniques, we can better understand and address social challenges. This approach enables more targeted and effective interventions, ultimately leading to improved community well-being.
          </p>
        </div>
      </motion.article>
    </div>
  )
} 
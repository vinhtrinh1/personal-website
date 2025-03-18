"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BlogPost } from "@/types"

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Using Data Science for Social Impact",
    excerpt: "How data analysis can drive positive change in communities",
    date: "March 18, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "The Future of AI in Social Work",
    excerpt: "Exploring the intersection of artificial intelligence and social services",
    date: "March 15, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Building Inclusive Data Systems",
    excerpt: "Creating data infrastructure that serves everyone",
    date: "March 10, 2024",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 font-space-grotesk text-theme-text">Blog</h1>
        <p className="text-xl text-theme-text">Insights on data science and social impact</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 font-space-grotesk text-theme-text">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-theme-primary hover:text-theme-primary-dark font-medium"
              >
                Read more →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}


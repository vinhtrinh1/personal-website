"use client";

import Link from "next/link"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-12 h-12 mb-4 md:mb-0"
          >
            {/* VT with gradient */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-theme-primary via-theme-secondary to-theme-accent animate-gradient" />
            <div className="absolute inset-0.5 rounded-lg bg-white flex items-center justify-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-primary via-theme-secondary to-theme-accent animate-gradient">
                VT
              </span>
            </div>
          </motion.div>
          <ul className="flex justify-center space-x-8">
            {["Home", "Blog", "Resume", "Projects"].map((item) => (
              <motion.li 
                key={item} 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-lg font-medium text-theme-text hover:text-theme-primary transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {["Home", "Blog", "Resume", "Projects"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-lg font-medium text-theme-text hover:text-theme-primary transition-colors"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header


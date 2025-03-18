import { ReactNode } from 'react'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

export interface Education {
  degree: string
  school: string
  period: string
  description: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
  demo: string
}

export interface LayoutProps {
  children: ReactNode
} 
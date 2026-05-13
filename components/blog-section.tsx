"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    title: "Building Scalable APIs with Next.js App Router",
    excerpt: "Learn how to create robust and scalable REST APIs using the new App Router and route handlers.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 1, 2026",
    readTime: "8 min read",
    category: "Next.js",
  },
  {
    title: "Modern State Management in React 2026",
    excerpt: "Exploring the latest patterns and libraries for managing state in complex React applications.",
    image: "/placeholder.svg?height=200&width=400",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    category: "React",
  },
  {
    title: "TypeScript Best Practices for Large Codebases",
    excerpt: "Essential TypeScript patterns and conventions to keep your codebase maintainable at scale.",
    image: "/placeholder.svg?height=200&width=400",
    date: "Apr 20, 2026",
    readTime: "10 min read",
    category: "TypeScript",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium tracking-widest uppercase">Blog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Latest Articles
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technical articles, tutorials, and learning logs from my development journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              variants={itemVariants}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary/90 hover:bg-primary">{post.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

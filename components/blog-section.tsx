"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar, Clock, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const blogPosts = [
  {
    title: "Building Scalable APIs with Next.js App Router",
    excerpt:
      "Learn how to create robust and scalable REST APIs using the new App Router and route handlers.",
    content:
      "Next.js App Router এ Route Handlers ব্যবহার করে scalable API তৈরি করা যায়। `app/api/route.ts` ফাইলে GET, POST, PUT, DELETE handler লেখা যায়। Middleware দিয়ে authentication handle করা সহজ। Edge Runtime ব্যবহারে performance অনেক বাড়ে। Database connection pooling এবং caching strategy সঠিকভাবে implement করলে large scale এ smooth কাজ করে।",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 1, 2026",
    readTime: "8 min read",
    category: "Next.js",
  },
  {
    title: "Modern State Management in React 2026",
    excerpt:
      "Exploring the latest patterns and libraries for managing state in complex React applications.",
    content:
      "2026 সালে React state management অনেক evolve করেছে। Zustand এবং Jotai lightweight option হিসেবে জনপ্রিয়। React Query দিয়ে server state আলাদা করা best practice। Context API শুধু global theme বা auth এর জন্য রাখা উচিত। Concurrent features ব্যবহারে useTransition এবং useDeferredValue দিয়ে UI smooth রাখা যায়।",
    image: "/placeholder.svg?height=200&width=400",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    category: "React",
  },
  {
    title: "TypeScript Best Practices for Large Codebases",
    excerpt:
      "Essential TypeScript patterns and conventions to keep your codebase maintainable at scale.",
    content:
      "Large codebase এ TypeScript এর strict mode সবসময় on রাখা উচিত। Generic types সঠিকভাবে ব্যবহারে code reusability বাড়ে। `unknown` type কে `any` এর বদলে prefer করো। Utility types যেমন `Partial`, `Pick`, `Omit` ব্যবহারে boilerplate কমে। Barrel exports (`index.ts`) দিয়ে import path clean রাখা যায়। Zod দিয়ে runtime validation এবং type inference একসাথে করা যায়।",
    image: "/placeholder.svg?height=200&width=400",
    date: "Apr 20, 2026",
    readTime: "10 min read",
    category: "TypeScript",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<
    (typeof blogPosts)[0] | null
  >(null);

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
            <span className="text-sm font-medium tracking-widest uppercase">
              Blog
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Latest Articles
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technical articles, tutorials, and learning logs from my development
            journey
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
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary/90 hover:bg-primary">
                    {post.category}
                  </Badge>
                </div>
              </div>

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

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPost && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-card border border-border rounded-2xl max-w-lg w-full shadow-2xl pointer-events-auto overflow-hidden">
                {/* Modal Image */}
                <div className="relative h-48">
                  <Image
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary/90">
                      {selectedPost.category}
                    </Badge>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {selectedPost.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-3">
                    {selectedPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedPost.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

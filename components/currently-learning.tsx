"use client"

import { motion } from "framer-motion"
import { Lightbulb, CheckCircle2, Circle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const learningItems = [
  {
    title: "Industry-Level APIs",
    description: "Building production-grade REST and GraphQL APIs with authentication, rate limiting, and documentation.",
    status: "in-progress",
    progress: 75,
  },
  {
    title: "Advanced Architecture",
    description: "Microservices, event-driven architecture, and design patterns for scalable systems.",
    status: "in-progress",
    progress: 60,
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS services, containerization with Docker, and Kubernetes orchestration.",
    status: "upcoming",
    progress: 30,
  },
  {
    title: "Performance Optimization",
    description: "Advanced caching strategies, database optimization, and frontend performance.",
    status: "completed",
    progress: 100,
  },
]

export function CurrentlyLearning() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Lightbulb className="h-5 w-5" />
            <span className="text-sm font-medium tracking-widest uppercase">Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Currently Learning
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My roadmap for continuous improvement and skill development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-2 border-primary/20">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">2026 Learning Roadmap</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {learningItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex gap-4">
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mt-1">
                      {item.status === "completed" ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      ) : item.status === "in-progress" ? (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRight className="h-6 w-6 text-primary" />
                        </motion.div>
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold">{item.title}</h3>
                        <span className="text-sm text-muted-foreground">
                          {item.progress}%
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full ${
                            item.status === "completed"
                              ? "bg-green-500"
                              : item.status === "in-progress"
                              ? "bg-primary"
                              : "bg-muted-foreground/50"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < learningItems.length - 1 && (
                    <div className="absolute left-3 top-8 bottom-0 w-px bg-border h-full" />
                  )}
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

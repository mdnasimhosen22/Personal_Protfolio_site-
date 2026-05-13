"use client";

import { motion, useInView } from "framer-motion";
import { Atom, Braces, Code2, Coffee, FileCode, Server } from "lucide-react";
import { useRef } from "react";

const skills = [
  { name: "HTML", level: 95, icon: FileCode, color: "bg-orange-500" },
  { name: "CSS", level: 90, icon: Code2, color: "bg-blue-500" },
  { name: "JavaScript", level: 88, icon: Braces, color: "bg-yellow-500" },
  { name: "React", level: 70, icon: Atom, color: "bg-cyan-500" },
  { name: "Next.js", level: 60, icon: Code2, color: "bg-foreground" },
  { name: "Node.js", level: 30, icon: Server, color: "bg-green-500" },
  { name: "Java", level: 10, icon: Coffee, color: "bg-red-500" },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${skill.color} text-white`}>
                  <skill.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground font-medium">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={
                    isInView ? { width: `${skill.level}%` } : { width: 0 }
                  }
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className={`h-full ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

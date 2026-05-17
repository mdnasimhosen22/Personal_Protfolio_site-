"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, User } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "2+" },
  { icon: Award, label: "Projects Completed", value: "20+" },
  { icon: GraduationCap, label: "Certifications", value: "3+" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <User className="h-5 w-5" />
            <span className="text-sm font-medium tracking-widest uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a dedicated Full Stack Developer with 2 years of
              intensive learning and hands-on experience building modern web
              applications. I specialize in the MERN stack and Next.js, with a
              strong focus on crafting seamless, user-centric digital
              experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with a curiosity about how websites
              work, and it has evolved into a career where I get to build
              innovative solutions every day. I believe in writing clean,
              maintainable code and continuously learning new technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you can find me contributing to
              open-source projects, writing technical articles, or exploring the
              latest trends in web development.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-card rounded-2xl border border-border shadow-sm"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

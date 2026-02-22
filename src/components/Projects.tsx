"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/portfolio";

const categories = ["All", "Web App", "Mobile App", "Desktop App", "API"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My <span className="text-green-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-4" />
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-12">
            Here are some of my recent projects showcasing my skills across
            different platforms and technologies.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                    : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-col h-full rounded-xl overflow-hidden bg-white dark:bg-white/5
                  border border-gray-200 dark:border-white/10
                  hover:border-green-500 dark:hover:border-green-500
                  hover:shadow-xl hover:shadow-green-500/10
                  transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-green-500/10 to-green-400/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl block mb-2">
                        {project.category === "Mobile App"
                          ? "📱"
                          : project.category === "Desktop App"
                            ? "🖥️"
                            : project.category === "API"
                              ? "⚡"
                              : "🌐"}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        {project.category}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Project Info */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/5
                          text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

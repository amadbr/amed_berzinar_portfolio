"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { skills } from "@/data/portfolio";

const categories = ["All", "Frontend", "Backend", "Mobile", "Tools"];

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 bg-gray-50/50 dark:bg-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My <span className="text-green-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-12" />
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.1}>
          <div className="flex overflow-x-auto gap-2 mb-12 pb-2 justify-start sm:justify-center scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {filtered.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-xl bg-white dark:bg-white/5
                  border border-gray-200 dark:border-white/10
                  hover:border-green-500/50 dark:hover:border-green-500/30
                  hover:shadow-lg hover:shadow-green-500/5
                  transition-all duration-300 text-center"
              >
                <Icon
                  className="w-10 h-10 mx-auto mb-3 text-gray-600 dark:text-gray-400
                  group-hover:text-green-500 transition-colors duration-300"
                />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {skill.category}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

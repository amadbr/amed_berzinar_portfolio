"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";
import { Project } from "@/data/portfolio";

export default function ProjectDetail({ project }: { project: Project }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const gallery = project.images?.length ? project.images : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400
            hover:text-green-500 dark:hover:text-green-400 transition-colors mb-8"
        >
          <FiArrowLeft size={16} />
          Back to Projects
        </Link>
      </motion.div>

      {/* Header */}
      <AnimatedSection>
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
            {project.category}
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
            {project.status}
          </span>
        </div>
      </AnimatedSection>

      {/* Action Buttons */}
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap gap-4 mb-6">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                bg-green-500 text-white hover:bg-green-600 transition-colors font-medium text-sm"
            >
              <FiExternalLink size={18} />
              Visit Website
            </a>
          )}
          {project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                bg-gray-900 dark:bg-white text-white dark:text-gray-900
                hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium text-sm"
            >
              <FiGithub size={18} />
              View on GitHub
            </a>
          )}
        </div>
      </AnimatedSection>

      {/* Project Image Gallery */}
      <AnimatedSection delay={0.15}>
        {/* Main Image */}
        <div className="rounded-xl overflow-hidden bg-gradient-to-br from-green-500/10 to-green-400/5 border border-gray-200 dark:border-white/10">
          {gallery ? (
            <img
              src={gallery[selectedImage]}
              alt={`${project.title} - ${selectedImage + 1}`}
              className="w-full object-contain transition-all duration-300"
            />
          ) : project.image.startsWith("http") ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl block mb-3">
                  {project.category === "Mobile App"
                    ? "📱"
                    : project.category === "Desktop App"
                      ? "🖥️"
                      : project.category === "API"
                        ? "⚡"
                        : "🌐"}
                </span>
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  {project.category}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {gallery && (
          <div className="flex overflow-x-auto gap-3 mt-3 pb-2 scrollbar-hide">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`shrink-0 w-24 h-16 sm:w-28 sm:h-18 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === i
                    ? "border-green-500 shadow-lg shadow-green-500/20"
                    : "border-gray-200 dark:border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} - ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
        <div className="mb-10" />
      </AnimatedSection>

      {/* Long Description */}
      <AnimatedSection delay={0.15}>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          {project.longDescription}
        </p>
      </AnimatedSection>

      {/* Key Features */}
      <AnimatedSection delay={0.2}>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Key Features
        </h2>
        <ul className="space-y-2 mb-10">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection delay={0.25}>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-sm rounded-full bg-gray-100 dark:bg-white/5
                text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </AnimatedSection>

      {/* Technical Details */}
      <AnimatedSection delay={0.3}>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Technical Details
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          {project.techDetails}
        </p>
      </AnimatedSection>

      {/* Challenges & Solutions */}
      <AnimatedSection delay={0.35}>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Challenges & Solutions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
          {project.challenges}
        </p>
      </AnimatedSection>

      {/* Meta Cards */}
      <AnimatedSection delay={0.4}>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Role", value: project.role },
            { label: "Duration", value: project.duration },
            { label: "Status", value: project.status },
          ].map((meta) => (
            <div
              key={meta.label}
              className="rounded-xl p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-center"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {meta.label}
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {meta.value}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

    </div>
  );
}

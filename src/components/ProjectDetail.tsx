"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";
import { Project, techIcons } from "@/data/portfolio";

export default function ProjectDetail({ project }: { project: Project }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeGroup, setActiveGroup] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const thumbStripRef = useRef<HTMLDivElement | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isFirstRender = useRef(true);

  const hasGroups = project.imageGroups && project.imageGroups.length > 0;
  const gallery = hasGroups
    ? project.imageGroups![activeGroup].images
    : project.images?.length
      ? project.images
      : null;
  const isPortrait = hasGroups && project.imageGroups![activeGroup].orientation === "portrait";

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function goToImage(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    if (el.clientWidth === 0) return;
    setSelectedImage(Math.round(el.scrollLeft / el.clientWidth));
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const container = thumbStripRef.current;
    const target = thumbRefs.current[selectedImage];
    if (!container || !target) return;
    const targetLeft =
      target.offsetLeft - (container.clientWidth - target.clientWidth) / 2;
    container.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, [selectedImage]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-10 sm:pb-16">
      <h1 className="sr-only">{project.title}</h1>
      {/* Action Buttons */}
      {(project.liveUrl !== "#" || project.githubUrl !== "#") && (
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
      )}

      {/* Project Image Gallery */}
      <AnimatedSection delay={0.15}>
        {/* Image Group Toggle */}
        {hasGroups && project.imageGroups!.length > 1 && (
          <div className="inline-flex items-center gap-1 p-1 mb-4 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            {project.imageGroups!.map((group, i) => (
              <button
                key={group.label}
                onClick={() => {
                  setActiveGroup(i);
                  setSelectedImage(0);
                  scrollRef.current?.scrollTo({ left: 0 });
                }}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeGroup === i
                    ? "text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {activeGroup === i && (
                  <motion.span
                    layoutId="imageGroupTabIndicator"
                    className="absolute inset-0 rounded-full bg-green-500 shadow-md shadow-green-500/25"
                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{group.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Main Image */}
        {gallery ? (
          <div
            className={`relative overflow-hidden bg-gradient-to-br from-green-500/10 to-green-400/5 border border-gray-200 dark:border-white/10 ${
              isPortrait
                ? "aspect-[1320/2868] rounded-[2rem] max-w-[280px] sm:max-w-xs mx-auto"
                : "aspect-[2/1] rounded-xl"
            }`}
          >
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            >
              {gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setLightboxOpen(true)}
                  className="relative w-full h-full shrink-0 snap-center cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - ${i + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden bg-gradient-to-br from-green-500/10 to-green-400/5 border border-gray-200 dark:border-white/10 aspect-[3/2] rounded-xl">
            {project.image.startsWith("http") ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover"
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
        )}

        {/* Thumbnails */}
        {gallery && (
          <div ref={thumbStripRef} className="flex overflow-x-auto gap-3 mt-3 pb-2 scrollbar-hide">
            {gallery.map((img, i) => (
              <button
                key={i}
                ref={(el) => {
                  thumbRefs.current[i] = el;
                }}
                onClick={() => goToImage(i)}
                className={`relative shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  isPortrait ? "w-12 h-24 sm:w-14 sm:h-28" : "w-24 h-16 sm:w-28 sm:h-18"
                } ${
                  selectedImage === i
                    ? "border-green-500 shadow-lg shadow-green-500/20"
                    : "border-gray-200 dark:border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} - ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
        <div className="mb-10" />
      </AnimatedSection>

      {/* Lightbox */}
      {gallery && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={selectedImage}
          slides={gallery.map((src) => ({ src }))}
          on={{ view: ({ index }) => setSelectedImage(index) }}
          plugins={[Zoom]}
          zoom={{ maxZoomPixelRatio: 3, doubleTapDelay: 300, doubleClickDelay: 300 }}
          carousel={{ imageProps: { style: { borderRadius: "1.25rem" } } }}
          render={{ buttonPrev: () => null, buttonNext: () => null, buttonZoom: () => null }}
        />
      )}

      {/* Long Description */}
      <AnimatedSection delay={0.15}>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Overview
        </h2>
        {project.highlights ? (
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {project.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
              >
                <p className="text-sm font-semibold text-green-500 dark:text-green-400 mb-1.5">
                  {highlight.label}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 mb-10">
            {project.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
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
      {project.tags.length > 0 && (
        <AnimatedSection delay={0.25}>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => {
              const Icon = techIcons[tag];
              return (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full bg-gray-100 dark:bg-white/5
                    text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                >
                  {Icon && <Icon size={14} />}
                  {tag}
                </span>
              );
            })}
          </div>
        </AnimatedSection>
      )}

      {/* Technical Details */}
      <AnimatedSection delay={0.3}>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Technical Details
        </h2>
        <div className="space-y-4 mb-10">
          {project.techDetails.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </AnimatedSection>

      {/* Challenges & Solutions */}
      <AnimatedSection delay={0.35}>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Challenges & Solutions
        </h2>
        <div className="space-y-4 mb-10">
          {project.challenges.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
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

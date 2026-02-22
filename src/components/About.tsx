"use client";

import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "@/data/portfolio";
import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            About <span className="text-green-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / Illustration */}
          <AnimatedSection delay={0.1}>
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-400/5 rotate-6" />
              <div
                className="relative w-full h-full rounded-2xl bg-gray-100 dark:bg-white/5
                border border-gray-200 dark:border-white/10 flex items-center justify-center overflow-hidden"
              >
                <div className="text-center p-6">
                  <div className="text-6xl sm:text-7xl mb-3">👨‍💻</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Your photo here
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* About Text */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {personalInfo.about.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-6 pt-4">
                <div>
                  <div className="text-2xl font-bold text-green-500">3+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">20+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">10+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Technologies
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium
                    bg-green-500/10 text-green-500 border border-green-500/20
                    hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <FiDownload size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

"use client";

import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "@/data/portfolio";
import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full mb-16" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <AnimatedSection delay={0.1}>
            <div className="relative mx-auto w-52 h-52 sm:w-80 sm:h-80">
              {/* Decorative glow behind image */}
              <div className="absolute inset-0 rounded-full bg-green-500/20 blur-2xl scale-90" />

              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-500/10" />

              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-green-400/20">
                <img
                  src="/images/my_image.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* About Text */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-5">
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                Full Stack Developer based in passion for building
              </h3>

              {personalInfo.about.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: "4+", label: "Years Exp." },
                  { value: "10+", label: "Projects" },
                  { value: "10+", label: "Technologies" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center py-4 px-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
                  >
                    <div className="text-2xl sm:text-3xl font-bold font-display text-green-400">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Resume */}
              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm
                    bg-green-500/10 text-green-500 border border-green-500/20
                    hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-500/25
                    transition-all duration-300"
                >
                  <FiDownload size={16} />
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

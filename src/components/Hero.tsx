"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Glow Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/10 text-green-500 border border-green-500/20">
            Available for freelance work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-green-500 drop-shadow-[0_0_25px_rgba(34,197,94,0.3)]">
            {personalInfo.name}
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full font-medium bg-green-500 text-white
              hover:bg-green-600 shadow-lg shadow-green-500/25
              hover:shadow-green-500/40 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-medium border border-gray-300
              dark:border-white/20 text-gray-700 dark:text-gray-300
              hover:border-green-500 hover:text-green-500 dark:hover:border-green-500
              dark:hover:text-green-400 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            {
              icon: FiGithub,
              href: personalInfo.socials.github,
              label: "GitHub",
            },
            {
              icon: FiLinkedin,
              href: personalInfo.socials.linkedin,
              label: "LinkedIn",
            },
            {
              icon: FiInstagram,
              href: personalInfo.socials.instagram,
              label: "Instagram",
            },
            {
              icon: FiMail,
              href: `mailto:${personalInfo.email}`,
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="w-11 h-11 rounded-full flex items-center justify-center
                bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400
                hover:bg-green-500/10 hover:text-green-500 dark:hover:text-green-400
                transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-green-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

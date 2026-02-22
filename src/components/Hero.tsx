"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowRight } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Glow Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px] animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-emerald-400/10 rounded-full blur-[128px] animate-pulse"
          style={{ animationDuration: "6s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name — Space Grotesk, tight tracking, gradient */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white mb-2"
          >
            Hi, I&apos;m{" "}
            <span className="text-green-400">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Role Title — tightly coupled with name */}
          <motion.h2
            variants={itemVariants}
            className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-400 mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Gradient separator line */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                font-semibold text-sm bg-green-500 text-white
                hover:bg-green-600 shadow-lg shadow-green-500/25
                hover:shadow-green-500/40 transition-all duration-300"
            >
              View My Work
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full font-semibold text-sm
                border border-gray-300 dark:border-white/20
                text-gray-700 dark:text-gray-300
                hover:border-green-500 hover:text-green-500
                dark:hover:border-green-500 dark:hover:text-green-400
                transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
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

"use client";

import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUpRight } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/amadbr",
    href: personalInfo.socials.github,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/amed-berznar",
    href: personalInfo.socials.linkedin,
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    value: "instagram.com/amed_berzinar",
    href: personalInfo.socials.instagram,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-gray-50/50 dark:bg-white/[0.02]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Get In <span className="text-green-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-4" />
          <p className="text-center text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-12">
            I&apos;m always open to new opportunities and interesting projects. Feel free
            to reach out through any of the platforms below.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <AnimatedSection key={link.label} delay={0.1 + i * 0.1}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-xl
                      bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10
                      hover:border-green-500/50 dark:hover:border-green-500/30
                      hover:shadow-lg hover:shadow-green-500/5
                      transition-all duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center
                      bg-green-500/10 text-green-500 group-hover:bg-green-500
                      group-hover:text-white transition-all duration-300"
                    >
                      <Icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {link.label}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {link.value}
                      </p>
                    </div>
                    <FiArrowUpRight
                      className="text-gray-400 group-hover:text-green-500
                      transition-colors duration-300"
                      size={18}
                    />
                  </a>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: personalInfo.socials.github },
              { icon: FiLinkedin, href: personalInfo.socials.linkedin },
              { icon: FiInstagram, href: personalInfo.socials.instagram },
              { icon: FaWhatsapp, href: "https://wa.me/9647518405161" },
              { icon: FiMail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

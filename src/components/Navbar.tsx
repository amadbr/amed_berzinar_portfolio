"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const logoSrc = mounted && theme === "light"
    ? "/images/image_with_text_for_lightMode.png"
    : "/images/image_with_text.png";

  function getHref(hash: string) {
    return isHome ? hash : `/${hash}`;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isOpen
            ? "bg-white dark:bg-gray-950"
            : scrolled
              ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20"
              : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a
              href={getHref("#home")}
              className="block hover:opacity-80 transition-opacity"
            >
              <Image
                src={logoSrc}
                alt="Amed Berzinar"
                width={120}
                height={48}
                className={`h-10 md:h-12 w-auto ${isOpen ? "md:block hidden" : ""}`}
              />
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={getHref(link.href)}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300
                    hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 text-gray-700 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay Menu — outside nav to avoid transform breaking fixed positioning */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 md:hidden bg-white dark:bg-gray-950 flex flex-col items-center justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delayChildren: 0.1, staggerChildren: 0.07 },
                },
              }}
              className="flex flex-col items-center gap-6"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={getHref(link.href)}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-medium text-gray-700 dark:text-gray-200
                    hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 mt-4"
              >
                <ThemeToggle />
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
                >
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

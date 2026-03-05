"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  if (!mounted) return <div className="w-10 h-10" />;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full flex items-center justify-center
        bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20
        transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-700" />
      )}
    </motion.button>
  );
}

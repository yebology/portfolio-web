import { navList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const Navbar: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navList.map((item) => item.sectionId);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDarkTheme
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/[0.04]"
            : "bg-white/60 backdrop-blur-2xl border-b border-black/[0.04]"
          : ""
      }`}
    >
      <div className="flex justify-between py-5 items-center mx-6 md:mx-16 lg:mx-24">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-bold text-lg cursor-pointer font-mono tracking-tight"
          onClick={() => scrollToSection("home")}
        >
          <span className="text-gradient">yobz</span>
          <span className={isDarkTheme ? "text-zinc-500" : "text-zinc-400"}>
            .io
          </span>
        </motion.h1>

        <div className="hidden md:flex">
          <div className="flex items-center gap-1 p-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
            {navList.map((value) => (
              <button
                key={value.sectionId}
                onClick={() => scrollToSection(value.sectionId)}
                className="relative cursor-pointer rounded-full px-4 py-1.5 text-sm transition-colors duration-300"
              >
                {activeSection === value.sectionId && (
                  <motion.div
                    layoutId="navPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/80 to-fuchsia-600/80"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    activeSection === value.sectionId
                      ? "text-white font-medium"
                      : isDarkTheme
                      ? "text-zinc-400 hover:text-zinc-200"
                      : "text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  {value.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`rounded-full p-2.5 transition-colors duration-200 ${
            isDarkTheme
              ? "bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06]"
              : "bg-black/[0.03] hover:bg-black/[0.06] border border-black/[0.06]"
          }`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            {isDarkTheme ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0, scale: 0 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Moon size={16} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: -90, opacity: 0, scale: 0 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Sun size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.nav>
  );
};

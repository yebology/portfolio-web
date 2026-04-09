import { navList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
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
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDarkTheme
            ? "bg-zinc-900/80 backdrop-blur-md border-b border-slate-100/10"
            : "bg-slate-100/80 backdrop-blur-md border-b border-zinc-200"
          : ""
      }`}
    >
      <div className="flex justify-between py-4 md:py-6 items-center mx-8 md:mx-24 max-w-full">
        <h1
          className="font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Yobz.io
        </h1>
        <div className="hidden md:flex">
          <div className="p-2 flex space-x-2 items-center">
            {navList.map((value) => (
              <button
                key={value.sectionId}
                onClick={() => scrollToSection(value.sectionId)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-sm transition-all duration-200 ${
                  activeSection === value.sectionId
                    ? isDarkTheme
                      ? "bg-zinc-300 text-gray-800 font-medium"
                      : "bg-zinc-700 text-white font-medium"
                    : isDarkTheme
                    ? "hover:bg-zinc-700/50"
                    : "hover:bg-zinc-300/50"
                }`}
              >
                {value.title}
              </button>
            ))}
          </div>
        </div>
        <button
          className={`rounded-xl border p-2 transition-colors duration-200 ${
            isDarkTheme
              ? "border-slate-100/40 hover:bg-slate-800"
              : "border-zinc-400 hover:bg-zinc-200"
          }`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkTheme ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
};

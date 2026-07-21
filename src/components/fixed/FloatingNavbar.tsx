import {
  IconBriefcase,
  IconCertificate,
  IconCode,
  IconHome,
  IconStack2,
  IconTrophy,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { navList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const icons: Record<string, React.ReactNode> = {
  home: <IconHome size={18} />,
  experience: <IconBriefcase size={18} />,
  skills: <IconStack2 size={18} />,
  achievement: <IconTrophy size={18} />,
  certification: <IconCertificate size={18} />,
  project: <IconCode size={18} />,
};

export const FloatingNavbar: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed bottom-4 left-4 right-4 z-50 md:hidden rounded-2xl border ${
        isDarkTheme
          ? "bg-black/80 backdrop-blur-2xl border-white/[0.06]"
          : "bg-white/80 backdrop-blur-2xl border-black/[0.06]"
      }`}
    >
      <div className="flex justify-around items-center py-3">
        {navList.map((item) => {
          const isActive = activeSection === item.sectionId;
          return (
            <button
              key={item.sectionId}
              onClick={() => scrollTo(item.sectionId)}
              className="relative flex flex-col items-center gap-0.5 px-3 py-1"
            >
              {isActive && (
                <motion.div
                  layoutId="mobileNav"
                  className="absolute inset-0 rounded-xl bg-violet-600/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors ${
                  isActive
                    ? "text-violet-400"
                    : isDarkTheme
                    ? "text-zinc-500"
                    : "text-zinc-400"
                }`}
              >
                {icons[item.sectionId]}
              </span>
              <span
                className={`relative z-10 text-[9px] font-medium ${
                  isActive
                    ? "text-violet-400"
                    : isDarkTheme
                    ? "text-zinc-600"
                    : "text-zinc-400"
                }`}
              >
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

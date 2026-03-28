import {
  IconBriefcase,
  IconCode,
  IconHome,
  IconTrophy,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { navList } from "@/utils/list";

interface FloatingNavbarProps {
  isDarkTheme: boolean;
}

const icons: Record<string, React.ReactNode> = {
  home: <IconHome size={20} />,
  experience: <IconBriefcase size={20} />,
  achievement: <IconTrophy size={20} />,
  project: <IconCode size={20} />,
};

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({
  isDarkTheme,
}) => {
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
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden border-t ${
        isDarkTheme
          ? "bg-zinc-900/90 backdrop-blur-md border-slate-100/10"
          : "bg-slate-100/90 backdrop-blur-md border-zinc-200"
      }`}
    >
      <div className="flex justify-around items-center py-2">
        {navList.map((item) => {
          const isActive = activeSection === item.sectionId;
          return (
            <button
              key={item.sectionId}
              onClick={() => scrollTo(item.sectionId)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors ${
                isActive
                  ? isDarkTheme
                    ? "text-white"
                    : "text-zinc-900"
                  : isDarkTheme
                  ? "text-slate-500"
                  : "text-zinc-400"
              }`}
            >
              {icons[item.sectionId]}
              <span className="text-[10px]">{item.title}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

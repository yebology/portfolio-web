import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { AnimatedSection } from "@/components/ui/animated-section";

export const Footer: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <AnimatedSection
      className={`mt-4 py-6 pb-28 md:pb-6 border-t ${
        isDarkTheme ? "border-white/[0.04]" : "border-black/[0.04]"
      }`}
    >
      <div className="text-center space-y-2">
        <p className={`text-sm ${isDarkTheme ? "text-zinc-500" : "text-zinc-400"}`}>
          Thanks for stopping by 🚀
        </p>
        <p className={`text-xs font-mono ${isDarkTheme ? "text-zinc-600" : "text-zinc-400"}`}>
          © {new Date().getFullYear()} yobz.io — built with React + Tailwind
        </p>
      </div>
    </AnimatedSection>
  );
};

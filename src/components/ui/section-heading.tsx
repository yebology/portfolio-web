import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { AnimatedSection } from "./animated-section";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
}) => {
  const { isDarkTheme } = useTheme();

  return (
    <AnimatedSection className="text-center mb-10">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400 mb-2">
        {subtitle}
      </p>
      <h2
        className={`text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight ${
          isDarkTheme ? "text-white" : "text-zinc-900"
        }`}
      >
        {title}
      </h2>
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
    </AnimatedSection>
  );
};

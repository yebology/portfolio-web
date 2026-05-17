import React from "react";
import { useTheme } from "@/context/ThemeContext";

/**
 * Futuristic animated background with floating orbs and grid overlay.
 */
export const GradientBackground: React.FC = () => {
  const { isDarkTheme } = useTheme();

  if (!isDarkTheme) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #8b5cf6 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating orbs — contained within viewport */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] -translate-x-1/4 -translate-y-1/4 rounded-full bg-violet-600/[0.07] blur-[120px] animate-float" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] translate-x-1/4 rounded-full bg-blue-600/[0.05] blur-[120px] animate-float-delayed" />
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] translate-y-1/4 rounded-full bg-fuchsia-600/[0.04] blur-[100px] animate-float-slow" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
    </div>
  );
};

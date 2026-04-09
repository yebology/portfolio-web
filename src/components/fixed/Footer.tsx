import React from "react";
import { useTheme } from "@/context/ThemeContext";

export const Footer: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`mt-12 py-8 pb-24 md:pb-8 border-t ${
        isDarkTheme ? "border-slate-100/10" : "border-zinc-200"
      }`}
    >
      <h1 className="text-center text-sm md:text-lg">
        Thanks for stopping by! 🚀 | ©{" "}
        <span className="font-bold">{new Date().getFullYear()} Yobz.io</span>
      </h1>
    </div>
  );
};

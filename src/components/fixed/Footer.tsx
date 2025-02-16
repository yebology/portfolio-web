import React from "react";

interface FooterProps {
  isDarkTheme: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkTheme }) => {
  return (
    <div
      className={`mt-12 py-8 border-t ${
        isDarkTheme ? "border-slate-100" : "border-zinc-900"
      }`}
    >
      <h1 className="text-center text-sm md:text-lg">
        Thanks for stopping by! 🚀 | ©{" "}
        <span className="font-bold">2025 Yobz.io</span>
      </h1>
    </div>
  );
};

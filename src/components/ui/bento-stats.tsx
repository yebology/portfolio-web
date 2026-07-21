import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const lines = [
  { prefix: "$", command: "echo $ROLE", delay: 0.4 },
  { prefix: "→", command: "Backend & AI/ML engineer", delay: 0.55 },
  { prefix: "", command: "", delay: 0.65 },
  { prefix: "$", command: "echo $SHIPPING_TO", delay: 0.75 },
  { prefix: "→", command: "🇲🇾 MY · 🇸🇬 SG · 🇺🇸 US · 🇮🇩 ID", delay: 0.9 },
  { prefix: "", command: "", delay: 1.0 },
  { prefix: "$", command: "echo $TOOLS", delay: 1.1 },
  { prefix: "→", command: "Go · Python · AWS", delay: 1.25 },
  { prefix: "", command: "", delay: 1.35 },
  { prefix: "$", command: "echo $UPTIME", delay: 1.45 },
  { prefix: "→", command: "1+ year, 0 burnout", delay: 1.6 },
];

export const BentoStats: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`relative w-[320px] xl:w-[400px] rounded-2xl border overflow-hidden font-mono text-sm ${
        isDarkTheme
          ? "bg-white/[0.02] border-white/[0.06]"
          : "bg-white/70 border-black/[0.06] shadow-lg shadow-black/[0.03]"
      }`}
    >
      {/* Terminal header */}
      <div
        className={`flex items-center gap-2 px-4 py-3 border-b ${
          isDarkTheme ? "border-white/[0.06]" : "border-black/[0.06]"
        }`}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span
          className={`text-xs ml-2 ${
            isDarkTheme ? "text-zinc-500" : "text-zinc-400"
          }`}
        >
          ~/yobel
        </span>
      </div>

      {/* Terminal body */}
      <div className="px-4 py-4 space-y-1">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: line.delay }}
            className={`flex gap-2 ${line.command === "" ? "h-3" : ""}`}
          >
            {line.prefix && (
              <span
                className={
                  line.prefix === "$"
                    ? "text-violet-400 font-bold"
                    : isDarkTheme
                    ? "text-zinc-600"
                    : "text-zinc-400"
                }
              >
                {line.prefix}
              </span>
            )}
            <span
              className={
                line.prefix === "$"
                  ? isDarkTheme
                    ? "text-zinc-200"
                    : "text-zinc-800"
                  : isDarkTheme
                  ? "text-zinc-400"
                  : "text-zinc-500"
              }
            >
              {line.command}
            </span>
          </motion.div>
        ))}
        {/* Blinking cursor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.75 }}
          className="flex gap-2 mt-1"
        >
          <span className="text-violet-400 font-bold">$</span>
          <span
            className={`inline-block w-2 h-4 animate-pulse ${
              isDarkTheme ? "bg-zinc-400" : "bg-zinc-600"
            }`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

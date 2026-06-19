import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const stats = [
  { value: "11", label: "Web3 Projects Shipped", icon: "🚀" },
  { value: "5", label: "Blockchain Networks", icon: "⛓️" },
  { value: "4", label: "Countries Worked With", icon: "🌏" },
  { value: "1", label: "Professional Certification", icon: "🏅" },
];

export const BentoStats: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className="grid grid-cols-2 gap-3 xl:gap-4 w-[320px] xl:w-[380px]">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className={`relative group p-5 xl:p-6 rounded-2xl border overflow-hidden transition-colors duration-300 ${
            isDarkTheme
              ? "bg-white/[0.02] border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.04]"
              : "bg-white/70 border-black/[0.06] hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
          }`}
        >
          {/* Hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

          <div className="relative z-10">
            <span className="text-2xl mb-2 block">{stat.icon}</span>
            <p
              className={`text-2xl xl:text-3xl font-bold tracking-tight ${
                isDarkTheme ? "text-white" : "text-zinc-900"
              }`}
            >
              {stat.value}
            </p>
            <p
              className={`text-[11px] xl:text-xs mt-1 font-medium ${
                isDarkTheme ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

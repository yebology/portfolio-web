import React from "react";
import { skillsList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";

export const Skills: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className="px-6 md:px-16 lg:px-24">
      <SectionHeading title="Skills" subtitle="Tech I work with" />

      <div className="mt-10 flex flex-col gap-8 max-w-3xl mx-auto">
        {skillsList.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
            className="flex flex-col items-center gap-3"
          >
            {/* Category label */}
            <span
              className={`text-xs font-mono font-medium px-3 py-1 rounded-full border ${
                isDarkTheme
                  ? "text-zinc-400 border-white/[0.06] bg-white/[0.02]"
                  : "text-zinc-500 border-black/[0.06] bg-black/[0.02]"
              }`}
            >
              {group.category}
            </span>

            {/* Skills row */}
            <div className="flex flex-wrap justify-center gap-3">
              {group.items.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: groupIndex * 0.1 + i * 0.05 }}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-colors duration-300 ${
                    isDarkTheme
                      ? "bg-white/[0.02] border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.04]"
                      : "bg-white/70 border-black/[0.06] hover:border-violet-500/30 hover:shadow-md"
                  }`}
                >
                  <img
                    src={isDarkTheme ? skill.logo : (skill.logoLight || skill.logo)}
                    alt={skill.name}
                    className="w-6 h-6 md:w-7 md:h-7 object-contain"
                    loading="lazy"
                  />
                  <span
                    className={`text-sm font-medium whitespace-nowrap ${
                      isDarkTheme ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

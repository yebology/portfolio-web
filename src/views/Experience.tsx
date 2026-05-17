import React, { useState } from "react";
import { experienceList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

const VISIBLE_JOBS = 1;
const VISIBLE_SKILLS = 3;

const ExperienceCard: React.FC<{
  exp: (typeof experienceList)[number];
}> = ({ exp }) => {
  const { isDarkTheme } = useTheme();
  const hasMore =
    exp.jobdesc.length > VISIBLE_JOBS || exp.skills.length > VISIBLE_SKILLS;
  const [expanded, setExpanded] = useState(false);

  const visibleJobs = expanded ? exp.jobdesc : exp.jobdesc.slice(0, VISIBLE_JOBS);
  const visibleSkills = expanded ? exp.skills : exp.skills.slice(0, VISIBLE_SKILLS);

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className={`relative group p-5 md:p-7 rounded-2xl transition-all duration-300 overflow-hidden h-full ${
        isDarkTheme
          ? "bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.04]"
          : "bg-white/70 border border-black/[0.06] hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
      }`}
    >
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col gap-1 mb-3">
          <div className="flex flex-col md:flex-row items-start justify-between md:items-center w-full gap-1">
            <div className="flex flex-row items-center gap-2 flex-wrap">
              <span className={`font-semibold text-sm md:text-base ${isDarkTheme ? "text-white" : "text-zinc-900"}`}>
                {exp.role}
              </span>
              <span
                className={`rounded-full py-0.5 px-2.5 text-[10px] md:text-xs font-medium border ${exp.color} ${
                  isDarkTheme ? "bg-white/[0.03]" : "bg-white"
                }`}
              >
                {exp.type}
              </span>
            </div>
            <span className={`text-[11px] md:text-xs font-mono ${isDarkTheme ? "text-zinc-500" : "text-zinc-400"}`}>
              {exp.period}
            </span>
          </div>
          <p className={`text-xs md:text-sm font-medium ${isDarkTheme ? "text-zinc-500" : "text-zinc-400"}`}>
            {exp.company} · {exp.country}
          </p>
        </div>

        {/* Job descriptions */}
        {visibleJobs.length > 0 && (
          <ul className="mt-3 space-y-2">
            {visibleJobs.map((job, i) => (
              <li
                key={i}
                className={`text-xs md:text-[13px] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full ${
                  isDarkTheme
                    ? "text-zinc-400 before:bg-violet-500/40"
                    : "text-zinc-500 before:bg-violet-400/40"
                }`}
              >
                {job}
              </li>
            ))}
          </ul>
        )}

        {/* Skills */}
        {visibleSkills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {visibleSkills.map((skill, i) => (
              <span
                key={i}
                className={`rounded-full px-2.5 py-0.5 text-[10px] md:text-xs font-medium ${
                  isDarkTheme
                    ? "bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    : "bg-zinc-100 text-zinc-600 border border-zinc-200"
                }`}
              >
                {skill}
              </span>
            ))}
            {!expanded && exp.skills.length > VISIBLE_SKILLS && (
              <span className={`text-[10px] md:text-xs self-center ${isDarkTheme ? "text-zinc-600" : "text-zinc-400"}`}>
                +{exp.skills.length - VISIBLE_SKILLS}
              </span>
            )}
          </div>
        )}

        {/* Expand button */}
        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className={`mt-4 flex items-center gap-1 text-xs font-medium transition-colors ${
              isDarkTheme
                ? "text-violet-400 hover:text-violet-300"
                : "text-violet-500 hover:text-violet-600"
            }`}
          >
            {expanded ? (
              <>
                Less <ChevronUp size={12} />
              </>
            ) : (
              <>
                More <ChevronDown size={12} />
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24">
      <SectionHeading
        title="Experience"
        subtitle="Where I've worked"
      />

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
        {experienceList.map((exp, index) => (
          <StaggerItem key={index} className="h-full">
            <ExperienceCard exp={exp} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

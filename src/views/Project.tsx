import { projectList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const INITIAL_COUNT = 4;
const VISIBLE_JOBS = 1;
const VISIBLE_SKILLS = 3;

const ProjectCard: React.FC<{
  project: (typeof projectList)[number];
}> = ({ project }) => {
  const { isDarkTheme } = useTheme();
  const hasMore =
    project.job.length > VISIBLE_JOBS || project.skills.length > VISIBLE_SKILLS;
  const [expanded, setExpanded] = useState(false);

  const visibleJobs = expanded ? project.job : project.job.slice(0, VISIBLE_JOBS);
  const visibleSkills = expanded
    ? project.skills
    : project.skills.slice(0, VISIBLE_SKILLS);

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className={`relative group p-5 md:p-7 rounded-2xl transition-all duration-300 overflow-hidden h-full ${
        isDarkTheme
          ? "bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.04]"
          : "bg-white/70 border border-black/[0.06] hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
      }`}
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.03] to-fuchsia-600/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col gap-2 mb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex flex-row items-center gap-2 flex-wrap">
              <a
                className={`font-semibold text-sm md:text-base hover:text-violet-400 transition-colors ${
                  isDarkTheme ? "text-white" : "text-zinc-900"
                }`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
                <ExternalLink size={12} className="inline ml-1.5 opacity-40" />
              </a>
              <span
                className={`rounded-full py-0.5 px-2.5 text-[10px] font-medium border ${
                  project.type === "Personal Project"
                    ? isDarkTheme
                      ? "border-indigo-500/30 text-indigo-300 bg-indigo-500/10"
                      : "border-indigo-500/30 text-indigo-600 bg-indigo-50"
                    : isDarkTheme
                    ? "border-pink-500/30 text-pink-300 bg-pink-500/10"
                    : "border-pink-500/30 text-pink-600 bg-pink-50"
                }`}
              >
                {project.type === "Personal Project" ? "Solo" : "Team"}
              </span>
            </div>
            <div className="flex flex-row items-center gap-1.5 shrink-0">
              <div className={`rounded-full w-2 h-2 ${project.network.color}`} />
              <span className={`text-[10px] md:text-xs font-mono ${isDarkTheme ? "text-zinc-500" : "text-zinc-400"}`}>
                {project.network.name}
              </span>
            </div>
          </div>

          <p className={`text-xs md:text-[13px] leading-relaxed ${isDarkTheme ? "text-zinc-400" : "text-zinc-500"}`}>
            {project.description}
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
            {!expanded && project.skills.length > VISIBLE_SKILLS && (
              <span className={`text-[10px] self-center ${isDarkTheme ? "text-zinc-600" : "text-zinc-400"}`}>
                +{project.skills.length - VISIBLE_SKILLS}
              </span>
            )}
          </div>
        )}

        {/* Expand */}
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
              <>Less <ChevronUp size={12} /></>
            ) : (
              <>More <ChevronDown size={12} /></>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export const Project: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? projectList
    : projectList.slice(0, INITIAL_COUNT);

  return (
    <div className="px-6 md:px-16 lg:px-24">
      <SectionHeading title="Projects" subtitle="What I've built" />

      <StaggerContainer
        key={showAll ? "all" : "initial"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6"
      >
        {visibleProjects.map((project, index) => (
          <StaggerItem key={index} className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {projectList.length > INITIAL_COUNT && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(!showAll)}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              isDarkTheme
                ? "bg-violet-600/10 border border-violet-500/20 text-violet-300 hover:bg-violet-600/20 hover:border-violet-500/40"
                : "bg-violet-50 border border-violet-200 text-violet-600 hover:bg-violet-100 hover:border-violet-300"
            }`}
          >
            {showAll ? (
              <>Show Less <ChevronUp size={14} /></>
            ) : (
              <>
                Show More ({projectList.length - INITIAL_COUNT} more){" "}
                <ChevronDown size={14} />
              </>
            )}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

import React, { useState } from "react";
import { experienceList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    <div
      className={`border p-4 md:p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 ${
        isDarkTheme
          ? "border-slate-100/10 hover:border-slate-100/30 bg-zinc-800/30 shadow-lg"
          : "border-zinc-200 hover:border-zinc-400 bg-white/50 shadow-sm"
      }`}
    >
      <div className="flex flex-col justify-between items-start mb-2">
        <div className="flex flex-col md:flex-row items-start justify-between md:items-center w-full gap-1">
          <div className="flex flex-row items-center gap-2 flex-wrap">
            <span className="font-semibold text-[13px] md:text-lg leading-snug">{exp.role}</span>
            <div className={`rounded-lg py-0.5 px-2 text-[10px] md:text-xs border whitespace-nowrap ${exp.color}`}>
              {exp.type}
            </div>
          </div>
          <span className="text-[11px] md:text-sm opacity-60">
            {exp.period}
          </span>
        </div>
        <div className="mt-0.5 text-[11px] md:text-sm opacity-50 font-medium">
          {exp.company} — {exp.country}
        </div>
      </div>

      {visibleJobs.length > 0 && (
        <ul className="mt-2 list-disc ml-5 space-y-1">
          {visibleJobs.map((job, i) => (
            <li
              key={i}
              className={`text-[12px] md:text-[13px] leading-relaxed ${
                isDarkTheme ? "text-slate-400" : "text-zinc-500"
              }`}
            >
              {job}
            </li>
          ))}
        </ul>
      )}

      {visibleSkills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {visibleSkills.map((skill, i) => (
            <span
              key={i}
              className={`rounded-md border px-2 py-0.5 text-[11px] md:text-xs ${
                isDarkTheme
                  ? "border-slate-100/15 bg-slate-800/60"
                  : "border-zinc-300 bg-zinc-100"
              }`}
            >
              {skill}
            </span>
          ))}
          {!expanded && exp.skills.length > VISIBLE_SKILLS && (
            <span className="text-xs opacity-40 self-center">
              +{exp.skills.length - VISIBLE_SKILLS} more
            </span>
          )}
        </div>
      )}

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-4 flex items-center gap-1 text-xs transition-colors ${
            isDarkTheme
              ? "text-slate-400 hover:text-slate-200"
              : "text-zinc-500 hover:text-zinc-700"
          }`}
        >
          {expanded ? (
            <>
              Show Less <ChevronUp size={14} />
            </>
          ) : (
            <>
              Show More <ChevronDown size={14} />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export const Experience: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className="mx-8 md:mx-24">
      <div className="text-center mb-12">
        <h2
          className={`text-4xl xl:text-5xl font-bold bg-gradient-to-b ${
            isDarkTheme
              ? "from-white to-gray-400/80"
              : "from-black to-gray-300/80"
          } bg-clip-text text-transparent leading-normal`}
        >
          Experience
        </h2>
        <p className="mt-2 opacity-60 text-sm">
          Where I've worked and contributed
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {experienceList.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>
    </div>
  );
};

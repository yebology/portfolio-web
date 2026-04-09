import { projectList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_COUNT = 4;

export const Project: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectList : projectList.slice(0, INITIAL_COUNT);

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
          Projects
        </h2>
        <p className="mt-2 opacity-60 text-sm">Things I've built and shipped</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className={`border p-5 md:p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 ${
              isDarkTheme
                ? "border-slate-100/10 hover:border-slate-100/30 bg-zinc-800/30 shadow-lg"
                : "border-zinc-200 hover:border-zinc-400 bg-white/50 shadow-sm"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
              <div className="flex flex-row space-x-2 items-center flex-wrap">
                <a
                  className="font-semibold hover:underline underline-offset-4 text-sm md:text-lg"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
                <div
                  className={`rounded-lg py-0.5 px-2 text-xs border ${
                    project.type === "Personal Project"
                      ? "border-indigo-600"
                      : "border-pink-500"
                  }`}
                >
                  {project.type}
                </div>
              </div>
              <div className="flex flex-row items-center space-x-1.5">
                <div
                  className={`rounded-full size-2 ${project.network.color}`}
                />
                <span className="text-xs opacity-70">{project.network.name}</span>
              </div>
            </div>

            <p className="text-[13px] leading-relaxed mb-3 opacity-80">
              {project.description}
            </p>

            {project.job.length > 0 && (
              <ul className="mt-2 list-disc ml-5 space-y-1">
                {project.job.map((job, jobIndex) => (
                  <li
                    key={jobIndex}
                    className={`text-[13px] leading-relaxed ${
                      isDarkTheme ? "text-slate-400" : "text-zinc-500"
                    }`}
                  >
                    {job}
                  </li>
                ))}
              </ul>
            )}

            {project.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`rounded-md border px-2.5 py-0.5 text-xs ${
                      isDarkTheme
                        ? "border-slate-100/15 bg-slate-800/60"
                        : "border-zinc-300 bg-zinc-100"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {projectList.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`flex items-center gap-1 rounded-full px-6 py-2 text-sm transition-all duration-200 border ${
              isDarkTheme
                ? "border-slate-100/20 hover:bg-zinc-800 hover:border-slate-100/40"
                : "border-zinc-300 hover:bg-zinc-200 hover:border-zinc-400"
            }`}
          >
            {showAll ? (
              <>
                Show Less <ChevronUp size={14} />
              </>
            ) : (
              <>
                Show More ({projectList.length - INITIAL_COUNT} more) <ChevronDown size={14} />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

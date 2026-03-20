import { projectList } from "@/utils/list";
import React from "react";

interface ProjectProps {
  isDarkTheme: boolean;
}

export const Project: React.FC<ProjectProps> = ({ isDarkTheme }) => {
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
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`border p-5 md:p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 ${
              isDarkTheme
                ? "border-slate-100/10 hover:border-slate-100/30 bg-zinc-800/30 shadow-lg"
                : "border-zinc-200 hover:border-zinc-400 bg-white/50 shadow-sm"
            }`}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex flex-row space-x-2 items-center">
                <a
                  className="font-semibold hover:underline underline-offset-4 text-md md:text-lg"
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
    </div>
  );
};

import { projectList } from "@/utils/list";
import React from "react";

interface ProjectProps {
  isDarkTheme: boolean;
}

export const Project: React.FC<ProjectProps> = ({ isDarkTheme }) => {
  return (
    <div className="mx-8 md:mx-24">
      <h1
        className={`text-5xl xl:text-6xl font-bold text-center bg-gradient-to-b ${
          isDarkTheme
            ? "from-white to-gray-400/80"
            : "from-black to-gray-300/80"
        } bg-clip-text text-transparent leading-normal pb-4 mb-10`}
      >
        My Projects
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`border cursor-pointer hover:scale-105 duration-200 p-4 md:p-6 rounded-xl transition-all ${
              isDarkTheme
                ? "border-slate-100/40 hover:bg-slate-800/40 shadow-lg"
                : "border-zinc-900 hover:bg-zinc-200/40 shadow-md"
            }`}
          >
            {/* Header: Project Name & Network */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex flex-row space-x-1 md:space-x-3 items-center justify-center">
                <a
                  className="font-semibold hover:underline underline-offset-4 text-md md:text-lg"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
                <div className={`rounded-lg py-1 px-2 text-xs md:text-sm border ${project.type === "Personal Project" ? 'border-indigo-600' : 'border-pink-500'}`}>
                  {project.type}
                </div>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <div
                  className={`rounded-full size-2 ${project.network.color}`}
                ></div>
                <span className="text-xs md:text-sm">{project.network.name}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[14px] font-normal mb-3 leading-relaxed">
              {project.description}
            </p>

            {/* Job List */}
            {project.job.length > 0 && (
              <ul className="mt-2 list-disc ml-6">
                {project.job.map((job, jobIndex) => (
                  <li
                    key={jobIndex}
                    className={`text-[14px] ${
                      isDarkTheme ? "text-slate-400" : "text-zinc-500"
                    }`}
                  >
                    {job}
                  </li>
                ))}
              </ul>
            )}

            {/* Skills */}
            {project.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {project.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`rounded-md border px-3 py-1 text-xs ${
                      isDarkTheme
                        ? "border-slate-100/40 bg-slate-900/40 hover:bg-slate-700"
                        : "border-zinc-900 bg-zinc-100 hover:bg-zinc-300"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { experienceList } from "@/utils/list";

interface ExperienceProps {
  isDarkTheme: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDarkTheme }) => {
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
        <p className="mt-2 opacity-60 text-sm">Where I've worked and contributed</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className={`border p-5 md:p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 ${
              isDarkTheme
                ? "border-slate-100/10 hover:border-slate-100/30 bg-zinc-800/30 shadow-lg"
                : "border-zinc-200 hover:border-zinc-400 bg-white/50 shadow-sm"
            }`}
          >
            <div className="flex flex-col justify-between items-start mb-3">
              <div className="flex flex-col md:flex-row items-start justify-between md:items-center w-full">
                <div className="flex flex-row items-center space-x-2">
                  <span className="font-semibold text-md md:text-lg">
                    {exp.role}
                  </span>
                  <div
                    className={`rounded-lg py-0.5 px-2 text-xs border ${exp.color}`}
                  >
                    {exp.type}
                  </div>
                </div>
                <span className="text-xs md:text-sm opacity-60 mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <div className="mt-1 text-xs md:text-sm opacity-50 font-medium">
                {exp.company} — {exp.country}
              </div>
            </div>

            {exp.jobdesc.length > 0 && (
              <ul className="mt-3 list-disc ml-5 space-y-1">
                {exp.jobdesc.map((job, jobIndex) => (
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

            {exp.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, i) => (
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

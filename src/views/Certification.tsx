import { certificationList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

export const Certification: React.FC = () => {
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
          Certifications
        </h2>
        <p className="mt-2 opacity-60 text-sm">
          Professional credentials and qualifications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {certificationList.map((cert, index) => (
          <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`border p-5 md:p-6 rounded-xl transition-all duration-200 hover:-translate-y-1 flex flex-col items-center text-center ${
              isDarkTheme
                ? "border-slate-100/10 hover:border-slate-100/30 bg-zinc-800/30 shadow-lg"
                : "border-zinc-200 hover:border-zinc-400 bg-white/50 shadow-sm"
            }`}
          >
            <img
              src={cert.badge}
              alt={cert.name}
              className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4"
              loading="lazy"
            />
            <h3 className="font-semibold text-sm md:text-base mb-1">
              {cert.name}
            </h3>
            <p className="text-xs opacity-60 mb-2">{cert.issuer}</p>
            <p className="text-xs opacity-50">
              Issued {cert.issued} · Expires {cert.expires}
            </p>
            <span
              className={`mt-3 text-xs px-3 py-1 rounded-full border ${
                isDarkTheme
                  ? "border-slate-100/15 bg-slate-800/60"
                  : "border-zinc-300 bg-zinc-100"
              }`}
            >
              View Credential
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

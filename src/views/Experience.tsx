import React from "react";
import { experienceList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";

interface GroupedExperience {
  company: string;
  country: string;
  roles: (typeof experienceList)[number][];
}

const groupByCompany = (list: typeof experienceList): GroupedExperience[] => {
  const map = new Map<string, GroupedExperience>();

  for (const exp of list) {
    const key = exp.company;
    if (!map.has(key)) {
      map.set(key, { company: exp.company, country: exp.country, roles: [] });
    }
    map.get(key)!.roles.push(exp);
  }

  return Array.from(map.values());
};

const typeColors: Record<string, { dark: string; light: string }> = {
  Contract: {
    dark: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    light: "text-violet-600 bg-violet-50 border-violet-200",
  },
  Internship: {
    dark: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    light: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  Freelance: {
    dark: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    light: "text-amber-600 bg-amber-50 border-amber-200",
  },
};

const RoleEntry: React.FC<{
  exp: (typeof experienceList)[number];
  isLast: boolean;
}> = ({ exp, isLast }) => {
  const { isDarkTheme } = useTheme();
  const colors = typeColors[exp.type] || typeColors.Contract;

  return (
    <div className={`relative flex gap-4 ${!isLast ? "pb-6" : ""}`}>
      {/* Mini timeline dot + line */}
      <div className="flex flex-col items-center pt-1.5">
        <div
          className={`w-2.5 h-2.5 rounded-full shrink-0 ${
            isDarkTheme ? "bg-violet-500/60" : "bg-violet-400"
          }`}
        />
        {!isLast && (
          <div
            className={`w-px flex-1 mt-1.5 ${
              isDarkTheme ? "bg-white/[0.08]" : "bg-zinc-200"
            }`}
          />
        )}
      </div>

      {/* Role content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4
              className={`text-sm md:text-[15px] font-semibold ${
                isDarkTheme ? "text-white" : "text-zinc-900"
              }`}
            >
              {exp.role}
            </h4>
            <span
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                isDarkTheme ? colors.dark : colors.light
              }`}
            >
              {exp.type}
            </span>
          </div>
          <span
            className={`text-[11px] font-mono whitespace-nowrap ${
              isDarkTheme ? "text-zinc-500" : "text-zinc-400"
            }`}
          >
            {exp.period}
          </span>
        </div>

        {/* Bullets */}
        <ul className="mt-2.5 space-y-1.5">
          {exp.jobdesc.map((job, i) => (
            <li
              key={i}
              className={`text-[12.5px] md:text-[13px] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full ${
                isDarkTheme
                  ? "text-zinc-400 before:bg-violet-500/50"
                  : "text-zinc-500 before:bg-violet-400/50"
              }`}
            >
              {job}
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {exp.skills.map((skill, i) => (
            <span
              key={i}
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                isDarkTheme
                  ? "bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                  : "bg-zinc-100 text-zinc-500 border border-zinc-200"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CompanyGroup: React.FC<{
  group: GroupedExperience;
  index: number;
}> = ({ group, index }) => {
  const { isDarkTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`rounded-2xl p-5 md:p-7 transition-all duration-300 ${
        isDarkTheme
          ? "bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1]"
          : "bg-white/80 border border-zinc-200/80 hover:border-zinc-300"
      }`}
    >
      {/* Company header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 ${
            isDarkTheme
              ? "bg-violet-500/10 border border-violet-500/20"
              : "bg-violet-50 border border-violet-200"
          }`}
        >
          <Building2
            size={16}
            className={isDarkTheme ? "text-violet-400" : "text-violet-500"}
          />
        </div>
        <div>
          <h3
            className={`text-sm md:text-base font-semibold ${
              isDarkTheme ? "text-white" : "text-zinc-900"
            }`}
          >
            {group.company}
          </h3>
          <div
            className={`flex items-center gap-1 text-xs ${
              isDarkTheme ? "text-zinc-500" : "text-zinc-400"
            }`}
          >
            <MapPin size={11} />
            <span>{group.country}</span>
            <span className="mx-1">·</span>
            <span>
              {group.roles.length} role{group.roles.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Roles list */}
      <div className="pl-1">
        {group.roles.map((exp, i) => (
          <RoleEntry
            key={i}
            exp={exp}
            isLast={i === group.roles.length - 1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const Experience: React.FC = () => {
  const grouped = groupByCompany(experienceList);

  return (
    <div className="px-6 md:px-16 lg:px-24">
      <SectionHeading title="Experience" subtitle="Where I've worked" />

      <div className="max-w-3xl mx-auto mt-10 flex flex-col gap-5">
        {grouped.map((group, index) => (
          <CompanyGroup key={group.company} group={group} index={index} />
        ))}
      </div>
    </div>
  );
};

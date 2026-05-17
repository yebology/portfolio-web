import { certificationList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";

export const Certification: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className="px-6 md:px-16 lg:px-24">
      <SectionHeading
        title="Certifications"
        subtitle="Credentials"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {certificationList.map((cert, index) => (
          <StaggerItem key={index}>
            <motion.a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative group block p-6 md:p-8 rounded-2xl transition-all duration-300 text-center overflow-hidden h-full ${
                isDarkTheme
                  ? "bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.04]"
                  : "bg-white/70 border border-black/[0.06] hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5"
              }`}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10 flex flex-col items-center">
                <motion.img
                  src={cert.badge}
                  alt={cert.name}
                  className="w-28 h-28 md:w-36 md:h-36 object-contain mb-5"
                  loading="lazy"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                />
                <h3 className={`font-semibold text-sm md:text-base mb-2 ${isDarkTheme ? "text-white" : "text-zinc-900"}`}>
                  {cert.name}
                </h3>
                <p className={`text-xs mb-1 ${isDarkTheme ? "text-zinc-500" : "text-zinc-400"}`}>
                  {cert.issuer}
                </p>
                <p className={`text-[11px] font-mono ${isDarkTheme ? "text-zinc-600" : "text-zinc-400"}`}>
                  {cert.issued} → {cert.expires}
                </p>
                <span
                  className={`mt-4 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                    isDarkTheme
                      ? "bg-violet-600/10 text-violet-300 border border-violet-500/20 group-hover:bg-violet-600/20"
                      : "bg-violet-50 text-violet-600 border border-violet-200 group-hover:bg-violet-100"
                  }`}
                >
                  View <ExternalLink size={10} />
                </span>
              </div>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

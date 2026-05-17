import { Timeline } from "@/components/ui/timeline";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { achievementList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import { SectionHeading } from "@/components/ui/section-heading";
import React, { useState } from "react";

export const Achievement: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  const data = achievementList.map((item) => ({
    isDarkTheme,
    title: item.title,
    content: (
      <div>
        {item.role && (
          <p className={`text-xs md:text-sm mb-3 ${isDarkTheme ? "text-zinc-400" : "text-zinc-500"}`}>
            As a <span className="font-semibold">{item.role}</span>:
          </p>
        )}
        <ul className="space-y-1.5 mb-4">
          {item.contributions.map((c, i) => (
            <li
              key={i}
              className={`text-xs md:text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[7px] before:w-1.5 before:h-1.5 before:rounded-full ${
                isDarkTheme
                  ? "text-zinc-400 before:bg-violet-500/40"
                  : "text-zinc-500 before:bg-violet-400/40"
              }`}
            >
              {c}
            </li>
          ))}
        </ul>

        {item.references.length > 0 && (
          <div className="mb-4">
            <p className={`text-[11px] uppercase tracking-wider font-medium mb-2 ${isDarkTheme ? "text-zinc-500" : "text-zinc-400"}`}>
              References
            </p>
            <div className="flex flex-wrap gap-2">
              {item.references.map((ref, i) => (
                <a
                  key={i}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[11px] md:text-xs px-2.5 py-1 rounded-full transition-colors ${
                    isDarkTheme
                      ? "bg-white/[0.04] border border-white/[0.06] text-violet-300 hover:bg-violet-500/10 hover:border-violet-500/20"
                      : "bg-violet-50 border border-violet-200 text-violet-600 hover:bg-violet-100"
                  }`}
                >
                  {ref.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          {item.images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
              loading="lazy"
              className="rounded-xl object-cover h-44 lg:h-56 w-full cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-[1.02] border border-white/[0.06]"
              onClick={() => setLightbox({ src: img.src, alt: img.alt })}
            />
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="px-6 md:px-16 lg:px-24">
      <SectionHeading
        title="Achievements"
        subtitle="Milestones"
      />
      <Timeline data={data} />
      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};

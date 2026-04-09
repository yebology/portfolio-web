import { Timeline } from "@/components/ui/timeline";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { achievementList } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import {
  a_style,
  grid_style,
  image_height,
  image_width,
  img_style,
  p_style,
  ref_style,
  ul_style,
} from "@/utils/style_helper";
import React, { useState } from "react";

export const Achievement: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const data = achievementList.map((item) => ({
    isDarkTheme,
    title: item.title,
    content: (
      <div>
        <p className={p_style}>
          {item.role && `As a ${item.role}, I played a pivotal role to:`}
          <ul className={ul_style}>
            {item.contributions.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </p>
        {item.references.length > 0 && (
          <p className={ref_style}>
            References:
            <ul className={ul_style}>
              {item.references.map((ref, i) => (
                <li key={i}>
                  <a
                    href={ref.url}
                    className={a_style}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ref.label}
                  </a>
                </li>
              ))}
            </ul>
          </p>
        )}
        <div className={grid_style}>
          {item.images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              width={image_width}
              height={image_height}
              loading="lazy"
              className={`${img_style} cursor-pointer hover:opacity-80 transition-opacity`}
              onClick={() => setLightbox({ src: img.src, alt: img.alt })}
            />
          ))}
        </div>
      </div>
    ),
  }));

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
          Achievements
        </h2>
        <p className="mt-2 opacity-60 text-sm">
          Milestones and recognitions along the way
        </p>
      </div>
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

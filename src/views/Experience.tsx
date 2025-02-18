import { Timeline } from "@/components/ui/timeline";
import {
  grid_style,
  image_height,
  image_width,
  img_style,
  p_style,
  ul_style,
} from "@/utils/style_helper";
import React from "react";
import certifate from "../assets/certificate.jpeg";
import closing_su from "../assets/closing_su.jpg";
import rcn from "../assets/rcn.jpg";

interface ExperienceProps {
  isDarkTheme: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDarkTheme }) => {
  const data = [
    {
      title: "Apple Developer Academy (Mar 2025 - Now)",
      content: (
        <div>
          <p className={`${p_style} mb-8`}>
            As an iOS Developer Intern, I played a pivotal role to :
            <span>
              <ul className={ul_style}>
                <li>-</li>
                <li>-</li>
                <li>-</li>
              </ul>
            </span>
          </p>
          <div className={grid_style}>
            <img
              src={certifate}
              alt="startup template"
              width={image_width}
              height={image_height}
              className={img_style}
            />
            <img
              src={certifate}
              alt="startup template"
              width={image_width}
              height={image_height}
              className={img_style}
            />
            <img
              src={certifate}
              alt="startup template"
              width={image_width}
              height={image_height}
              className={img_style}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Informatics Student Union (Aug 2023 - Jun 2024)",
      content: (
        <div>
          <p className={`${p_style} mb-8`}>
            As a Secretary, I played a pivotal role in :
            <span>
              <ul className={ul_style}>
                <li>
                  Leading the Informatics Student Union to win “Best
                  Administrative Student Union” at Universitas Ciputra Awarding
                  Night 2024.
                </li>
                <li>
                  Managing administrative tasks, including scheduling meetings
                  via Google Calendar and writing activity reports.
                </li>
              </ul>
            </span>
          </p>
          <div className={grid_style}>
            <img
              src={rcn}
              alt="startup template"
              width={image_width}
              height={image_height}
              className={img_style}
            />
            <img
              src={closing_su}
              alt="startup template"
              width={image_width}
              height={image_height}
              className={img_style}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="mx-8 md:mx-24">
      <h1
        className={`text-5xl xl:text-6xl font-bold text-center bg-gradient-to-b ${
          isDarkTheme
            ? "from-white to-gray-400/80"
            : "from-black to-gray-300/80"
        } bg-clip-text text-transparent leading-normal pb-4 mb-10`}
      >
        Experience
      </h1>{" "}
      <div>
        <Timeline data={data} />
      </div>
    </div>
  );
};

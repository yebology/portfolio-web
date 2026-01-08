// import { Timeline } from "@/components/ui/timeline";
// import {
//   grid_style,
//   image_height,
//   image_width,
//   img_style,
//   p_style,
//   ul_style,
// } from "@/utils/style_helper";
import React from "react";
// import certifate from "../assets/certificate.jpeg";
// import closing_su from "../assets/closing_su.jpg";
// import rcn from "../assets/rcn.jpg";
import { experienceList } from "@/utils/list";

interface ExperienceProps {
  isDarkTheme: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDarkTheme }) => {
  // const data = [
  //   {
  //     isDarkTheme: isDarkTheme,
  //     title: "Apple Developer Academy (Mar 2025 - Now)",
  //     content: (
  //       <div>
  //         <p className={`${p_style} mb-8`}>
  //           As an iOS Developer Intern, I played a pivotal role to :
  //           <span>
  //             <ul className={ul_style}>
  //               <li>-</li>
  //               <li>-</li>
  //               <li>-</li>
  //             </ul>
  //           </span>
  //         </p>
  //         <div className={grid_style}>
  //           <img
  //             src={certifate}
  //             alt="startup template"
  //             width={image_width}
  //             height={image_height}
  //             className={img_style}
  //           />
  //           <img
  //             src={certifate}
  //             alt="startup template"
  //             width={image_width}
  //             height={image_height}
  //             className={img_style}
  //           />
  //           <img
  //             src={certifate}
  //             alt="startup template"
  //             width={image_width}
  //             height={image_height}
  //             className={img_style}
  //           />
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     isDarkTheme: isDarkTheme,
  //     title: "Informatics Student Union (Aug 2023 - Jun 2024)",
  //     content: (
  //       <div>
  //         <p className={`${p_style} mb-8`}>
  //           As a Secretary, I played a pivotal role in :
  //           <span>
  //             <ul className={ul_style}>
  //               <li>
  //                 Leading the Informatics Student Union to win “Best
  //                 Administrative Student Union” at Universitas Ciputra Awarding
  //                 Night 2024.
  //               </li>
  //               <li>
  //                 Managing administrative tasks, including scheduling meetings
  //                 via Google Calendar and writing activity reports.
  //               </li>
  //             </ul>
  //           </span>
  //         </p>
  //         <div className={grid_style}>
  //           <img
  //             src={rcn}
  //             alt="startup template"
  //             width={image_width}
  //             height={image_height}
  //             className={img_style}
  //           />
  //           <img
  //             src={closing_su}
  //             alt="startup template"
  //             width={image_width}
  //             height={image_height}
  //             className={img_style}
  //           />
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];
  // return (
  //   <div className="mx-8 md:mx-24">
  //     <h1
  //       className={`text-5xl xl:text-6xl font-bold text-center bg-gradient-to-b ${
  //         isDarkTheme
  //           ? "from-white to-gray-400/80"
  //           : "from-black to-gray-300/80"
  //       } bg-clip-text text-transparent leading-normal pb-4 mb-10`}
  //     >
  //       Experience
  //     </h1>{" "}
  //     <div>
  //       <Timeline data={data} />
  //     </div>
  //   </div>
  // );
  return (
    <div className="mx-8 md:mx-24">
      <h1
        className={`text-5xl xl:text-6xl font-bold text-center bg-gradient-to-b ${
          isDarkTheme
            ? "from-white to-gray-400/80"
            : "from-black to-gray-300/80"
        } bg-clip-text text-transparent leading-normal pb-4 mb-10`}
      >
        My Experiences
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className={`border cursor-pointer hover:scale-105 duration-200 p-4 md:p-6 rounded-xl transition-all ${
              isDarkTheme
                ? "border-slate-100/40 hover:bg-slate-800/40 shadow-lg"
                : "border-zinc-900 hover:bg-zinc-200/40 shadow-md"
            }`}
          >
            {/* Header: Role & Company */}
            <div className="flex flex-col justify-between items-start mb-3">
              <div className="flex flex-col md:flex-row items-start justify-between md:items-center w-full">
                <div className="flex flex-row items-center space-x-1 md:space-x-2">
                  <span className="font-semibold text-md md:text-lg">
                    {exp.role}
                  </span>
                  <div
                    className={`rounded-lg py-1 px-2 text-xs md:text-sm border ${exp.color}`}
                  >
                    {exp.type}
                  </div>
                </div>
                <div className="text-sm">
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="mt-1 flex flex-col md:flex-row md:items-center md:space-x-2 text-xs md:text-sm text-zinc-500">
                <span className="font-bold">
                  {exp.company} - {exp.country}
                </span>
              </div>
            </div>

            {/* Job Description */}
            {exp.jobdesc.length > 0 && (
              <ul className="mt-2 list-disc ml-6">
                {exp.jobdesc.map((job, jobIndex) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

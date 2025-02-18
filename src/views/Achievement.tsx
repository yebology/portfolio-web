import { Timeline } from "@/components/ui/timeline";
import React from "react";

import certifate from "../assets/certificate.jpeg";
import codefest_ig from "../assets/codefest_ig.png";
import photo_with_lecturer from "../assets/photo_with_lecturer.png";
import photo_with_lecturer_2 from "../assets/photo_with_lecturer_2.png";
import winner_photo_wsu from "../assets/winner_photo_wsu.jpeg";
import photo_with_judges_3 from "../assets/photo_with_judges_3.jpeg";
import terserah_team_photos from "../assets/terserah_team_photos.jpeg";

interface AchievementProps {
  isDarkTheme: boolean;
}

export const Achievement: React.FC<AchievementProps> = ({ isDarkTheme }) => {
  const p_style = "text-xs md:text-sm lg:text-md xl:text-lg font-normal mb-2";
  const a_style = "hover:underline underline-offset-4";
  const ref_style =
    "text-xs md:text-sm lg:text-base xl:text-lg font-light mb-6";
  const img_style =
    "rounded-lg object-cover h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";
  const grid_style = "grid grid-cols-1 xl:grid-cols-2 gap-4";
  const image_width = 500;
  const image_height = 500;
  const ul_style = "list-disc ml-4";

  const data = [
    {
      title: "2nd Place in Codefest ICP Hub Indonesia Hackathon 7.0 (2024)",
      content: (
        <div>
          <p className={`${p_style}`}>
            As a Web3 Developer, I played a pivotal role to :
            <span>
              <ul className={ul_style}>
                <li>
                  Enhanced UX by seamlessly connected IDLs with the frontend via
                  Agent.js.
                </li>
                <li>
                  Secure transactions and streamlined asset management with Plug
                  Wallet and Pinata IPFS.
                </li>
              </ul>
            </span>
          </p>
          <p className={`${ref_style}`}>
            References :
            <span>
              <ul className={ul_style}>
                <li>
                  <a
                    href="https://www.instagram.com/p/DDWSw-bybzJ/?utm_source=ig_web_button_share_sheet"
                    className={a_style}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram Post From Universitas Ciputra (Slide 2)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/p/DCYu6fMzAoI/?utm_source=ig_web_button_share_sheet"
                    className={a_style}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram Post From Codefest Indonesia (Slide 2)
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1fgkQQEl2YKP7gZ1k4PLUiSzHU0tn_dyU/view?usp=sharing"
                    className={a_style}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Winner Certificate
                  </a>
                </li>
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
              src={photo_with_lecturer}
              alt="startup template"
              width={image_width}
              height={image_height}
              className={img_style}
            />
            <img
              src={codefest_ig}
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
      title:
        "1st Place in AI For Impact Innovation Challenge Competition (2023)",
      content: (
        <div>
          <p className={p_style}>
            As an App Designer, I played a pivotal role in crafting an
            exceptional user experience through creative and innovative app
            design on A3 paper.
          </p>
          <p className={`${ref_style}`}>
            References :
            <span>
              <ul className={ul_style}>
                <li>
                  <a
                    href="https://www.kompas.com/edu/read/2023/11/13/094059871/wsu-hadirkan-launch-pad-dorong-inovasi-pelajar-dan-mahasiswa-di-surabaya"
                    className={a_style}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Article on Kompas.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/p/C2EGCYFht-c/?utm_source=ig_web_button_share_sheet"
                    className={a_style}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram Post From Universitas Ciputra (Slide 1)
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1h7alWPpnG8YCevk7t-HIwhk9ScdwRQ7I/view"
                    className={a_style}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Winner Certificate
                  </a>
                </li>
              </ul>
            </span>
          </p>
          <div className={grid_style}>
            <img
              src={winner_photo_wsu}
              alt="startup template"
              width={image_width}
              height={image_height}
              className={img_style}
            />
            <img
              src={photo_with_lecturer_2}
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
      title: "3rd Place in UC Venture Startup Games Competition (2022)",
      content: (
        <div>
          <p className={p_style}>
            As an App Designer, I played a pivotal role in crafting an
            exceptional user experience through creative and innovative app
            design on A3 paper.
          </p>
          <p className={`${ref_style}`}>
            References :
            <span>
              <ul className={ul_style}>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1Vd7nJvJRUzimlYEQB0bLNKkizn-xyyzA/view?usp=sharing"
                    className={a_style}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Winner Certificate
                  </a>
                </li>
              </ul>
            </span>
          </p>
          <div className={grid_style}>
            <img
              src={terserah_team_photos}
              alt="startup template"
              width={image_width}
              height={image_height}
              className={img_style}
            />
            <img
              src={photo_with_judges_3}
              alt="startup template"
              width={image_width}
              height={image_height}
              className={img_style}
            />
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="mx-8 md:mx-24">
      <h1
        className={`text-3xl xl:text-6xl font-bold text-center bg-gradient-to-b ${
          isDarkTheme
            ? "from-white to-gray-400/80"
            : "from-black to-gray-300/80"
        } bg-clip-text text-transparent leading-normal pb-4 mb-10`}
      >
        Achievement
      </h1>{" "}
      <div>
        <Timeline data={data} />
      </div>
    </div>
  );
};

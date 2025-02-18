import { Timeline } from "@/components/ui/timeline";
import { a_style, grid_style, image_height, image_width, img_style, p_style, ref_style, ul_style } from "@/utils/style_helper";
import React from "react";
import certifate from "../assets/certificate.jpeg";

interface ExperienceProps {
  isDarkTheme: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ isDarkTheme }) => {
  const data = [
    {
      title: "Apple Developer Academy (2025)",
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
      title:
        "Informatics Student Union (Aug 2023 - Jun 2024)",
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
        Experience
      </h1>{" "}
      <div>
        <Timeline data={data} />
      </div>
    </div>
  );
};

import React from "react";

interface AboutProps {
  isDarkTheme: boolean
}

export const About: React.FC<AboutProps> = ({ isDarkTheme }) => {
  return (
    <div className="mx-8 md:mx-24">
      <h1
        className={`text-3xl xl:text-6xl font-bold text-center bg-gradient-to-b ${
          isDarkTheme
            ? "from-white to-gray-400/80"
            : "from-black to-gray-300/80"
        } bg-clip-text text-transparent leading-normal pb-4 mb-10`}
      >
        About Me
      </h1>{" "}
    </div>
  );
};

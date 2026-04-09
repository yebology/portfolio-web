import { CodeBlock } from "@/components/ui/code-block";
import { socialMedia } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const Home: React.FC = () => {
  const { isDarkTheme } = useTheme();

  const code = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Introduction {
    string public name = "Yobel Nathaniel Filipus";
    string public title = "Smart Contract Dev";
    string public funFact =
      "I talk to smart contracts more than humans! 🤖";

    function sayHello() external pure returns (string memory) {
        return "Hey there! Welcome to my smart contract! 🤖";
    }
}`;

  return (
    <div className="w-full max-w-full mx-8 md:mx-24">
      <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
        <div className="w-full flex-1 order-2 lg:order-none">
          <div className="flex flex-col space-y-4 mt-8 lg:mt-0 lg:space-y-6">
            <p className="text-lg opacity-80">Hi! I'm</p>
            <h1
              className={`text-3xl md:text-5xl xl:text-7xl font-bold bg-gradient-to-b ${
                isDarkTheme
                  ? "from-white to-gray-400/80"
                  : "from-black to-gray-300/80"
              } bg-clip-text text-transparent leading-tight`}
            >
              Yobel Nathaniel Filipus
            </h1>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-blue-600">
              <Typewriter
                words={["Smart Contract Dev", "Fullstack Dev", "Web3 Builder"]}
                cursor
                cursorBlinking
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1500}
                loop
              />
            </h2>
            <p className="text-sm lg:text-base xl:text-lg leading-relaxed max-w-2xl opacity-90">
              I'm a curious builder 🛠️ and blockchain enthusiast 🚀 with
              hands-on experience building on{" "}
              <span className="font-bold">EVM, SVM, and ICP networks</span>.
              Experienced in developing{" "}
              <span className="font-bold">
                DAO-based systems, UUPS, and ERC-20-721-1155 smart contracts
              </span>
              . Always exploring new ways to push Web3 forward with fresh ideas!
              ✨
            </p>
            <div className="flex flex-row space-x-3 pt-2">
              {socialMedia.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border rounded-xl p-3 cursor-pointer transition-all duration-200 hover:scale-110 ${
                    isDarkTheme
                      ? "border-slate-100/30 hover:bg-slate-700/50"
                      : "border-zinc-400 hover:bg-zinc-200"
                  }`}
                  aria-label={item.title}
                >
                  <item.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden flex-1 md:flex items-center justify-center order-1 lg:order-none">
          <CodeBlock
            code={code}
            language="sol"
            filename="Introduction.sol"
          />
        </div>
      </div>
    </div>
  );
};

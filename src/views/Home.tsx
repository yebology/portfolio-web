import { CodeBlock } from "@/components/ui/code-block";
import { socialMedia } from "@/utils/list";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

interface HomeProps {
  isDarkTheme: boolean;
}

export const Home: React.FC<HomeProps> = ({ isDarkTheme }) => {
  const code = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Introduction {
    string public name = "Yobel Nathaniel Filipus";
    string public title = "Blockchain Developer";
    string public funFact =
      "I talk to smart contracts more than humans! 🤖";

    function sayHello() external pure returns (string memory) {
        return "Hey there! Welcome to my smart contract! 🤖";
    }
}`;

  return (
    <div className="relative w-full max-w-full">
      <div className="flex flex-col lg:flex-row mx-8 md:mx-24 lg:space-x-8">
        <div className="w-full flex-1 order-2 lg:order-none">
          <div className="flex flex-col space-y-3 mt-8 lg:mt-0 lg:space-y-6">
            <h1 className="text-xl">Hi! I'm</h1>{" "}
            <h1
              className={`text-5xl xl:text-7xl font-bold bg-gradient-to-b ${
                isDarkTheme
                  ? "from-white to-gray-400/80"
                  : "from-black to-gray-300/80"
              } bg-clip-text text-transparent`}
            >
              Yobel Nathaniel Filipus
            </h1>
            <h2
              className={`text-3xl xl:text-4xl font-semibold text-blue-600`}
            >
              <Typewriter
                words={["Blockchain Developer"]}
                cursor
                cursorBlinking
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-sm xl:text-md">
              {" "}
              I'm a lifelong learner passionate about Blockchain Development,
              with experience building on Ethereum, Solana, and ICP. Blockchain
              isn't just code to me—it’s a way to reshape finance, supply
              chains, and digital identity. I thrive on building and
              experimenting, always looking for new ways to push Web3 forward
              with innovative solutions.
            </p>
            <div className="flex flex-row space-x-2">
              {socialMedia.map((item, _) => (
                <div className="border border-gray-300 rounded-xl p-3 cursor-pointer hover:scale-105 duration-200 hover:bg-slate-400 hover:bg-opacity-50">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <item.icon className="text-sm" />{" "}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden flex-1 md:flex items-center justify-center order-1 lg:order-none">
          <CodeBlock
            code={code}
            language="sol"
            filename="Introduction.sol"
            isDarkTheme={isDarkTheme}
          />
        </div>
      </div>
    </div>
  );
};

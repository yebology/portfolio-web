import { BentoStats } from "@/components/ui/bento-stats";
import { socialMedia } from "@/utils/list";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export const Home: React.FC = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div className="w-full max-w-full px-6 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
        {/* Left */}
        <div className="w-full flex-1 order-2 lg:order-none">
          <div className="flex flex-col gap-5 mt-10 lg:mt-0 lg:gap-7">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${
                  isDarkTheme
                    ? "border-violet-500/20 bg-violet-500/10 text-violet-300"
                    : "border-violet-500/20 bg-violet-50 text-violet-600"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-4xl md:text-5xl xl:text-7xl font-bold tracking-tight leading-[1.1] ${
                isDarkTheme ? "text-white" : "text-zinc-900"
              }`}
            >
              Yobel Nathaniel
              <br />
              <span className="text-gradient">Filipus</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xl md:text-2xl xl:text-3xl font-semibold"
            >
              <span className={isDarkTheme ? "text-zinc-400" : "text-zinc-500"}>
                {"// "}
              </span>
              <span className="text-violet-400">
                <Typewriter
                  words={["Web3 Builder", "Fullstack Dev", "Smart Contract Dev"]}
                  cursor
                  cursorBlinking
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={2000}
                  loop
                />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`text-sm lg:text-base xl:text-lg leading-relaxed max-w-xl ${
                isDarkTheme ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              I build things that move money, verify truth, and protect
              protocols. Shipped across{" "}
              <span className={`font-semibold ${isDarkTheme ? "text-zinc-200" : "text-zinc-700"}`}>
                EVM, SVM, Stellar, Sui, and ICP
              </span>
              . Currently exploring where{" "}
              <span className={`font-semibold ${isDarkTheme ? "text-zinc-200" : "text-zinc-700"}`}>
                AI meets on-chain systems
              </span>{" "}
              to make Web3 smarter, safer, and more accessible.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-row gap-3 pt-2"
            >
              {socialMedia.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-xl p-3 transition-colors duration-200 ${
                    isDarkTheme
                      ? "bg-white/[0.04] hover:bg-violet-500/10 border border-white/[0.06] hover:border-violet-500/30"
                      : "bg-black/[0.03] hover:bg-violet-50 border border-black/[0.06] hover:border-violet-500/30"
                  }`}
                  aria-label={item.title}
                >
                  <item.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right — Bento Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="hidden lg:flex flex-1 items-center justify-center order-1 lg:order-none"
        >
          <BentoStats />
        </motion.div>
      </div>
    </div>
  );
};

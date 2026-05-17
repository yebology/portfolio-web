"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  isDarkTheme: boolean;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateHeight, 150);
    };
    window.addEventListener("resize", debouncedResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedResize);
    };
  }, [updateHeight]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans xl:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="flex justify-start md:gap-10 mb-12 xl:mb-20"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className={`h-10 absolute left-3 xl:left-3 w-10 rounded-full flex items-center justify-center ${
                  item.isDarkTheme
                    ? "bg-violet-500/20 border border-violet-500/30"
                    : "bg-violet-100 border border-violet-200"
                }`}
              >
                <div className="h-3 w-3 rounded-full bg-violet-500" />
              </div>
              <h3
                className={`hidden md:block text-lg md:pl-20 lg:text-2xl font-bold ${
                  item.isDarkTheme ? "text-white" : "text-zinc-900"
                }`}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className={`md:hidden block text-xl mb-4 text-left font-bold ${
                  item.isDarkTheme ? "text-white" : "text-zinc-900"
                }`}
              >
                {item.title}
              </h3>
              {item.content}
            </div>
          </motion.div>
        ))}

        {/* Animated progress line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-zinc-700/30 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-violet-500 via-fuchsia-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

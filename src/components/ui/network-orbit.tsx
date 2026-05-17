import React from "react";
import { useTheme } from "@/context/ThemeContext";

const networks = [
  { name: "EVM", color: "#627EEA" },
  { name: "SVM", color: "#9945FF" },
  { name: "Stellar", color: "#6366F1" },
  { name: "Sui", color: "#4DA2FF" },
  { name: "ICP", color: "#29ABE2" },
];

export const NetworkOrbit: React.FC = () => {
  const { isDarkTheme } = useTheme();
  const radius = 180; // orbit radius in px

  return (
    <div className="relative w-[420px] h-[420px] xl:w-[480px] xl:h-[480px]">
      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-24 h-24 rounded-full blur-3xl ${
            isDarkTheme ? "bg-violet-500/15" : "bg-violet-400/10"
          }`}
        />
      </div>

      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-violet-500" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-violet-400/40 animate-ping" />
        </div>
      </div>

      {/* Orbit ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`rounded-full border ${
            isDarkTheme ? "border-white/[0.04]" : "border-black/[0.04]"
          }`}
          style={{ width: radius * 2, height: radius * 2 }}
        />
      </div>

      {/* Orbiting nodes — using CSS keyframes for smooth infinite rotation */}
      <div
        className="absolute inset-0 animate-spin-slow"
        style={{ animationDuration: "30s" }}
      >
        {networks.map((network, i) => {
          const angle = (360 / networks.length) * i;
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;

          return (
            <div
              key={network.name}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              {/* Counter-rotate so text stays upright */}
              <div
                className="animate-spin-slow"
                style={{
                  animationDuration: "30s",
                  animationDirection: "reverse",
                }}
              >
                <div className="relative flex flex-col items-center">
                  {/* Glow */}
                  <div
                    className="absolute -inset-2 rounded-full blur-lg opacity-30"
                    style={{ backgroundColor: network.color }}
                  />
                  {/* Node */}
                  <div
                    className={`relative w-14 h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center border ${
                      isDarkTheme
                        ? "bg-zinc-900/90 border-white/[0.08]"
                        : "bg-white/90 border-black/[0.06]"
                    }`}
                    style={{
                      boxShadow: `0 0 24px -4px ${network.color}30`,
                    }}
                  >
                    <span
                      className="text-[10px] xl:text-xs font-bold font-mono"
                      style={{ color: network.color }}
                    >
                      {network.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

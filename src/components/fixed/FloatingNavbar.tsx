import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBriefcase, IconCode, IconHome, IconTrophy } from "@tabler/icons-react";
import React from "react";

interface FloatingNavbarProps {
    isDarkTheme: boolean
}

export const FloatingNavbar : React.FC<FloatingNavbarProps> = ({ isDarkTheme }) => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/experience",
    },
    // {
    //   title: "Achievement",
    //   icon: (
    //     <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "/achievement",
    // },
    {
      title: "Project",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/project",
    },
  ];

  return (
    <div className="flex md:hidden items-center justify-center relative w-full">
          <FloatingDock items={links} isDarkTheme={ isDarkTheme } />
    </div>
  );
};

import { navList } from "@/utils/list";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  currentPageId: number;
  setCurrentPageId: React.Dispatch<React.SetStateAction<number>>;
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPageId,
  setCurrentPageId,
  isDarkTheme,
  setIsDarkTheme,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between py-8 items-center mx-8 md:mx-24 max-w-full">
      <h1 className="font-bold text-xl">Yobz.io</h1>
      <div className="hidden md:flex">
        <div className="p-4 flex justify-between space-x-6 items-center">
          {navList.map((value, index) => (
            <h1
              onClick={() => {
                setCurrentPageId(index);
                navigate(value.url);
              }}
              className={`cursor-pointer ${
                index === currentPageId
                  ? "text-gray-800 bg-zinc-300 rounded-full px-4 py-1"
                  : "hover:bg-zinc-400 hover:bg-opacity-50 rounded-full px-4 py-1"
              }`}
            >
              {value.title}
            </h1>
          ))}
        </div>
      </div>
      <div>
        {isDarkTheme ? (
          <Moon
            className="cursor-pointer"
            onClick={() => {
              setIsDarkTheme(!isDarkTheme);
            }}
          />
        ) : (
          <Sun
            className="cursor-pointer"
            onClick={() => {
              setIsDarkTheme(!isDarkTheme);
            }}
          />
        )}
      </div>
    </div>
  );
};

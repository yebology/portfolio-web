import { navList } from "@/utils/list";
import { Moon, Sun } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({
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
                sessionStorage.setItem("currentPageId", index.toString());
                // setCurrentPageId(index);
                navigate(value.url);
              }}
              className={`cursor-pointer ${
                index === Number(sessionStorage.getItem("currentPageId") || 0)
                  ? "text-gray-800 bg-zinc-300 rounded-full px-4 py-1"
                  : "hover:bg-zinc-400 hover:bg-opacity-50 rounded-full px-4 py-1"
              }`}
            >
              {value.title}
            </h1>
          ))}
        </div>
      </div>
      <div
        className={`rounded-xl border p-2 ${
          isDarkTheme ? "border-slate-100" : "border-zinc-900"
        }`}
      >
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

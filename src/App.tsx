import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Navbar } from "./components/fixed/Navbar";
import { useEffect, useState } from "react";
import { Achievement } from "./views/Achievement";
import { Project } from "./views/Project";
import { Footer } from "./components/fixed/Footer";
import { Experience } from "./views/Experience";
import { FloatingNavbar } from "./components/fixed/FloatingNavbar";

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  useEffect(() => {
  }, [isDarkTheme]);

  return (
    <div
      className={`${
        isDarkTheme ? "bg-zinc-900 text-gray-300" : "bg-slate-100 text-gray-600"
      } overflow-x-hidden flex flex-col font-poppins min-h-screen w-screen xl:max-h-screen`}
    >
      <Navbar
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home isDarkTheme={isDarkTheme} />} />
          <Route
            path="/experience"
            element={<Experience isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/achievement"
            element={<Achievement isDarkTheme={isDarkTheme} />}
          />
          <Route
            path="/project"
            element={<Project isDarkTheme={isDarkTheme} />}
          />
        </Routes>
      </div>
      <FloatingNavbar isDarkTheme={isDarkTheme} />
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;

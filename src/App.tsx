import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Particles } from "./components/magicui/particles";
import { Navbar } from "./components/fixed/Navbar";
import { useEffect, useState } from "react";
import { About } from "./views/About";
import { Project } from "./views/Project";
import { Footer } from "./components/fixed/Footer";

function App() {
  const [currentPageId, setCurrentPageId] = useState<number>(0);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const particleColor = isDarkTheme ? "#ffffff" : "#000000";

  useEffect(() => {}, [currentPageId, isDarkTheme]);

  return (
    <div
      className={`${
        isDarkTheme ? "bg-zinc-900 text-gray-300" : "bg-slate-100 text-gray-600"
      } overflow-x-hidden flex flex-col font-poppins min-h-screen w-screen xl:max-h-screen`}
    >
      <Particles color={particleColor} />
      <Navbar
        setCurrentPageId={setCurrentPageId}
        currentPageId={currentPageId}
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home isDarkTheme={isDarkTheme} />} />
          <Route path="/about" element={<About isDarkTheme={isDarkTheme} />} />
          <Route
            path="/project"
            element={<Project isDarkTheme={isDarkTheme} />}
          />
        </Routes>
      </div>

      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;

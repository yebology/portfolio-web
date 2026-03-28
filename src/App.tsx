import { useState } from "react";
import { Navbar } from "./components/fixed/Navbar";
import { Footer } from "./components/fixed/Footer";
import { FloatingNavbar } from "./components/fixed/FloatingNavbar";
import { Home } from "./views/Home";
import { Experience } from "./views/Experience";
import { Achievement } from "./views/Achievement";
import { Project } from "./views/Project";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  return (
    <div
      className={`${
        isDarkTheme ? "bg-zinc-900 text-gray-300" : "bg-slate-100 text-gray-600"
      } overflow-x-hidden flex flex-col font-poppins min-h-screen w-screen`}
    >
      <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

      <main className="flex-1">
        <section id="home" className="min-h-[80vh] flex items-center py-12">
          <Home isDarkTheme={isDarkTheme} />
        </section>

        <div className={`mx-8 md:mx-24 border-t ${isDarkTheme ? "border-slate-100/10" : "border-zinc-200"}`} />

        <section id="experience" className="py-20">
          <Experience isDarkTheme={isDarkTheme} />
        </section>

        <div className={`mx-8 md:mx-24 border-t ${isDarkTheme ? "border-slate-100/10" : "border-zinc-200"}`} />

        <section id="achievement" className="py-20">
          <Achievement isDarkTheme={isDarkTheme} />
        </section>

        <div className={`mx-8 md:mx-24 border-t ${isDarkTheme ? "border-slate-100/10" : "border-zinc-200"}`} />

        <section id="project" className="py-20">
          <Project isDarkTheme={isDarkTheme} />
        </section>      </main>

      <FloatingNavbar isDarkTheme={isDarkTheme} />
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;

import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Navbar } from "./components/fixed/Navbar";
import { Footer } from "./components/fixed/Footer";
import { FloatingNavbar } from "./components/fixed/FloatingNavbar";
import { Home } from "./views/Home";
import { Experience } from "./views/Experience";
import { Achievement } from "./views/Achievement";
import { Certification } from "./views/Certification";
import { Project } from "./views/Project";

function AppContent() {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`${
        isDarkTheme ? "bg-zinc-900 text-gray-300" : "bg-slate-100 text-gray-600"
      } overflow-x-hidden flex flex-col font-poppins min-h-screen w-screen`}
    >
      <Navbar />

      <main className="flex-1">
        <section id="home" className="min-h-[60vh] md:min-h-[80vh] flex items-center py-12">
          <Home />
        </section>

        <div className={`mx-8 md:mx-24 border-t ${isDarkTheme ? "border-slate-100/10" : "border-zinc-200"}`} />

        <section id="experience" className="py-20">
          <Experience />
        </section>

        <div className={`mx-8 md:mx-24 border-t ${isDarkTheme ? "border-slate-100/10" : "border-zinc-200"}`} />

        <section id="achievement" className="py-20">
          <Achievement />
        </section>

        <div className={`mx-8 md:mx-24 border-t ${isDarkTheme ? "border-slate-100/10" : "border-zinc-200"}`} />

        <section id="certification" className="py-20">
          <Certification />
        </section>

        <div className={`mx-8 md:mx-24 border-t ${isDarkTheme ? "border-slate-100/10" : "border-zinc-200"}`} />

        <section id="project" className="py-20">
          <Project />
        </section>
      </main>

      <FloatingNavbar />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Navbar } from "./components/fixed/Navbar";
import { Footer } from "./components/fixed/Footer";
import { FloatingNavbar } from "./components/fixed/FloatingNavbar";
import { GradientBackground } from "./components/ui/gradient-bg";
import { Home } from "./views/Home";
import { Experience } from "./views/Experience";
import { Skills } from "./views/Skills";
import { Achievement } from "./views/Achievement";
import { Certification } from "./views/Certification";
import { Project } from "./views/Project";

function AppContent() {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className={`${
        isDarkTheme ? "bg-black text-zinc-300" : "bg-white text-zinc-600"
      } flex flex-col font-sans min-h-screen transition-colors duration-500`}
    >
      <GradientBackground />
      <Navbar />

      <main className="flex-1">
        <section
          id="home"
          className="min-h-[70vh] md:min-h-[85vh] flex items-center py-16"
        >
          <Home />
        </section>

        {/* Divider */}
        <div className="mx-6 md:mx-16 lg:mx-24">
          <div className={`h-px ${isDarkTheme ? "bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" : "bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"}`} />
        </div>

        <section id="experience" className="py-8 md:py-12">
          <Experience />
        </section>

        <div className="mx-6 md:mx-16 lg:mx-24">
          <div className={`h-px ${isDarkTheme ? "bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" : "bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"}`} />
        </div>

        <section id="skills" className="py-8 md:py-12">
          <Skills />
        </section>

        <div className="mx-6 md:mx-16 lg:mx-24">
          <div className={`h-px ${isDarkTheme ? "bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" : "bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"}`} />
        </div>

        <section id="achievement" className="py-8 md:py-12">
          <Achievement />
        </section>

        <div className="mx-6 md:mx-16 lg:mx-24">
          <div className={`h-px ${isDarkTheme ? "bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" : "bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"}`} />
        </div>

        <section id="certification" className="py-8 md:py-12">
          <Certification />
        </section>

        <div className="mx-6 md:mx-16 lg:mx-24">
          <div className={`h-px ${isDarkTheme ? "bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" : "bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"}`} />
        </div>

        <section id="project" className="py-8 md:py-12">
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

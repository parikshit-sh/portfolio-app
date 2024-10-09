import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import PreLoader from "./components/Preloader";
import Hero from "./components/Hero";
import About from "./components/About";
import Lenis from "@studio-freight/lenis";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  const [showPreLoader, setShowPreLoader] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    if (!isMobile) {
      const lenis = new Lenis({ smooth: true });

      const update = (time) => {
        lenis.raf(time);
        requestAnimationFrame(update);
      };

      requestAnimationFrame(update);

      return () => {
        lenis.destroy();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile && showPreLoader) {
      const timer = setTimeout(() => {
        setShowPreLoader(false);
        setShowNavbar(true);
        setIsLoading(false);
      }, 4000); 

      return () => clearTimeout(timer);
    } else {
      setShowNavbar(true);
      setIsLoading(false);
    }
  }, [isMobile, showPreLoader]);

  if (isLoading) {
    return <div className="bg-[#FAF9F6] min-h-screen"></div>;
  }

  return (
    <Router>
      <div className="overflow-wrapper bg-[#FAF9F6] min-h-screen">
        <AnimatePresence>
          {!isMobile && showPreLoader && (
            <PreLoader setShowPreLoader={setShowPreLoader} setShowNavbar={setShowNavbar} />
          )}
          {showNavbar && <Navbar key="navbar" />}
          <Hero key="hero" />
          <About key="about" />
          <Projects key="projects" />
          <Footer key="footer" />
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;

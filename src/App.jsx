import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import PageReveal from "./components/PageReveal";
import Hero from "./components/Hero";
import About from "./components/About";
import Lenis from "@studio-freight/lenis";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skill";

const App = () => {
  const [showPageReveal, setShowPageReveal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;

   
    if (screenWidth <= 800) {
      setIsMobile(true);
      setShowNavbar(true); 
    } else {
      setShowPageReveal(true);
    }

    
    if (screenWidth > 1024) {
      const lenis = new Lenis({
        smooth: true,
      });

      
      const update = (time) => {
        lenis.raf(time);
        requestAnimationFrame(update);
      };

      requestAnimationFrame(update);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (!isMobile && showPageReveal) {
      const timer = setTimeout(() => {
        setShowPageReveal(false);
        setShowNavbar(true);
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [isMobile, showPageReveal]);

  const handlePageRevealComplete = () => {
    setShowPageReveal(false);
    setShowNavbar(true);
  };

  return (
    <Router>
      <div className="overflow-wrapper">
        <div className="bg-[#121212] min-h-screen">
          <AnimatePresence>
            {!isMobile && showPageReveal && (
              <PageReveal
                key="page-reveal"
                onComplete={handlePageRevealComplete}
              />
            )}
            {showNavbar && <Navbar key="navbar" />}
            <Hero key="hero" />
            <About key="about" />
            <Projects key="projects" />
            <Skills key="skills" />
            <Footer key="footer" />
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
};

export default App;

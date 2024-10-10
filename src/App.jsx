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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

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
  }, []);

  useEffect(() => {
    if (!isMobile && showPreLoader) {
      const timer = setTimeout(() => {
        setShowPreLoader(false);
        setShowNavbar(true);
      }, 4000); 

      return () => clearTimeout(timer);
    } else {
      setShowNavbar(true);
    }
  }, [isMobile, showPreLoader]);

  return (
    <>
      {!isMobile && showPreLoader && (
        <PreLoader setShowPreLoader={setShowPreLoader} setShowNavbar={setShowNavbar} />
      )}
      <Router>
        <div className="app-container ">
          <AnimatePresence>
            {showNavbar && <Navbar key="navbar" />}
            <Hero key="hero" />
            <div className="content-wrapper">
              <About key="about" />
              <Projects key="projects" />
              <Footer key="footer" />
            </div>
          </AnimatePresence>
        </div>
      </Router>
    </>
  );
};

export default App;

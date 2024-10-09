import { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import PreLoader from "./components/Preloader";
import Hero from "./components/Hero";
import About from "./components/About";
import Lenis from "@studio-freight/lenis";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showPreLoader, setShowPreLoader] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    if (!isMobile) {
      const lenis = new Lenis({ smooth: true });

      const update = (time) => {
        lenis.raf(time);
        requestAnimationFrame(update);
      };

      requestAnimationFrame(update);

      // Refresh ScrollTrigger on load and resize
      const refreshScrollTrigger = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener('load', refreshScrollTrigger);
      window.addEventListener('resize', refreshScrollTrigger);

      return () => {
        lenis.destroy();
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('load', refreshScrollTrigger);
        window.removeEventListener('resize', refreshScrollTrigger);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    // Refresh ScrollTrigger after preloader is hidden
    if (!showPreLoader) {
      ScrollTrigger.refresh();
    }
  }, [showPreLoader]);

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.pageYOffset);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useLayoutEffect(() => {
    const forceReflow = () => {
      document.body.offsetHeight;
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', forceReflow);

    return () => {
      window.removeEventListener('load', forceReflow);
    };
  }, []);

  return (
    <>
      {showPreLoader && (
        <PreLoader setShowPreLoader={setShowPreLoader}
         setShowNavbar={setShowNavbar} />
      )}
      <Router>
        <div className="overflow-wrapper">
          <div className="bg-[#FAF9F6] min-h-screen">
            <AnimatePresence>
              {showNavbar && <Navbar key="navbar" />}
              <Hero key="hero" />
              <About key="about" />
              <Projects key="projects" />
              <Footer key="footer" />
            </AnimatePresence>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;

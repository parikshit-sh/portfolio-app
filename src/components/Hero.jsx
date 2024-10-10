import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../index.css";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return (
    <motion.div 
      className="hero-container"
      style={{ opacity }}
    >
      <div className="hero-content">
        <h1 className="hero-head">
          <span className="cursive">P</span>ARIKSHIT{" "}
          <span className="cursive">S</span>HARMA
        </h1>
        <h1 className="hero-head">
          FRONT END{" "}
          <span className="developer">DEVELOPER</span>
        </h1>
        <h1 className="icon uppercase">
          Folio
          <span className="developer">&copy;</span>2024
          <span className="developer">⚗️✨</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default Hero;

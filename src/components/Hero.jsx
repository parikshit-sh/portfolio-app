import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../index.css";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [heroHeight, setHeroHeight] = useState('100vh');

  useEffect(() => {
    const setHeight = () => {
      setTimeout(() => {
        const height = window.innerHeight;
        setHeroHeight(`${height}px`);
        document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);
      }, 100); 
    };

    setHeight();

    window.addEventListener('resize', setHeight);
    window.addEventListener('orientationchange', setHeight);

    return () => {
      window.removeEventListener('resize', setHeight);
      window.removeEventListener('orientationchange', setHeight);
    };
  }, []);

  return (
    <>
      <motion.div 
        className="hero-container"
        ref={heroRef} 
        style={{ opacity, height: heroHeight }}
      >
        <div className="hero-content">
          <h1 className="hero-head" style={{fontFamily: 'PPEditorial'}}>
            <span className="cursive">P</span>ARIKSHIT{" "}
            <span className="cursive">S</span>HARMA
          </h1>
          <h1 className="hero-head" style={{fontFamily: 'PPEditorial'}}>
            FRONT END{" "}
            <span className="developer">DEVELOPER</span>
          </h1>
          <h1 className="icon uppercase" style={{fontFamily: 'PPEditorial'}}>
            Folio
            <span className="developer">&copy;</span>2024
            <span className="developer">⚗✨</span>
          </h1>
        </div>
      </motion.div>
      <div className="hero-spacer mb-10" style={{ height: heroHeight }}></div>
    </>
  );
};

export default Hero;

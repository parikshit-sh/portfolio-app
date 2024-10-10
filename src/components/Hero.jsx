import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../index.css";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const [heroHeight, setHeroHeight] = useState('100vh');

  useEffect(() => {
    const handleResize = () => {
      if (heroRef.current) {
        const height = `${window.innerHeight}px`;
        setHeroHeight(height);
        heroRef.current.style.height = height;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div 
      className="hero-container flex items-center justify-center" 
      ref={heroRef} 
      style={{ 
        opacity, 
        height: heroHeight,
        minHeight: heroHeight,
        paddingTop: 0,
        paddingBottom: 0
      }}
    >
      <section className="hero w-full h-full flex items-center justify-center">
        <div className="hero-content">
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
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;

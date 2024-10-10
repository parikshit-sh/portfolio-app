import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../index.css";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleResize = () => {
      if (heroRef.current) {
        heroRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <motion.div 
      className="hero-container"
      ref={heroRef} 
      style={{ opacity }}
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
          <span className="developer">⚗️✨</span>
        </h1>
      </div>
   
    </motion.div>
      <div className="hero-spacer"></div>
      </>
  );
};

export default Hero;

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../index.css";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const heroElement = heroRef.current;
    const heroHeight = heroElement.offsetHeight;
    
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition <= heroHeight) {
        heroElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        className="hero-container"
        ref={heroRef} 
        style={{ opacity }}
      >
        <div className="hero-content">
          <h1 className="hero-name">
            <span className="cursive">P</span>ARIKSHIT{" "}
            <span className="cursive">S</span>HARMA
          </h1>
          <h1 className="hero-head">
            FRONT END{" "}
            <span className="developer">DEVELOPER</span>
          </h1>
          <h1 className="icon">
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

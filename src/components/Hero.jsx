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

    const handleScroll = () => {
      sessionStorage.setItem('scrollPosition', window.pageYOffset);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Restore scroll position on reload
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
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
      <section className="hero w-full lg:pt-[12vh]">
        <div className="hero-content">
          <h1 className="hero-name text-[3vw] sm:text-[3vw] 
          md:text-[4vw] lg:text-[5vw] xl:text-[6vw] uppercase
           tracking-tighter text-center " style={{ fontSize: 'clamp(1rem, 5.3vw, 5.3rem)' }}>
            <span className="cursive p-[0.4vw] uppercase" style={{ fontSize: 'clamp(1rem, 7vw, 7rem)' }}>P</span>ARIKSHIT{" "}
            <span className="cursive p-[0.2vw]" style={{ fontSize: 'clamp(1rem, 7vw, 7rem)' }}>S</span>HARMA
          </h1>
          <h1 className="hero-head" style={{ fontSize: 'clamp(1rem,5.3vw,5.3rem)' }}>
          FRONT END{" "}
          <span 
          className="developer" style={{ fontSize: 'clamp(1rem, 6.5vw, 6.5rem)' }}>DEVELOPER</span>
          </h1>
         
         
          
          <h1 className="icon text-[1.5vw] sm:text-[1.8vw] md:text-[2vw] lg:text-[2.5vw] xl:text-[3vw] tracking-tighter uppercase" style={{ fontSize: 'clamp(1rem, 5.3vw, 5.3rem)' }}>
            
          Folio
          <span className="developer" style={{ fontSize: 'clamp(1rem, 6.5vw, 6.5rem)' }}>&copy;</span>2024
          <span 
          className="developer" style={{ fontSize: 'clamp(1rem, 6.5vw, 6.5rem)' }}>⚗️✨</span>
          </h1>
      
        </div>
       
      </section>
    </motion.div>
  );
};

export default Hero;

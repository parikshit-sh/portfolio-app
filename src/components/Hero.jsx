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
      className="hero-container" 
      ref={heroRef} 
      style={{ opacity, height: heroHeight, minHeight: heroHeight }}
    >
      <section className="hero md:pt-[20vh]">
        <div className="hero-content">
          <h1 className="hero-name text-[3vw] sm:text-[3vw] md:text-[4vw] lg:text-[5vw] xl:text-[6vw] tracking-tighter text-center " style={{ fontSize: 'clamp(1rem, 6vw, 6rem)' }}>
            <span className="cursive p-[0.4vw]" style={{ fontSize: 'clamp(1rem, 8vw, 8rem)' }}>P</span>ARIKSHIT{" "}
            <span className="cursive p-[0.2vw]" style={{ fontSize: 'clamp(1rem, 8vw, 8rem)' }}>S</span>HARMA
          </h1>
          <h1 className="hero-head" style={{ fontSize: 'clamp(1rem, 6vw, 6rem)' }}>
            FRONT END <span className="developer" style={{ fontSize: 'clamp(1rem, 7.2vw, 7.2rem)' }}>DEVELOPER</span>
          </h1>
          <h1 className="icon text-[1.5vw] sm:text-[1.8vw] md:text-[2vw] lg:text-[2.5vw] xl:text-[3vw] tracking-tighter uppercase" style={{ fontSize: 'clamp(1rem, 6vw, 6rem)' }}>
          Folio
          <span className="developer" style={{ fontSize: 'clamp(1rem, 7.2vw, 7.2rem)' }}>&copy;</span>2024<span 
          className="developer" style={{ fontSize: 'clamp(1rem, 7.2vw, 7.2rem)' }}>✨</span>
          </h1>
          <p className="tracking-tighter pt-[1vh] font-mono text-[1vw] md:text-[1.2vw] lg:text-[1.4vw] px-[1vw]">
            Turning ideas into dynamic digital experiences.
          </p>
          <div className="scroll-indicator flex justify-center items-center">
          <svg
            width="2vw"
            height="2vw"
            viewBox="0 0 24 24"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 16.29l4.29-4.29a1 1 0 00-1.42-1.42L12 13.17l-2.87-2.88a1 1 0 00-1.42 1.42L12 16.29z" />
          </svg>
        </div>
        </div>
       
      </section>
    </motion.div>
  );
};

export default Hero;

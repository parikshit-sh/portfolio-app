import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../index.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const heroAnimation = gsap.fromTo(
      ".hero",
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0, 
        y: -50,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top", 
          end: "+=500", 
          scrub: true, 
          pin: false,
          markers: false, 
          onLeaveBack: () => heroAnimation.progress(0), 
        },
      }
    );
  }, []);

  return (
    <div className="sticky">
      <section className="hero no-select bg-cover bg-center h-screen flex items-center justify-center text-center text-black relative pt-20">
        <div className="hero-content max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-6xl relative z-10">
          <h1 className="hero-name text-2xl md:text-3xl lg:text-5xl xl:text-6xl sm:text-2xl tracking-tighter text-center">
          PARIKSHIT{" "}
          SHARMA
          </h1>
          <h1 className="hero-head text-xl md:text-2xl lg:text-4xl xl:text-4xl tracking-tighter uppercase p-2">
            FRONT END Developer
          </h1>
          <h1 className="text-xl md:text-xl lg:text-3xl xl:text-4xl tracking-tighter uppercase">
            Folio<span className="copyright">&copy;</span>2024𖤓
          </h1>
          <p className="tracking-tighter pt-4 font-mono text-xs md:text-xs lg:text-base px-5">
            turning ideas into dynamic digital experiences.
          </p>
        </div>
        <div className="scroll-indicator absolute bottom-10 inset-x-0 flex justify-center items-center z-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 16.29l4.29-4.29a1 1 0 00-1.42-1.42L12 13.17l-2.87-2.88a1 1 0 00-1.42 1.42L12 16.29z" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Hero;

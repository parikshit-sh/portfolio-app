import { useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

const PageReveal = ({ onComplete }) => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 700){
   
    const timeline = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    
    timeline.to(".page-reveal", {
      y: "-100%",
      duration: 0.9,
      ease: "power2.inOut",
      delay: 0.1, 
    });
    
  }
  }, [onComplete]);

  return (
    <div className="page-reveal fixed top-0 left-0 w-full h-full z-50 bg-[#121212]">
     
    </div>
  );
};

PageReveal.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default PageReveal;
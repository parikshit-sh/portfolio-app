import { useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import '../index.css';

const PageReveal = ({ onComplete }) => {
  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

   
    gsap.set(".page-reveal", { visibility: "visible", opacity: 1 });

    timeline.to(".page-reveal", {
      y: "-100%",
      duration: 0.9,
      ease: "power2.inOut",
      delay: 0.2, 
    });
  }, [onComplete]);

  return (
    <div className="page-reveal fixed top-0 left-0 w-full h-full z-50"></div>
  );
};

PageReveal.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default PageReveal;

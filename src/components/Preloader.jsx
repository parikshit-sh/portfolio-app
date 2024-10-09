import { useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import "../preloader.css";

const Preloader = ({ setShowPreLoader, setShowNavbar }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowPreLoader(false);
        setShowNavbar(true);
      },
    });

    tl.to(".preloader", {
      duration: 0.6,
      ease: "power1.inOut", 
      y: "-100%",
      delay: 0.2
    });

  }, [setShowPreLoader, setShowNavbar]);

  return (
    <div className="preloader">
      {/* Add any content for your preloader here */}
    </div>
  );
};

Preloader.propTypes = {
  setShowPreLoader: PropTypes.func.isRequired,
  setShowNavbar: PropTypes.func.isRequired,
};

export default Preloader;

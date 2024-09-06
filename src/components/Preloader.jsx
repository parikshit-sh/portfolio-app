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
      duration: 0.8,
      ease: "power1.inOut", // Smooth ease-out effect for vertical slide
      y: "-100%", // Move the preloader upwards
      delay:0.2,
      borderBottomLeftRadius:"20%",
      borderBottomRightRadius:"20%"
    })
    .to(
      ".preloader-curved",
      {
        duration: 1.5,
        ease: "elastic.inOut(1, 0.75)", // Elastic ease for inertia/slingshot effect
        borderTopLeftRadius: "0%",
        borderTopRightRadius: "0%",
        y: "-100%", // Move the curved part up as well
      },
      0 // Sync both animations (preloader slide and curve effect)
    );

  }, [setShowPreLoader, setShowNavbar]);

  return (
    <div className="preloader flex flex-col">
      
     <div className="preloader-curved flex justify-center text-center text-9xl">
      <h1 className="text9xl"><span className="title text-9xl font-serif text-[#000080]">
        welcome</span></h1>
     </div>
     

    </div>
  );
};

Preloader.propTypes = {
  setShowPreLoader: PropTypes.func.isRequired,
  setShowNavbar: PropTypes.func.isRequired,
};

export default Preloader;

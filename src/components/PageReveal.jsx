import { useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";

const PageReveal = ({ onComplete }) => {
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 700) {
      const timeline = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Animate visibility and opacity first, then animate the reveal
      timeline.set(".page-reveal", { visibility: "visible", opacity: 1 })
              .to(".page-reveal", {
                y: "-100%",
                duration: 0.9,
                ease: "power2.inOut",
                delay: 0.1,
              })
              .set(".page-reveal", { visibility: "hidden", opacity: 0 }); // Hide after animation
    }
  }, [onComplete]);

  return (
    <div className="page-reveal fixed top-0 left-0 w-full h-full z-50 bg-[#191970]">
      {/* Content if needed */}
    </div>
  );
};

PageReveal.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default PageReveal;

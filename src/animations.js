import gsap from "gsap";

export const preLoaderAnim = (setShowPreLoader, setShowNavbar) => {
  const tl = gsap.timeline({
    onComplete: () => {
      // Hide preloader and show navbar when the animation is complete
      setShowPreLoader(false);
      setShowNavbar(true);
    },
  });

  tl.to(".preloader", {
    duration: 2,
    yPercent: -100, // Move the preloader upwards
    ease: "power4.inOut", // Gives the slingshot effect
    delay: 0.5,
  }).to(".preloader-curved", {
    duration: 1.5,
    borderRadius: "0%", // Animate the curve back to straight
    ease: "elastic.out(1, 0.75)", // Elastic slingshot-like effect
  });
};

import gsap from "gsap";

export const preLoaderAnim = () => {
  const tl = gsap.timeline();

  tl.to(".preloader", {
    duration: 1.5,
    height: "0vh",
    ease: "Power3.easeOut",
    onComplete: () => {
      document.querySelector(".preloader").style.display = "none";
      document.body.style.position = "static";
    },
  })
    
};

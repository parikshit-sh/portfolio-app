import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../index.css";
import Oasis from "../assets/images/oasis1.webp";
import Oasis2 from "../assets/images/oasis2.webp";
import Oasis3 from "../assets/images/oasis3.webp";
import Rentals from "../assets/images/rentals.webp";  
import Rentals2 from "../assets/images/rentals2.webp";
import Rentals3 from "../assets/images/rentals3.webp";
import tokenStats2 from "../assets/images/tokenStats.webp";
import tokenStats from "../assets/images/token.webp";
import tokenStats3 from "../assets/images/tokens2.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Plants Oasis",
    id: "01",
    description:
      "Ecommerce Plant Shop with sleek interface and responsive design. Offering a wide range of plants and planters for your home or office.",
    images: [Oasis, Oasis2, Oasis3],
    techUsed: ["ReactJS", "TailwindCSS", "Redux"],
    link: "https://github.com/parikshit-sh/token-stats-crypto",
    liveLink: "https://plants-oasis.vercel.app/",
    date: "2024"
  },
  {
    title: "Rentals",
    id: "02",
    description:
      "Rentals is a modern electronic car rental platform that offers a seamless user experience. Enjoy an intuitive design that adapts to all devices, allowing users to easily browse and reserve their ideal vehicle with minimal effort.",
    images: [Rentals, Rentals2, Rentals3],
    techUsed: ["ReactJS", "TailwindCSS"],
    link: "https://github.com/parikshit-sh/car-rental",
    liveLink: "https://rentals-rust.vercel.app/",
    date: "2024"
  },
  {
    title: "Token Stats",
    id: "03",
    description:
      "TokenStats is a cryptocurrency tracker. It provides real-time updates on cryptocurrency prices, market caps, and other essential metrics. With a minimal interface and responsive design.",
    images: [tokenStats, tokenStats2, tokenStats3],
    techUsed: ["NextJS", "TailwindCSS", "CoinGeckoAPI"],
    link: "https://github.com/parikshit-sh/token-stats-crypto",
    liveLink: "https://tokenstats.vercel.app/",
    date: "2023"
  },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [activeProject, setActiveProject] = useState(null);
  const projectRefs = useRef([]);
  const borderRefs = useRef([]);
  const animationCompletedRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    }
    window.addEventListener('resize', handleResize);

    // Animate border lines on scroll only once
    if (!animationCompletedRef.current) {
      borderRefs.current.forEach((border, index) => {
        gsap.fromTo(border, 
          { width: 0 },
          {
            width: "100%",
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: border,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none"
            },
            delay: index * 0.1, // Stagger effect
            onComplete: () => {
              if (index === borderRefs.current.length - 1) {
                animationCompletedRef.current = true;
              }
            }
          }
        );
      });
    }

    if (activeProject !== null) {
      gsap.to(`#project-details-${activeProject}`, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [activeProject]);

  const handleProjectClick = (id) => {
    if (activeProject === id) {
      gsap.to(`#project-details-${id}`, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => setActiveProject(null)
      });
    } else {
      if (activeProject !== null) {
        gsap.to(`#project-details-${activeProject}`, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in"
        });
      }
      setActiveProject(id);
    }
  };

  const handleProjectHover = (id, isEntering, event) => {
    const projectElement = projectRefs.current[id];
    const rect = projectElement.getBoundingClientRect();
    const mouseY = event.clientY - rect.top;
    const isFromTop = mouseY < rect.height / 2;

    if (!isMobile && isEntering) {
      gsap.fromTo(
        projectElement,
        { 
          backgroundImage: "linear-gradient(to bottom, black 0%, black 0%)",
          backgroundSize: "100% 0%",
          backgroundRepeat: "no-repeat"
        },
        {
          backgroundSize: "100% 100%",
          backgroundPosition: isFromTop ? "top" : "bottom",
          duration: 0.2,
          color: "#effd92",
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(projectElement, {
        backgroundSize: "100% 0%",
        duration: 0.2,
        ease: "power2.in",
        color: "black",
      });
    }
  };

  return (
    <section className="projects-section py-20 flex flex-col items-center" id="projects_">
      <div className="max-w-6xl w-full px-12">
      <h1 className="text-4xl lg:text-5xl mb-12 uppercase" id="prod">
          Projects
        </h1>
      </div>
      
      <div className="max-w-7xl w-full px-4">
  
        <div className="flex flex-col ">
          {projects.map((project, index) => (
            <div key={project.id} className="project-container">
              <div 
                ref={(el) => (borderRefs.current[index] = el)}
                className="border-t border-zinc-900 w-0"
              />
              <div 
                ref={(el) => (projectRefs.current[project.id] = el)}
                className={`project-row cursor-pointer 
                   flex justify-between
                  items-center text-black`}
                onClick={() => handleProjectClick(project.id)}
                onMouseEnter={(e) => handleProjectHover(project.id, true, e)}
                onMouseLeave={(e) => handleProjectHover(project.id, false, e)}
              >
                <h2 className="text-base p-4">{project.title}</h2>
                <div className="flex items-center gap-10">
                  <div className="tech-used hidden md:block text-base">
                    {project.techUsed.map((tech, index) => (
                      <span key={index} className="text-sm rounded-full px-2 py-1 ">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-base px-4">{project.date}</span>
                </div>
              </div>
              <div 
                id={`project-details-${project.id}`} 
                className="project-details overflow-hidden h-0 opacity-0"
              >
                <div className="py-6">
                  <p className="mb-4 text-3xl max-w-4xl">{project.description}</p>
                  <div className="flex mb-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="rounded-full text-[#effd92] bg-black px-4 py-2"
                    >
                      See Website
                    </a>
                  </div>
                  <div className="project-images gap-4 overflow-x-auto grid grid-cols-1 lg:grid-cols-3">
                    {project.images.slice(0, 3).map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        className="w-full h-auto object-cover rounded flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div 
            ref={(el) => (borderRefs.current[projects.length] = el)}
            className="border-t border-zinc-900 w-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
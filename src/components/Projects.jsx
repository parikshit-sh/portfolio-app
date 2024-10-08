import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../index.css";
import plantsOasis from "../assets/images/plants-1.webp"
import tokenStats from "../assets/images/token.webp"
import tokenStats2 from "../assets/images/tokens2.png"

const projects = [
  {
    title: "Plants Oasis",
    id: "01",
    description:
      "Ecommerce Plant Shop with sleek interface and responsive design. Offering a wide range of plants and planters for your home or office.",
    images: [plantsOasis],
    techUsed: ["ReactJS", "TailwindCSS", "Redux"],
    link: "https://github.com/parikshit-sh/token-stats-crypto",
    liveLink: "https://plants-oasis.vercel.app/",
    date: "2023"
  },
  {
    title: "Rentals",
    id: "02",
    description:
      "Rentals is a modern electronic car rental platform that offers a seamless user experience. Enjoy an intuitive design that adapts to all devices, allowing users to easily browse and reserve their ideal vehicle with minimal effort.",
    images: ["https://i.postimg.cc/FRdNR4XB/Rentals.png"],
    techUsed: ["ReactJS", "TailwindCSS"],
    link: "https://github.com/parikshit-sh/car-rental",
    liveLink: "https://rentals-rust.vercel.app/",
    date: "2023"
  },
  {
    title: "Token Stats",
    id: "03",
    description:
      "TokenStats is a cryptocurrency tracker. It provides real-time updates on cryptocurrency prices, market caps, and other essential metrics. With a minimal interface and responsive design.",
    images: [tokenStats, tokenStats2],
    techUsed: ["NextJS", "TailwindCSS", "CoinGeckoAPI"],
    link: "https://github.com/parikshit-sh/token-stats-crypto",
    liveLink: "https://tokenstats.vercel.app/",
    date: "2023"
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    if (activeProject !== null) {
      gsap.to(`#project-details-${activeProject}`, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });
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

      if (isEntering) {
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
            duration: 0.3,
            ease: "power2.out",
            color: "white"
          }
        );
      } else {
        gsap.to(projectElement, {
          backgroundSize: "100% 0%",
          color: "black",
          duration: 0.3,
          ease: "power2.in"
        });
      }
    
  };

  return (
    <section className="projects-section py-16 px-4" id="projects_">
      <div className="max-w-5xl mx-auto">
        <h1 className="about-head text-4xl mb-12 uppercase" id="prod">
          Projects
        </h1>
        <div className="flex flex-col gap-4 ">
          {projects.map((project) => (
            <div key={project.id} className="project-container">
              <div 
                ref={(el) => (projectRefs.current[project.id] = el)}
                className="project-row cursor-pointer border-y border-zinc-900 flex justify-between items-center"
                onClick={() => handleProjectClick(project.id)}
                onMouseEnter={(e) => handleProjectHover(project.id, true, e)}
                onMouseLeave={(e) => handleProjectHover(project.id, false, e)}
              >
                <h2 className="text-xl p-4">{project.title}</h2>
                <div className="flex items-center gap-4">
                  <div className="tech-used">
                    {project.techUsed.map((tech, index) => (
                      <span key={index} className="text-sm rounded-full px-2 py-1 mr-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500">{project.date}</span>
                </div>
              </div>
              <div 
                id={`project-details-${project.id}`} 
                className="project-details overflow-hidden h-0 opacity-0"
              >
                <div className="py-6">
                  <p className="mb-4 text-3xl">{project.description}</p>
                  <div className="flex mb-4">
                
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="rounded-full text-white bg-black px-4 py-2"
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { useEffect } from "react";
import { gsap } from "gsap";
import "../index.css";

const projects = [
  {
    title: "Token Stats",
    id: "02",
    description:
      "TokenStats is a cryptocurrency tracker. It provides real-time updates on cryptocurrency prices, market caps, and other essential metrics. With a minimal interface and responsive design.",
    images: [
      "https://i.postimg.cc/Xv3kQQGn/Untitled-design-1.png",
    ],
    techUsed: ["NextJS", "TailwindCSS", "CoinGeckoAPI"],
    link: "https://github.com/parikshit-sh/token-stats-crypto",
    liveLink: "https://tokenstats.vercel.app/",
  },
];

const Projects = () => {
  useEffect(() => {
    // GSAP animation for hover effect
    const cards = document.querySelectorAll(".project-card");
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.3,
        
          duration: 0.2,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
        
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    cards.forEach((card) => {

  

      gsap.set(card, { backgroundColor: "transparent" });
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          duration: 0.3,
        
          ease: "power2.out",
        });
   
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          duration: 0.3,
          backgroundColor: "transparent",
          ease: "power2.out",
        });
      
      });
    });
  }, []);

  return (
    <section className="projects-section py-16" id="projects_">
      <div className="max-w-5xl mx-auto">
        <h1 className="about-head text-4xl mb-12 uppercase no-select" id="prod">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 py-4 pt-8 projects">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-transparent border-white border-b rounded-lg rounded-b-none hover:shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col lg:flex-row items-center"
            >
              <div className="p-6 flex-1 flex flex-col justify-between w-full text-white">
                <div>
                  <h1 className="pTitle text-white text-7xl pb-4 lg:text-7xl select-none">
                    {project.title}
                  </h1>

                  <p className="p-des text-lg text-gray-200 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techUsed.map((tech, i) => (
                      <span
                        key={i}
                        className="tech-badge px-2 pt-4 rounded-md text-base font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="btns flex gap-1 font-semibold">
                  <a
                    href={project.link}
                    target="_blank"
                    className="btn mt-4 w-full hover:no-underline flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                      fill="#ffffff"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      {" "}
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="btn mt-4 w-full hover:no-underline flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                      width="25"
                      height="25"
                      viewBox="0 0 50 50"
                      className="mr-2"
                    >
                      <path d="M 8.03125 8.4570312 C 7.770375 8.4589063 7.5103125 8.5625312 7.3203125 8.7695312 C 3.3953125 13.041531 1 18.741 1 25 C 1 31.259 3.3953125 36.958469 7.3203125 41.230469 C 7.7003125 41.644469 8.3569063 41.643094 8.7539062 41.246094 L 10.882812 39.117188 C 11.265812 38.734187 11.263391 38.124656 10.900391 37.722656 C 7.8553906 34.352656 6 29.889 6 25 C 6 20.111 7.8553906 15.647344 10.900391 12.277344 C 11.263391 11.875344 11.265813 11.266812 10.882812 10.882812 L 8.7539062 8.7539062 C 8.5554063 8.5554063 8.292125 8.4551562 8.03125 8.4570312 z M 41.96875 8.4570312 C 41.707625 8.4554062 41.444594 8.5554062 41.246094 8.7539062 L 39.115234 10.884766 C 38.732234 11.267766 38.734656 11.875344 39.097656 12.277344 C 42.143656 15.646344 44 20.111 44 25 C 44 29.889 42.144609 34.352656 39.099609 37.722656 C 38.736609 38.124656 38.734188 38.733187 39.117188 39.117188 L 41.246094 41.246094 C 41.643094 41.643094 42.299687 41.643469 42.679688 41.230469 C 46.604687 36.958469 49 31.259 49 25 C 49 18.741 46.604687 13.041531 42.679688 8.7695312 C 42.489688 8.5625312 42.229875 8.4586563 41.96875 8.4570312 z M 35.625 14.837891 C 35.355125 14.824516 35.079594 14.920406 34.871094 15.128906 L 32.740234 17.259766 C 32.381234 17.618766 32.341969 18.196938 32.667969 18.585938 C 34.123969 20.323937 35 22.561 35 25 C 35 27.439 34.123969 29.675109 32.667969 31.412109 C 32.341969 31.801109 32.381234 32.379281 32.740234 32.738281 L 34.871094 34.871094 C 35.288094 35.288094 35.967516 35.250687 36.353516 34.804688 C 38.625516 32.175687 40 28.748 40 25 C 40 21.252 38.625516 17.824312 36.353516 15.195312 C 36.160516 14.972313 35.894875 14.851266 35.625 14.837891 z M 14.375 14.839844 C 14.105125 14.853219 13.839484 14.974266 13.646484 15.197266 C 11.374484 17.825266 10 21.252 10 25 C 10 28.748 11.374484 32.175688 13.646484 34.804688 C 14.032484 35.250687 14.711906 35.288094 15.128906 34.871094 L 17.259766 32.740234 C 17.618766 32.381234 17.658031 31.803062 17.332031 31.414062 C 15.876031 29.676062 15 27.439 15 25 C 15 22.561 15.876031 20.324891 17.332031 18.587891 C 17.658031 18.198891 17.618766 17.620719 17.259766 17.261719 L 15.128906 15.128906 C 14.920406 14.920406 14.644875 14.826469 14.375 14.839844 z M 25 19 C 21.686 19 19 21.686 19 25 C 19 28.314 21.686 31 25 31 C 28.314 31 31 28.314 31 25 C 31 21.686 28.314 19 25 19 z"></path>
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 w-full lg:w-1/2 gap-4 h-auto lg:h-full p-2 flex flex-row items-center lg:items-center">
                {project.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    srcSet={image}
                    loading="lazy"
                    alt={`${project.title} Image ${imgIndex + 1}`}
                    className="w-full h-auto object-cover rounded-md mb-4 lg:mb-2 md:mx-auto"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

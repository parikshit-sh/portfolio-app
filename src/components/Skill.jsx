import "../index.css";
import "../app.css";

const Skills = () => {
  return (
    <section className="icons bg-transparent text-[#FAF9F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <h2 className="about-head text-4xl mb-8 text-center uppercase no-select">
          Technologies I&apos;ve Worked With
        </h2>
        <div className="icon-img flex flex-wrap justify-center gap-4">
          <div className="flex items-center">
            <img
              src="https://skillicons.dev/icons?i=html,css"
              alt="HTML5 and CSS"
            />
          </div>

          <div className="flex items-center">
            <img
              src="https://skillicons.dev/icons?i=js,ts"
              alt="JavaScript and TypeScript"
            />
          </div>

          <div className="flex items-center">
            <img
              src="https://skillicons.dev/icons?i=react,nextjs"
              alt="React and Next.js"
            />
          </div>

          <div className="flex items-center">
            <img
              src="https://skillicons.dev/icons?i=tailwindcss,bootstrap"
              alt="Tailwind CSS and Bootstrap"
            />
          </div>

          <div className="flex items-center">
            <img
              src="https://skillicons.dev/icons?i=python,django,angular"
              alt="Python, Django, and Angular"
            />
          </div>

          <div className="flex items-center">
            <img
              src="https://skillicons.dev/icons?i=mongodb,mysql,nodejs,expressjs,npm"
              alt="MongoDB, MySQL, Node.js, Express.js, and npm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

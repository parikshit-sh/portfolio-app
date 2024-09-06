import "../index.css";
import "../app.css";

const About = () => {
  return (
    <section className="about-section py-8 flex flex-col items-center">
      <div className="max-w-5xl w-full px-4 lg:w-10/12 sm:w-10/12 md:w-8/12">
        <h1 className="about-head text-4xl mb-8 text-center uppercase no-select">
          About Me
        </h1>
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12 p-6">
            <p className="about-text text-xl leading-relaxed text-center">
              Hi, I’m Parikshit, a passionate Front-End Developer dedicated to
              crafting exceptional digital experiences. With a solid background
              in front-end technologies like ReactJS, JavaScript, TailwindCSS,
              and a keen eye for design, I specialize in turning complex ideas
              into intuitive, user-friendly interfaces.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:parikshit.p550@gmail.com?subject=Work Inquiry"
            className="btns inline-block text-lg bg-[#FAF2F6] border-2
             border-[#ffffff] text-[#121212] py-3 px-8 hover:bg-transparent hover:text-[#FAF2F6] rounded-full 
            transition-all duration-300 ease-in-out hover:no-underline w-52 text-center"
          >
            Contact
          </a>
          <a
            href="#"
            className="btns inline-block text-lg bg-[#FAF2F6] border-2
             border-[#ffffff] text-[#121212] py-3 px-8 hover:bg-transparent
              hover:text-[#FAF2F6] rounded-full transition-all duration-300 
              ease-in-out hover:no-underline w-52 text-center"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

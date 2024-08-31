import "../index.css";
import "../app.css";

const About = () => {
 

  return (
    <section className="about-section py-1 pb-20 flex">
    <div className="pb-4 max-w-5xl mx-auto lg:w-10/12 px-4 sm:w-10/12 md:w-8/12">
      <h1 className="about-head text-4xl mb-12 uppercase no-select">
        About Me
      </h1>
      <div className="flex justify-center">
        <div className="w-full lg:w-10/12 px-4">
          <p className="about-text text-2xl leading-relaxed">
            Hi, I’m Parikshit, a passionate Front-End Developer dedicated to
            crafting exceptional digital experiences. With a solid background
            in front-end technologies like ReactJS, Javascript, TailwindCSS
            and a keen eye for design, I specialize in turning complex ideas
            into intuitive, user-friendly interfaces.
          </p>
        </div>
        
      </div>
      <div className="buttons mt-8 flex flex-col sm:flex-row justify-center items-center sm:items-center gap-12 uppercase">
        <a
          href="mailto:parikshit.p550@gmail.com?subject=Work Inquiry"
          className="inline-block text-lg bg-[#FAF2F6]
           border-2 text-[#121212]] py-3 px-14 hover:no-underline rounded-full
            hover:bg-[#121212] hover:text-white duration-300 ease-in-out"
        >
          Work with Me
        </a>
  
        <a
          href="#"
          className="inline-block text-lg bg-[#FAF2F6] border-2 text-black py-3 px-[5.3rem] hover:no-underline rounded-full transition hover:bg-[#121212] hover:text-white duration-300 ease-in-out"
        >
          Resume
        </a>
      </div>
    </div>
  </section>
  
  
  );
};

export default About;

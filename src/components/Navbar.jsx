import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.set(".navbar-link", { opacity: 0, y: 10 });
    gsap.set(".hamburg", { opacity: 0, y: 10 });

    gsap.fromTo(
      ".navbar-link",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".hamburg",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.1,
        ease: "power2.out",
      }
    );

    const links = document.querySelectorAll(".navbar-link a");
    links.forEach((link) => {
      const underline = document.createElement("div");
      underline.className = "underline";
      link.appendChild(underline);

      gsap.set(underline, {
        scaleX: 0,
        transformOrigin: "left",
        backgroundColor: "black",
        height: "1px",
        position: "absolute",
        bottom: "-2px",
        left: 0,
        width: "100%",
      });

      gsap.set(link, {
        position: "relative",
        overflow: "hidden",
      });

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, { scaleX: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(link, {
          y: -5,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, { scaleX: 0, duration: 0.5, ease: "power2.out" });
        gsap.to(link, {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(".mobile-menu", {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(".mobile-menu-overlay", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(".mobile-menu", {
        x: "100%",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(".mobile-menu-overlay", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      document.body.style.overflow = 'auto';
    }

    const links = document.querySelectorAll(".mobile-menu a");
    links.forEach((link) => {
      const underline = document.createElement("div");
      underline.className = "underline";
      link.appendChild(underline);

      gsap.set(underline, {
        scaleX: 0,
        transformOrigin: "left",
        backgroundColor: "#121212",
        height: "2px",
        position: "absolute",
        bottom: "-1px",
        left: 0,
        width: "100%",
      });

      gsap.set(link, {
        position: "relative",
        overflow: "hidden",
      });

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, { scaleX: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(link, {
          y: -5,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, { scaleX: 0, duration: 0.5, ease: "power2.out" });
        gsap.to(link, {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar text-sm uppercase 
      bg-transparent text-black flex justify-between items-center p-4">
        <h1 className="text-sm uppercase navbar-link">Parikshit Sharma</h1>
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6 no-underline">
            <li className="navbar-link relative">
              <a
                href="https://github.com/parikshit-sh"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:no-underline"
              >
                GitHub
              </a>
            </li>
            <li className="navbar-link relative ">
              <a
                href="https://www.linkedin.com/in/parikshit-sh/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="navbar-link relative">
              <a href="https://parikshit-blog.vercel.app/" className=""  target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="hamburg lg:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </header>

      <div className="mobile-menu-overlay fixed top-0 left-0 w-full h-full  opacity-0"></div>
      <div
        className={`mobile-menu fixed top-0 right-0 w-3/4 h-full transform translate-x-full `}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 64 64"
          >
            <path d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-lg uppercase no-underline">
          <li>
            <a
              href="https://github.com/parikshit-sh"
              target="_blank"
              onClick={closeMenu}
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/parikshit-sh/"
              target="_blank"
              onClick={closeMenu}
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://parikshit-blog.vercel.app/" target="_blank" onClick={closeMenu}>
              Blog
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
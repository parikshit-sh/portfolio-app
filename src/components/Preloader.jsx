import { useEffect } from "react";
import { preLoaderAnim } from "../animations"; 
import "../preloader.css";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
       <span>Web Developer</span>
      </div>
    </div>
  );
};

export default Preloader;

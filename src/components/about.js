import React, { useEffect } from "react";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import mypics from "../images/mypics.jpg";
function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg" data-aos="fade-up"></div>
        <div className="about-card">
          <img
            src={mypics}
            className="about-img"
            alt="Phoebe Roberts"
            data-aos="fade-down"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 data-aos="fade-up-right">About Phoebe Roberts</h1>
        <p data-aos="zoom-in">
          Hello! My name is Phoebe Roberts, I'm a
          <span style={{ color: "#ff006e", fontWeight: "bold" }}>
            {""} Front End Developer
          </span>{" "}
          {""}
          based in Abuja Nigeria. I enjoy creating things that live on the
          internet. My expertise is in the area of Responsive design, with every
          line of code, I strive to make the Web a beautiful place. I am a
          graduate of Computer Science from Federal University Lokoja Kogi
          state, Nigeria. I am proficient in HTML,CSS,javaScript and ReactJs.
        </p>
      </div>
    </div>
  );
}

export default About;

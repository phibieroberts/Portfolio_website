import React from "react";
import "./intro.css";
import ParticlesBackground from "./particlesBackground";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Intro() {
  return (
    <div className="intro">
      <ParticlesBackground />
      <h3 className="intro-text">
        HELLO THERE <span>I'm</span>
      </h3>
      <h1 className="intro-name">Phoebe Roberts</h1>
      <h2 className="intro-title"> | Front-End Developer |</h2>
      {/* <button className="more"> */}
      {/* MORE ABOUT ME */}
      {/* I build, design and develop services for betterment of lives. i build
        responsive and interactive webpages */}
      {/* </button> */}
      <div className="social-icons">
        <h3 className="icon">
          <FaFacebook />
        </h3>
        <h3 className="icon">
          <FaLinkedin />
        </h3>
        <h3 className="icon">
          <FaTwitter />
        </h3>
        <h3 className="icon">
          <FaInstagram />{" "}
        </h3>
        <h3 className="icon">
          <FaGithub />
        </h3>
      </div>
    </div>
  );
}

export default Intro;

import React from "react";
import "./intro.css";
import { useContext } from "react";
import { ThemeContext } from "../context";

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Intro() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
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
          <a
            href="https://web.facebook.com/phoebe.roberts.52090/"
            style={{
              color: darkMode ? "white" : "black",
            }}
          >
            <FaFacebook />
          </a>
        </h3>
        <h3 className="icon">
          <a
            href="linkedin.com/in/phoebe-obaje"
            style={{
              color: darkMode ? "white" : "black",
            }}
          >
            <FaLinkedin />
          </a>
        </h3>
        <h3 className="icon">
          <a
            href="https://twitter.com/Phoebe_Roberts_"
            style={{
              color: darkMode ? "white" : "black",
            }}
          >
            <FaTwitter />
          </a>
        </h3>

        <h3 className="icon">
          <a
            href="https://www.instagram.com/devphoebe/"
            style={{
              color: darkMode ? "white" : "black",
            }}
          >
            <FaInstagram />{" "}
          </a>
        </h3>
        <h3 className="icon">
          <a
            href="https://github.com/phibieroberts/phibieroberts"
            style={{
              color: darkMode ? "white" : "black",
            }}
          >
            <FaGithub />
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Intro;

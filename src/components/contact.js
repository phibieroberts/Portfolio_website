import React, { useEffect } from "react";
import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapSigns } from "react-icons/fa";
import Aos from "aos";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const form = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_niczk0e",
        "template_8lrk0mv",
        form.current,
        "S5Wm-1ndRwEbOQD6-"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // form.current.reset()
  }
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="title" data-aos="zoom-in">
            Let's discuss your project
          </h1>
          <div className="c-info">
            <a
              href="tel:+2347039748074"
              className="info-item"
              data-aos="fade-up"
              style={{
                color: darkMode ? "white" : "black",
              }}
            >
              <FaPhone className="icon contact-icon" />
              +2347039748074
            </a>
            <a
              href="mailto:obajephoebe@gmail.com"
              className="info-item"
              data-aos="fade-down"
              style={{
                color: darkMode ? "white" : "black",
              }}
            >
              <FaEnvelope className="icon contact-icon" />
              <p> obajephoebe@gmail.com</p>
            </a>
            <div className="info-item" data-aos="fade-down">
              <FaMapSigns className=" icon contact-icon" />
              Nigeria Customs Service, Bauchi State
            </div>
          </div>
        </div>
        <div className="c-right" data-aos="slide-up">
          <div className="c-description">
            <h1 className="desc-heading" data-aos="fade-up">
              Get In Touch
            </h1>
            I’m currently looking for new opportunities and inbox is always open
            for collaborations. Whether you have a question or just want to say
            hi, I’ll try my best to get back to you!
          </div>
          <form onSubmit={handleSubmit} ref={form}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
            />
            <textarea
              rows="5"
              placeholder="Enter message"
              name="message"
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
            />
            <motion.button animate={{}}>Submit</motion.button>
            {done && "Message Sent"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

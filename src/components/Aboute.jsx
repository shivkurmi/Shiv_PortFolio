import React, { useEffect, useRef } from "react";
import "./About.css";
import boy from "./assets/boy.JPG"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const About = () => {

  useGSAP(() => {
    

    // Image animation
    gsap.from(".about-left", {
      x: -120,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-left",
        start: "top 90%",
        scrub:true
      },
    });

    // Content animation
    gsap.from(".about-right", {
      x: 120,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-right",
        start: "top 90%",
        scrub:true
      },
    });
  });
  return (
    <section className="about">

      <div className="about-left">
        <img
          src={boy}
          className="about-img"
        />
      </div>

      <div className="about-right">
        <h2 className="section-title1">About Me</h2>

        <p className="about-text">
          I'm <span className="highlight">Shiv Kurmi</span>, a passionate 
          full-stack developer who loves building clean, efficient, and 
          user-friendly applications. I enjoy solving real-life problems 
          using modern technology and creating digital experiences that 
          are fast, responsive, and visually appealing.
        </p>

        <p className="about-text">
          With expertise in <strong>React, Node.js, Express, MongoDB</strong>, 
          I enjoy turning ideas into real-world applications. My focus is on 
          writing clean code, optimizing performance, and building beautiful UI/UX.
        </p>

        <div className="info-box">
          <p><strong>Experience:</strong> 0+ Years</p>
          <p><strong>Location:</strong> India</p>
          <p><strong>Freelance:</strong> Available</p>
        </div>

        <h3 className="skills-title1">My Skills</h3>

        <div className="skill">
          <p>React</p>
          <div className="progress"><span style={{ width: "90%" }}></span>
          </div>
        </div>

        <div className="skill">
          <p>Node.js</p>
          <div className="progress"><span style={{ width: "85%" }}></span></div>
        </div>

        <div className="skill">
          <p>MongoDB</p>
          <div className="progress"><span style={{ width: "80%" }}></span></div>
        </div>

        <div className="skill">
          <p>JavaScript</p>
          <div className="progress"><span style={{ width: "90%" }}></span></div>
        </div>
         
      </div>

    </section>
  );
};

export default About;

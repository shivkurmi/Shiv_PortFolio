import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeDBackground from "./ThreeDBackground";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaGitAlt
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux } from "react-icons/si";
//, SiThreejs
import "./SkillsPage.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsPage() {
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  useGSAP(() => {
    gsap.from(".skill-card", {
      // 
      opacity: 0,
      x: -100,
      scale:-2,
      duration: 2,
      // stagger: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger:".skill-card",
        start: "top 100%",
        scrub:true
      },
    
    });
  });

  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux Toolkit" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaDatabase />, name: "SQL" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <div className="skills-wrapper">
      <ThreeDBackground />

      <div className="skills-section">
        <h1 className="skills-title">My Skills</h1>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" ref={addToRefs} key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

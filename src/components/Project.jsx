import React, { useEffect, useRef } from "react";
import "./Project.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const containerRef = useRef(null);

  const projectData = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built with React, GSAP & Three.js",
      img: "https://mir-s3-cdn-cf.behance.net/projects/404/a2f882224632473.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg",
      link: "#",
    },
    {
      title: "Airbnb Website",
      desc: "Full MERN stack e-commerce website with payment integration",
      img: "https://www.radiustheme.com/wp-content/uploads/2024/10/real-home-1024x514.webp",
      link: "https://github.com/shivkurmi/Airbnb-full-stack-web-developing-project",
    },
    {
      title: "Weather App",
      desc: "Weather forecasting app using OpenWeather API",
      img: "https://www.shutterstock.com/image-vector/landing-page-template-weather-forecast-260nw-2162066977.jpg",
      link: "#",
    },
    {
      title: "Chat App",
      desc: "Live real-time chat app built with Socket.io & Node.js",
      img: "https://files.ably.io/ghost/prod/2023/06/the-ultimate-guide-to-chat-app-architecture.png",
      link: "#",
    },
     {
      title: "Snake_Game App",
      desc: "Control a growing snake, eat food, avoid walls and self-collision",
      img: "https://plays.org/screenshots/snake-game-screenshot.png",
      link: "https://github.com/shivkurmi/Snake-Game-using-Turtle-Library",
    },
    {
    title: "Cricket Quiz Contest",
    desc: "Test your cricket knowledge — answer trivia, climb leaderboard, win prizes!",
   img: "https://image.slidesharecdn.com/cricketquiz2021-prelimsfinals-220315115415/75/Cricket-Quiz-2021-Prelims-and-Finals-1-2048.jpg",
  link: "https://github.com/shivkurmi/Cricket-Quick-Game"
},
{
  title: "Discussion & Problem-Solver",
  desc: "Post your questions, discuss issues, crowdsource solutions together.",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZuLS9zdZmSBvfCzbZWpqjPpFe4KdC9NaEg&s",
  link: "https://github.com/shivkurmi/Discuss_Problems"
}


  ];

  useGSAP(() => {
    // const cards = containerRef.current.querySelectorAll(".project-card");

    gsap.from(".project-card1", {
      opacity: 0,
      x: -100,
      duration: 1,
      stagger: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger:".project-card1",
        start: "top 80%",
        scrub:true
      },
    });
  });

  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid" ref={containerRef}>
        {projectData.map((project, index) => (
      
          <div className=" project-card2 project-card1" key={index}>
      
            <img src={project.img} className="project-img" alt={project.title} />

            <div className="project-info">
             <h2>{project.title} </h2>
            <p>{project.desc}</p>
             <a href={project.link} className="project-btn" target="_blank" rel="noopener noreferrer">
               View Project
              </a>
            </div>
          </div> 
        ))} 
        
      </div>
    </section>
  );
}

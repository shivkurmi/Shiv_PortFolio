
import "./Header.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const typedRef = useRef(null);
   const navigate=useNavigate()
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Shiv Kurmi", "Full-Stack Developer", "React | Node.js Developer"],
      typeSpeed: 40,
      backSpeed: 60,
      loop: true,
    });

    return () => typed.destroy();
  }, []);
  useGSAP(()=>{
  gsap.from(".header-content",{
    x:-600,
    duration:1,
    rotate:45,
    delay:1
  }
 
  )
    gsap.from(".header-image",{
    opacity:0,
    duration:1,
    rotate:45,
    delay:1
  })

  })

    function start(){
    // navigate("/");
        window.location.reload();

  }
  function viewProject(){
    navigate("/project");
    // window.location.reload();

  }
  return (
    <header className="header">
      <div className="header-content">
        {/* <h1 className="name">Hello, I am Shiv Kurmi</h1> */}
 <h1 className="name">Hello, I'm <span ref={typedRef}></span></h1>

        <h2 className="title">🚀 Empowering Ideas with Modern Web Development</h2>
        <p className="subtitle">
          I build fast, responsive, and scalable web applications using today’s best technologies.
        </p>

        <div className="btn-group">
          <button className="primary-btn" onClick={start}>Get Started</button>
          <button className="secondary-btn" onClick={viewProject}> View Projects</button>
        </div>
      </div>

      <div className="header-image">
        <img  
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
          alt="developer"
        />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Contact.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  useGSAP(() => {
    gsap.from(".contact-wrapper", {
      x:100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-wrapper",
          start: "top 100%",
          scrub:true
        },
      });
  
    
      gsap.from(".left-panel", {
        x: -120,
        opacity: 0,
        delay:0.3,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".left-panel",
          // start: "top 35%",
          "top":"100%",
          scrub:true
        },
      });
  
      // Content animation
      gsap.from(".contact-form ", {
         x: 120,
        opacity: 0,
        duration: 1.3,
        delay:0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          scrub:true
        },
      });
    });
  return (
    <div className="contact-wrapper">
      <h1 className="heading">
        Let’s Connect <span>🚀</span>
      </h1>
      <p className="sub-heading">
        I would love to collaborate, discuss opportunities, or build something cool together.
      </p>

      <div className="contact-box">

        {/* Left Section */}
        <div className="left-panel">
          <h2>Developer Info</h2>

          <p><strong>Name:</strong> Shiv Sundar Kurmi</p>
          <p><strong>Role:</strong> Full Stack Developer</p>
          <p><strong>Email:</strong> kurmishiv27@gmail.com</p>
          <p><strong>Phone:</strong> +91 8433376657</p>

          <div className="socials">
            <a href="https://www.linkedin.com/in/shiv-sundar-kumar-kurmi-b19433344/" className="social-btn linkedin">LinkedIn</a>
            <a href="https://github.com/shivkurmi" className="social-btn github">GitHub</a>
            <a href="/" className="social-btn portfolio">Portfolio</a>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="contact-form">
          <h2 className="form-title">Send Me a Message ✉️</h2>

          <div className="input-group">
            <input type="text" required />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <input type="text" required />
            <label>Subject</label>
          </div>

          <div className="input-group">
            <textarea rows="4" required></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

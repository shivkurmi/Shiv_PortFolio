// import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-title">Shiv Kurmi</h2>
          <p className="footer-subtitle">
            Full Stack Developer • React • Node.js • MongoDB
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-section center">
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/project">Projects</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h3 className="footer-connect">Connect</h3>
          <div className="footer-socials">
            <a href="#" ><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shiv-sundar-kumar-kurmi-b19433344/"><FaLinkedin /></a>
            <a href="#"><FaEnvelope /></a>
            <a href="#"><FaGlobe /></a>
          </div>

          <p className="footer-email">
            Email: <span>shivdeveloper@example.com</span>
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Shiv Kurmi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

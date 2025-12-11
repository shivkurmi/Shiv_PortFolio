// import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
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

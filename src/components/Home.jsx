import React from "react";
import "./Home.css";
import Header from "./Header";
import About from "./Aboute";
import SkillsPage from "../SkillsPage";
import Project from "./Project";
import Contact from "./Contact";
const Home = () => {
  return (
   <>
    <Header/>
     <About/>
     <SkillsPage/>
     <Project/>
   <Contact/>
   </>
  );
};

export default Home;

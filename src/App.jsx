import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/Aboute';
import Projects from './components/Project';
import Contact from './components/Contact';
import SkillsPage from './SkillsPage';
import NavBar from './components/NavBar';
import Footer  from "./components/Footer"

const App = () => {
  return (
     <BrowserRouter>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillsPage/>} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
           <Footer/>

      </div>
    </BrowserRouter>
  )
}

export default App

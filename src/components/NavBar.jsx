
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { use, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"


const NavBar = () => {
  const [open, setOpen] = useState(false);
 const  [menu,setMenu]=useState(false)
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from(".logo", {
      y: -300,
      opacity: 0,
      duration: 1
    });

    t1.from(".nav-links li", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scale: 2,
      stagger: 0.1
    });
  });
       


   
   
  return (
    <header className=''>

    <nav className="navbar">
      <div className="logo"> <Link to="/" onClick={() => setOpen(false)}> <img className='image-logo' src="https://www.shutterstock.com/image-vector/shiva-logo-design-vector-260nw-2461321365.jpg" alt=""  /> </Link>
</div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger"  onClick={()=>{setMenu(true)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
        <li><Link to="/project" onClick={() => setOpen(false)}>Project</Link></li>
      </ul>
     
    </nav>
     <div className={menu ? "menu-bar2" :"menu-bar1"} >
       <div className="close-menu" onClick={()=>{setMenu(false)}}>Close</div>
         <ul>
        <li><Link className='menu' to="/" >Home</Link></li>
        <li><Link className='menu' to="/about" >About</Link></li>
        <li><Link className='menu' to="/contact" >Contact</Link></li>
        <li><Link className='menu' to="/skills" >Skills</Link></li>
        <li><Link className='menu' to="/project" >Project</Link></li>
      </ul>
      </div>
     
     
    </header>
  );
};

export default NavBar;


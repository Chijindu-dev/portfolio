import React from 'react';
import "./NavBar.css"
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import logo from "../../assets/ox logo.png"


// Navbar Component
const Navbar = () => {

   const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
        <div className="nav-brand">
          <img src={logo} alt="0xasaph"/>
        </div>
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#faqs" onClick={() => setIsOpen(false)}>FAQs</a></li>
          <li><ThemeToggle /></li>
        </ul>
        <a href="#contact" className="contact-btn">Contact</a>
      </nav>
  );
};


export default Navbar
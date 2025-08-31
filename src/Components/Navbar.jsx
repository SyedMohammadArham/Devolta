import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/devolta.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="header">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Devolta</h1>
        </div>

        {/* Desktop Links */}
        <ul className="navlinks">
          <Link className="nav" to="/">Home</Link>
          <Link className="nav" to="/services">Services</Link>
          <Link className="nav" to="/portfolio">Portfolio</Link>
          <Link className="nav" to="/about">AboutUs</Link>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <Link className="nav" to="/" onClick={toggleMenu}>Home</Link>
        <Link className="nav" to="/services" onClick={toggleMenu}>Services</Link>
        <Link className="nav" to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
        <Link className="nav" to="/about" onClick={toggleMenu}>About</Link>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;

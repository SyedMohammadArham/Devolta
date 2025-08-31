import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/devolta.png";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
        </div>

        {/* Desktop Links */}
        <ul className="navlinks">
          <Link className="nav" to="/">Home</Link>
          <Link className="nav" to="/services">Services</Link>
          <Link className="nav" to="/portfolio">Portfolio</Link>
          <Link className="nav" to="/about">AboutUs</Link>
        </ul>

        {/* Social Media Icons */}
        <div className="icons">
          <a href="https://www.instagram.com/devolta.inc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/1AsYNGnSnP/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B923245356726&text=Hello%21+I+would+like+to+get+in+touch+with+you.&type=phone_number&app_absent=0https://web.whatsapp.com/" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>

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

        {/* Social Media in Sidebar */}
        <div className="sidebar-icons">
          <a href="https://www.instagram.com/devolta.inc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/1AsYNGnSnP/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B923245356726&text=Hello%21+I+would+like+to+get+in+touch+with+you.&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;

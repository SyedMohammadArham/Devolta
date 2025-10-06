import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import logo from "../Assets/devolta.png";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // initialize AOS once with 800ms duration
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-content">
        <div className="footer-column logo-contact">
          <div className="logo">
            <img src={logo} alt="devolta Solutions" className="footer-logo" />
            <h1>Devolta</h1>
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/devolta.inc?igsh=emp6eDU3NjAycXQ5"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/1AsYNGnSnP/"><FaFacebookF /></a>
            <a href="https://api.whatsapp.com/send/?phone=%2B923245356726&text=Hello%21+I+would+like+to+get+in+touch+with+you.&type=phone_number&app_absent=0"><FaWhatsapp /></a>
          </div>
          <div className="footer-contact">
            <p><MdPhone /> +923245356726 <span>+923314151120</span></p>
            <p><MdEmail /> devoltaa71@gmail.com</p>
            <p><MdLocationPin /> Lahore Pakistan</p>
          </div>
        </div>

        <div className="footer-column">
          <h3>ALL SERVICES</h3>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Digital Marketing</li>
            <li>Content Creation</li>
            <li>Graphic Design</li>
            <li>Video Editing</li>
            <li>SEO</li>
            <li>Amazon Listin/Non Listing</li>
            <li>Wordpress</li>
            <li>Shopify</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>ALL PAGES</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2025 <span className="footer-highlight">Devolta.inc</span>. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

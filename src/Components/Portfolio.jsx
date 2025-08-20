import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Portfolio.css';
import portfolio from "../Assets/portfolio.png";
import Website from "./pages/Website";
import Logo from "./pages/Logo";
import { Graphic } from "./pages/Graphic";
import Contactus from './Contactus/ContactUs';

export const Portfolio = ({ showBanner = true }) => {
  const [activeSection, setActiveSection] = useState("website");
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSectionChange = (section) => {
    if (section !== activeSection) {
      setFade(true); // start fade out
      setTimeout(() => {
        setActiveSection(section);
        setFade(false); // fade back in
      }, 200); // fade-out duration (must match CSS)
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "website":
        return <Website />;
      case "logo":
        return <Logo />;
      case "graphic":
        return <Graphic />;
      default:
        return null;
    }
  };

  return (
    <div className="portfolio-bg">
      <div className="portfolio">
        {showBanner && (
          <div className="port-banner" data-aos="fade-down">
            <div className="port-banner-wrap">
              <div className="portfolio-banner-info">
                <h1>Portfolio</h1>
              </div>
              <div className="port-cher">
                <img src={portfolio} alt="Portfolio banner" />
              </div>
            </div>
          </div>
        )}

        <div className="portfolio-info" data-aos="fade-up">
          <h1>Our <span>Portfolio</span></h1>
          <p>Design, Develop, Deliver, Dominate</p>
        </div>

        <div className="portfolio-wrap" data-aos="zoom-in">
          <button 
            className={activeSection === "website" ? "active" : ""} 
            onClick={() => handleSectionChange("website")}
          >
            Web Sites
          </button>
          <button 
            className={activeSection === "logo" ? "active" : ""} 
            onClick={() => handleSectionChange("logo")}
          >
            Logos
          </button>
          <button 
            className={activeSection === "graphic" ? "active" : ""} 
            onClick={() => handleSectionChange("graphic")}
          >
            Graphic Design
          </button>
        </div>

        {/* Content with fade animation */}
        <div className={`portfolio-content ${fade ? "fade-out" : "fade-in"}`}>
          {renderSection()}
        </div>
      </div>
      <Contactus/>
    </div>
  );
};

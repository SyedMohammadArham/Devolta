import React, { useEffect, useRef } from 'react';
import './Services.css';
import {
  FaLaptopCode,
  FaPaintBrush,
  FaVideo,
  FaPenNib,
  FaRobot,
  FaChartLine,
  FaBullhorn,
  FaMobileAlt,
  FaShopify,
  FaAmazon,
  FaWordpress
} from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode size={40} className="icon" />,
    title: 'Web Development',
    description:
      'Building functional websites, creating online experiences through coding.'
  },
  {
    icon: < FaMobileAlt size={40} className="icon" />,
    title: 'App Development',
    description:
      'Creating apps, designing functionality, developing for mobile platforms.'
  },
  {
    icon: <FaPaintBrush size={40} className="icon" />,
    title: 'Graphic Design',
    description:
      'Visually striking designs for brands, ads, packaging, and digital platforms crafted to make a lasting impression.'
  },
  {
    icon: <FaVideo size={40} className="icon" />,
    title: 'Video Editing',
    description:
      'Professional video editing services to enhance your raw footage into polished, engaging content for any platform.'
  },
  {
    icon: <FaPenNib size={40} className="icon" />,
    title: 'Content Creation',
    description:
      'Authentic, high converting user generated content tailored for social media, ads, and product showcases.'
  },
  {
    icon: <FaBullhorn size={40} className="icon" />,
    title: 'Digital Marketing',
    description:
      'Strategic content planning, posting, and audience engagement to grow your brand’s online presence consistently.'
  },
  {
    icon: <FaRobot size={40} className="icon" />,
    title: 'Open Ai',
    description:
      'High-quality photography for products, events, or branding captured with creativity and precision.'
  },
  {
    icon: <FaChartLine size={40} className="icon" />,
    title: 'SEO',
    description:
      'From scripting to shooting and final cut complete video production services that bring your vision to life.'
  },
  {
    icon: <FaShopify size={40} className="icon" />,
    title: 'Ecommerce Solutions',
    description:
      'Custom Shopify Store Design, Product Setup & Managment, Theme Customization, Payment Gateway Integration, Conversion-Focused Design,'
  },
  {
    icon: <FaAmazon size={40} className="icon" />,
    title: 'Amazon Listingl/NON Listing',
    description:
      "Optimized Product Titles & Descriptions,High-Quality Images & A+ Content,Keyword Research for Better Ranking,Review & Rating Optimization,Conversion-Focused Strategy."
  },
  {
    icon: <FaWordpress size={40} className="icon" />,
    title: 'WordPress Development',
    description:
      'Custom WordPress Design, Fast & Responsive Websites, SEO - Friendly Development, eCommerce Integration, Plugin Setup & Optimization, Ongoing Support & Maintenance.'

  }

];

export default function ServicesSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // add the CSS animation class
            observer.unobserve(entry.target); // stop observing (so it's only once)
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <div className="services-container">
      <div className="service-info slide-animation slide-down">
        <h1>Services</h1>
        <p> We deliver custom digital solutions, from concept to deployment and beyond.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ '--i': index }}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="icon-container">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

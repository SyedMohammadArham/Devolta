import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Website.css';

import web1 from "../../Assets/web1.png";
import web2 from "../../Assets/web2.png";
import web3 from "../../Assets/web3.png";
import web4 from "../../Assets/web4.png";

const Website = () => {
    const webdata = {
        websites: [
            { img: web1, title: "Steelpack Website", link: "https://steelpack.ca/" },
            { img: web3, title: "Restaurant Website", link: "https://mykaptaan.com/" },
            { img: web2, title: "Ecommerce Website" },
            { img: web4, title: "Construction Website" }
        ]
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="website-section">
            <h2 className="website-heading">Website <span>Projects</span></h2>
            <p className='web-disc'>
                We design websites that do more than just look good – they work.
                At Netverse Solutions, we blend aesthetics with functionality to create fast, responsive, and user-friendly websites.
            </p>

            <div className="website-grid slider">
                {webdata.websites.map((site, index) => (
                    <div
                        className="website-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 200} // delay for staggered effect
                    >
                        <img src={site.img} alt={site.title} className="website-image" />
                        <h4 className="website-title">{site.title}</h4>
                        {site.link && (
                            <a
                                href={site.link}
                                className="website-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Site
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Website;

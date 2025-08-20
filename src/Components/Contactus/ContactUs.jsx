import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const whatsappNumber = "+923245356726"; // Pakistan number without '+'
    const message = "Hello! I would like to get in touch with you."; // Optional default message
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="contact-wrap">
            <div className="contact-container">
                <h1>
                    Contact <span>Us</span>
                </h1>
                <p>Reach out for queries, collaborations, or support we’re just a message away.</p>
                <button>
                    <a 
                        href={whatsappLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Contact Us
                    </a>
                </button>
            </div>
        </div>
    );
};

export default ContactUs;

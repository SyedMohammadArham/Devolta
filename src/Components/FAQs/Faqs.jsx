import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Faqs.css';

const Faqs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs = [
    { question: "What is our payment method?", answer: "We accept multiple payment methods, including credit/debit cards, bank transfers, and popular digital wallets." },
    { question: "What is our refund period?", answer: "Our refund period is 4 working days from the date of purchase." },
    { question: "What is our opening time?", answer: "We are Available 24/7." },
    { question: "Where are we from?", answer: "Lahore Pakistan." },
    { question: "Why choose Devolta?", answer: "We deliver high-quality work, on time, and with a focus on client satisfaction." }
  ];

  return (
    <div className="faq-bg">
      <h2 data-aos="fade-up" style={{marginBottom:"50px"}}>Frequently <span> Asked </span>Questions</h2>
      <div className="faq-section" data-aos="fade-up">
        {faqs.map((item, index) => (
          <details key={index} data-aos="fade-right">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faqs;

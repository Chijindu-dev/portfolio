import React, { useState } from "react";
import { motion,} from "framer-motion";
import "./Faqs.css";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    { id: 1, question: "Who are you, and what do you do?", answer: "I am a web developer with a passion for building responsive and user-friendly websites." },
    { id: 2, question: "What technologies do you work with?", answer: "I primarily work with JavaScript, React, Node.js, and other modern web technologies." },
    { id: 3, question: "Can you redesign an existing website?", answer: "Yes, I can help redesign and modernize your existing website to make it more engaging and user-friendly." },
    { id: 4, question: "What services do you provide?", answer: "I provide web development, UI/UX design, website redesign, and front-end development services." },
    { id: 5, question: "How do you approach a new project?", answer: "I start by understanding your goals, creating wireframes, then moving on to the development phase while keeping you updated." },
    { id: 6, question: "How can I collaborate with you on a project?", answer: "You can contact me via email or use the contact form on my website to discuss potential collaboration." },
  ];

  const handleToggle = (id) => {
    console.log("Clicked ID:", id, "Current openId:", openId); // Debug line
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section className="faq-section" id="faqs">
      <div className="faq-container">
        <motion.h2
          className="faq-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked<br />Questions
        </motion.h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            
            return (
              <motion.div
                key={faq.id}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className="faq-question" 
                  onClick={() => handleToggle(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </div>
                
                {isOpen && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
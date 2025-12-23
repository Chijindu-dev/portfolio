import React, { useState } from "react";  // Make sure to import useState
import "./Designs.css"
import { motion } from "framer-motion";
import yui from "../../assets/yui-protocol.png"
import tudor from "../../assets/tudor-doors.png"
import pizzaro from "../../assets/pizzaro.png"


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State inside the functional component

  const designs = [
    {
      title: "Tudor Doors",
      description:
        "Tudor Doors Limited is a leading Nigerian manufacturer and supplier of premium, security and luxury doors for the residential, commercial and industrial sectors.",
      image: tudor,
      link: "https://tudordoorslimited.com",
    },
    {
      title: "Yui-Protocol",
      description:
        "YUI Protocol is a decentralized finance (DeFi) protocol focused on sustainable yield generation, efficient liquidity management, and long-term value creation.",
      image: yui,
      link: "https://yuiprotocol.vercel.app/",
    },
    {
      title: "pizzaro",
      description:
        "Pizzaro is an intuitive, user-friendly online platform that allows customers to easily browse and order a variety of delicious pizzas from the comfort of their home. The website provides a seamless experience for pizza lovers, offering a wide range of customizable options to suit every taste.",
      image:pizzaro,
      link: "https://pizza-shop-flame-ten.vercel.app",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % designs.length); // Move to the next slide
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + designs.length) % designs.length); // Move to the previous slide
  };

  return (
    <>
      <section className="designs-section" id="projects">
        <div className="designs-container">
          <motion.div 
            className="designs-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Creative Designs Made for My Clients</h2>
            <div className="carousel-controls">
              <span className="slide-counter">
                {currentSlide + 1}/{designs.length}
              </span>
              <div className="control-buttons">
                <button onClick={prevSlide} className="control-btn">
                  ←
                </button>
                <button onClick={nextSlide} className="control-btn">
                  →
                </button>
              </div>
            </div>
          </motion.div>

          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {designs.map((design, index) => (
                <div key={index} className="carousel-slide">
                  <motion.div 
                    className="design-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <img src={design.image} alt={design.title} />
                    <div className="design-info">
                      <h3>{design.title}</h3>
                      <p>{design.description}</p>
                      <a href={design.link} className="design-link">
                        Review →
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;

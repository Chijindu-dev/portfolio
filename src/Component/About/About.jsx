import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./About.css"
import profile from "../../assets/profile.jpg"



const About = ()=>{
    return (
        <>
         <section className="hero-section" id="about">
        <div className="hero-container">
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="hero-image-frame">
              <img 
                src={profile} 
                alt="0xasaph" 
                className="hero-image"
              />
            </div>
          </motion.div>
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="hero-titles">
              I am Asaph, a Front-End web developer and a programmer working remotely in my home at Lagos,Nigeria
            </h1>
            <p className="hero-description">
             I am a front-end developer with over 3 years of experience in web development, specializing in creating visually appealing, responsive, and user-friendly interfaces. Based in Nigeria, I am passionate about turning design concepts into interactive, seamless digital experiences that not only look great but are also functional and easy to use.
            </p>
            <p className="hero-description">
             With a strong foundation in HTML, CSS, JavaScript, and modern front-end libraries like React and Next.js, I focus on building clean, maintainable code while ensuring that the user experience is at the core of every project. Although my expertise lies in front-end development, I have also explored UI/UX design, giving me a well-rounded understanding of both the development and design processes.
            </p>
            <p className="hero-description">
             I am currently working on various personal projects and freelance opportunities, continuously improving my skills in responsive design, performance optimization, and cross-browser compatibility. I thrive on creating beautiful UI that enhances the overall user experience, and I’m always excited to push the boundaries of what’s possible in web design.
            </p>
            <div className="hero-buttons">
              <button className="hero-btn">My Resume</button>
              <button className="hero-btn">Hire me</button>
            </div>
          </motion.div>
        </div>
      </section>
        </>
    )
}

export default About
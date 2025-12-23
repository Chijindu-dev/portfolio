import React from "react";
import "./herosection.css"
import { motion } from "framer-motion";

const Hero = () => {
  const technologies = [
   'Html','Css', 'JavaScript', 'ReactJS','Git','Github','Tailwind','Next.JS'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect for children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="location">📍 Lagos, Nigeria</motion.p>
        <motion.h1 variants={itemVariants} className="hero-title">
          I'm Asaph Enyinnaya<br />
          Web Developer
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-description">
          I specialize in researching and analyzing your brand and provide you a beautiful and effective
          website for making a digital standing among your competitors
        </motion.p>
        <motion.div variants={itemVariants} className="hero-buttons">
          <a href="#contact" className="btn-primary">Get yours now</a>
          <a href="#projects" className="btn-secondary">See my works</a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="technologies"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="tech-title">Technologies I use</p>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className="tech-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + (index * 0.1), duration: 0.4 }}
              whileHover={{ scale: 1.1, backgroundColor: "var(--accent-color)", color: "var(--bg-primary)" }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};


export default Hero
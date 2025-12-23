// src/components/Services.js
import React from "react";
import { FaLaptopCode, FaServer, FaPencilRuler, FaCogs } from "react-icons/fa"; // Importing React Icons
import './Services.css'; // Importing CSS for styling
import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div 
          className="services-intro"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1>My Services</h1>
          <p>Explore my range of services designed to go beyond aesthetics. I craft visually appealing and fully functional websites tailored to your business needs.</p>
          <button className="learn-more-btn">Learn More</button>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="service-item" variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
            <div className="service-icon">
              <FaLaptopCode size={32} strokeWidth={2} />
            </div>
            <h3>Front-End Dev</h3>
            <p>Bringing designs to life with clean, efficient, and optimized code. I build responsive, interactive, and user-friendly web applications using the latest front-end technologies like React.</p>
          </motion.div>
          
          <motion.div className="service-item" variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
            <div className="service-icon">
              <FaServer size={32} strokeWidth={2} />
            </div>
            <h3>Version Control</h3>
            <p>I Use version control tools like Git and platforms like GitHub or GitLab to manage and track changes in code. This allows developers to collaborate on projects and roll back changes when necessary.</p>
          </motion.div>
          
          <motion.div className="service-item" variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
            <div className="service-icon">
              <FaPencilRuler size={32} strokeWidth={2} />
            </div>
            <h3>UI/UX Design</h3>
            <p>I design intuitive and visually compelling user interfaces that enhance engagement. My approach focuses on user-centric, accessibility, and optimizing to beautiful digital experiences.</p>
          </motion.div>
          
          <motion.div className="service-item" variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.3 } }}>
            <div className="service-icon">
              <FaCogs size={32} strokeWidth={2} />
            </div>
            <h3>Performance Optimization</h3>
            <p>Slow websites lose visitors! I enhance website performance with code optimization, caching strategies, and SEO improvements, ensuring fast load times and a seamless user experience.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import "./Footer.css"
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiX } from "react-icons/bi";
import resume from "../../assets/ASAPH ENYINNAYA CV.pdf";

const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer-about">
            <h3>ASAPH ENYINNAYA </h3>
            <p>
              I’m a web developer with over 3 years of experience specializing in front-end development and UI/UX design. I craft user-centric, visually engaging websites that not only look great but also drive results, helping businesses grow and thrive in the digital world.
            </p>
            <a href={resume} download="Asaph_Enyinnaya_CV.docx" className="footer-btn">My Resume</a>
            <div className="footer-social">
              <div className="footer-social-icon">
                <a href="https://facebook.com/asaph.enyinnaya.7"><FaFacebook size={30} /></a>
              </div>
              <div className="footer-social-icon">
                <a href="https://github.com/Chijindu-dev"><BsGithub size={30} /></a>
              </div>
              <div className="footer-social-icon">
                <a href=""><LiaLinkedinIn size={30} /></a>
              </div>
              <div className="footer-social-icon">
                <a href="https://x.com/TechsRegion"><BsTwitterX size={25} /></a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Contact me</h3>
            <p>
              <strong>Email:</strong>
              <br />
              Asaphstech@gmail.com
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              +234 813 1322 623
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              Ago,Okota
              <br />
              Lagos,Nigeria
            </p>
          </div>
          <div className="footer-menu">
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </div>
        </motion.div>
        <div className="footer-bottom">
          <p>
            Copyright © 2025 - All rights reserved | Designed
            By: Asaph
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

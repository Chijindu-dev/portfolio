import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { FaFacebook } from "react-icons/fa";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { LiaLinkedinIn } from "react-icons/lia";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_rc3cklo";
    const TEMPLATE_ID = "template_fb2pkr7";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Contact me</h3>
          <h2>Get in touch</h2>
          <p>
            It is very important for us to keep in touch with you, so we are
            always ready to answer any question that interests you.
          </p>
        </motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Full name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Email address"
                className="form-input"
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-input"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Write your message here"
              className="form-textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

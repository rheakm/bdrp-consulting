import { motion } from "framer-motion";
import "./App.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_3vpw4kd", "template_453hq1y", form.current, "qAkOTf0yLdKHGe64S")
      .then(() => {
        alert("✅ Message sent!");
      }, (error) => {
        alert("❌ Failed: " + error.text);
      });
  };

  return (
    <motion.section className="section card contact-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="contact-wrap">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><strong>Address:</strong> 6 Caymus Street, Richmond Hill, Ontario, L4B 4G4</p>
          <p><strong>Email:</strong> info@bdrpconsulting.com</p>
          <p><strong>Phone:</strong> (416) 301-3347</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </motion.section>
  );
}
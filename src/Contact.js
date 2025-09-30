import { motion } from "framer-motion";
import "./App.css";

export default function Contact() {
  return (
    <motion.section className="section card contact-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="contact-wrap">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p><strong>Address:</strong> 123 Main St, Suite 400, New York, NY 10001</p>
          <p><strong>Email:</strong> info@bdrpconsulting.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
        </div>
        <form>
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
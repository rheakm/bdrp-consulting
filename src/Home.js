import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./App.css";

export default function Home() {
  return (
    <motion.section className="home-section card" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
      <div className="home-content">
        <h1 className="home-title">
          Welcome to <span className="accent-text">BDRP Consulting</span>
        </h1>
        <p className="home-lead spaced">
          At BDRP Consulting, we deliver tailored, end-to-end solutions that align with your strategic goals, reduce operational risk, and accelerate digital transformation.
        </p>
        <p className="home-lead spaced">
          Our team brings deep technical knowledge and industry best practices to every engagement—ensuring secure, scalable, and future-ready outcomes.
        </p>
        <Link className="cta home-cta" to="/contact">Let Us Help</Link>
        <div className="dashboard">
          <div className="dashboard-item">
            <div className="dashboard-value">50+</div>
            <div className="dashboard-label">Programs completed</div>
          </div>
          <div className="dashboard-item">
            <div className="dashboard-value">$100M</div>
            <div className="dashboard-label">Run Rate Savings</div>
          </div>
          <div className="dashboard-item">
            <div className="dashboard-value">5000+</div>
            <div className="dashboard-label">Circuits migrated</div>
          </div>
          <div className="dashboard-item">
            <div className="dashboard-value">20+</div>
            <div className="dashboard-label">DC Optimizations</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
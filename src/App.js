import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import logo from './logo.png';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import SDWANMigration from "./SDWANMigration";
import CloudMigration from "./CloudMigration";
import ITProcessReengineering from "./ITProcessReengineering";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav">
        <Link to="/" className="brand-enhanced" style={{ textDecoration: "none" }}>
          <img src={logo} alt="BDRP Consulting Logo" className="logo-img" />
          <div className="brand-text">
            <div className="brand-title-large">BDRP Consulting</div>
            <div className="brand-sub-large">Security &bull; Infrastructure &bull; Cloud &bull; Automation</div>
          </div>
        </Link>
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <Link className="nav-btn" to="/about">About</Link>
            </li>
            <li className="services-dropdown">
              <Link className="nav-btn" to="/services">Services</Link>
              <ul className="submenu">
                <li><Link to="/services/sdwan-migration">Global SDWAN Migration</Link></li>
                <li><Link to="/services/cloud-migration">Cloud Migration</Link></li>
                <li><Link to="/services/it-process-reengineering">IT Process Re-Engineering</Link></li>
              </ul>
            </li>
            <li>
              <Link className="nav-btn" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          className="mobile-nav"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
        >
          <ul>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>BDRP Consulting</div>
        <div>© 2025 BDRP Consulting</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/sdwan-migration" element={<SDWANMigration />} />
          <Route path="/services/cloud-migration" element={<CloudMigration />} />
          <Route path="/services/it-process-reengineering" element={<ITProcessReengineering />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

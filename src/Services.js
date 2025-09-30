import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./App.css";

export default function Services() {
  return (
    <motion.section className="section card services-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Our Services</h2>
      <div className="services-flex">
        <div className="service-main">
          <h3>Program Delivery</h3>
          <p>
            BDRP Consulting provides end-to-end leadership for Tier 1, enterprise-scale programs that are mission-critical and strategically transformative.
            With deep expertise in program governance, portfolio management, and large-scale delivery, we ensure your most complex initiatives are executed with precision and measurable impact.
          </p>
          <ul className="service-features">
            <li><strong>Enterprise Transformation Leadership</strong> – Guiding large-scale cloud, IT modernization, and digital initiatives.</li>
            <li><strong>Tier 1 Program Management</strong> – Delivering high-value programs with budgets in the hundreds of millions.</li>
            <li><strong>Governance &amp; PMO Setup</strong> – Establishing executive steering, reporting, and control frameworks.</li>
            <li><strong>Multi-Stakeholder Alignment</strong> – Coordinating across business units, functions, and global geographies.</li>
            <li><strong>Risk &amp; Issue Management</strong> – Proactively identifying and mitigating risks to safeguard delivery.</li>
            <li><strong>Operational Assurance</strong> – Maintaining stability of mission-critical environments during transformation.</li>
          </ul>
        </div>
        <div className="service-outcome-highlight">
          <span>The Outcome:</span>
          <div>
            Programs delivered on time, on budget, and with sustainable business value — giving your organization the confidence and agility to transform and grow.
          </div>
        </div>
      </div>
      <div className="case-study-dashboard">
        <h3>Explore Our Case Studies</h3>
        <div className="dashboard case-study-dashboard-cards">
          <Link to="/services/sdwan-migration" className="dashboard-item case-link">
            <div className="dashboard-value">SDWAN Migration</div>
            <div className="dashboard-label">Global SD-WAN transformation</div>
          </Link>
          <Link to="/services/cloud-migration" className="dashboard-item case-link">
            <div className="dashboard-value">Cloud Migration</div>
            <div className="dashboard-label">Data center consolidation & cloud</div>
          </Link>
          <Link to="/services/it-process-reengineering" className="dashboard-item case-link">
            <div className="dashboard-value">IT Process Re-Engineering</div>
            <div className="dashboard-label">ServiceNow automation</div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
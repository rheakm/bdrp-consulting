import { motion } from "framer-motion";

export default function SDWANMigration() {
  return (
    <motion.section className="section card case-study-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="case-title">SDWAN Migration</h2>
      <div className="case-flex-row">
        <div className="case-study-block case-block-large">
          <h3 className="case-block-title">Scope & Overview</h3>
          <p className="case-block-text">
            Global SD-WAN migration for a Fortune 100 client, replacing legacy MPLS networks with a modern, cloud-based SD-WAN solution across 5000+ sites.
          </p>
        </div>
        <div className="case-study-block case-block-large">
          <h3 className="case-block-title">Team Composition</h3>
          <ul className="case-block-list">
            <li>Program Manager</li>
            <li>Network Architects</li>
            <li>Security Engineers</li>
            <li>Field Deployment Teams</li>
          </ul>
        </div>
      </div>
      <div className="case-flex-row">
        <div className="case-study-block case-block-medium">
          <h3 className="case-block-title">Business Objectives</h3>
          <ul className="case-block-list">
            <li>Reduce network costs and complexity</li>
            <li>Increase agility and scalability</li>
            <li>Enable cloud-first strategy</li>
            <li>Enhance security and performance</li>
          </ul>
        </div>
        <div className="case-study-block case-block-medium">
          <h3 className="case-block-title">Migration Plan</h3>
          <ul className="case-block-list">
            <li>Discovery and assessment of existing infrastructure</li>
            <li>Design of SD-WAN architecture and migration roadmap</li>
            <li>Phased migration and cutover</li>
            <li>Testing, validation, and optimization</li>
          </ul>
        </div>
      </div>
      <div className="case-study-dashboard">
        <h3 className="case-dashboard-title">Results Dashboard</h3>
        <div className="dashboard case-dashboard-cards">
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">5000+</div>
            <div className="dashboard-label">Sites Migrated</div>
          </motion.div>
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">$100M+</div>
            <div className="dashboard-label">Annual Savings</div>
          </motion.div>
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">99.99%</div>
            <div className="dashboard-label">Network Uptime</div>
          </motion.div>
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">6 Months</div>
            <div className="dashboard-label">Migration Timeline</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
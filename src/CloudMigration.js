import { motion } from "framer-motion";

export default function CloudMigration() {
  return (
    <motion.section className="section card case-study-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="case-title">Cloud Migration</h2>
      <div className="case-flex-row">
        <div className="case-study-block case-block-large">
          <h3 className="case-block-title">Scope & Overview</h3>
          <p className="case-block-text">
            Large-scale data center consolidation and cloud migration for a Fortune 100 enterprise, moving 2000+ workloads to AWS and Azure. The project enabled a cloud-first strategy, improved scalability, and reduced operational costs.
          </p>
        </div>
        <div className="case-study-block case-block-large">
          <h3 className="case-block-title">Team Composition</h3>
          <ul className="case-block-list">
            <li>Cloud Architects</li>
            <li>Migration Engineers</li>
            <li>Security & Compliance Specialists</li>
            <li>Project Managers</li>
          </ul>
        </div>
      </div>
      <div className="case-flex-row">
        <div className="case-study-block case-block-medium">
          <h3 className="case-block-title">Business Objectives</h3>
          <ul className="case-block-list">
            <li>Reduce data center footprint and costs</li>
            <li>Accelerate cloud adoption</li>
            <li>Improve scalability and disaster recovery</li>
            <li>Enable digital transformation</li>
          </ul>
        </div>
        <div className="case-study-block case-block-medium">
          <h3 className="case-block-title">Migration Plan</h3>
          <ul className="case-block-list">
            <li>Assessment and cloud readiness analysis</li>
            <li>Design of migration strategy and landing zones</li>
            <li>Application and data migration in waves</li>
            <li>Post-migration optimization</li>
          </ul>
        </div>
      </div>
      <div className="case-study-dashboard">
        <h3 className="case-dashboard-title">Results Dashboard</h3>
        <div className="dashboard case-dashboard-cards">
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">2000+</div>
            <div className="dashboard-label">Workloads Migrated</div>
          </motion.div>
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">8</div>
            <div className="dashboard-label">Data Centers Consolidated</div>
          </motion.div>
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">12 Months</div>
            <div className="dashboard-label">Migration Timeline</div>
          </motion.div>
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">$50M+</div>
            <div className="dashboard-label">Annual Savings</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
import { motion } from "framer-motion";

export default function ITProcessReengineering() {
  return (
    <motion.section className="section card case-study-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="case-title">IT Process Re-Engineering (ServiceNow)</h2>
      <div className="case-flex-row">
        <div className="case-study-block case-block-large">
          <h3 className="case-block-title">Scope & Overview</h3>
          <p className="case-block-text">
            Jackyl Consulting re-engineered ITSM processes for a Fortune 100 client, implementing ServiceNow to automate workflows and improve service delivery. The engagement focused on transforming legacy processes into modern, automated workflows for greater efficiency and transparency.
          </p>
        </div>
        <div className="case-study-block case-block-large">
          <h3 className="case-block-title">Team Composition</h3>
          <ul className="case-block-list">
            <li>ITSM Consultants</li>
            <li>ServiceNow Developers</li>
            <li>Change Management Specialists</li>
            <li>Project Managers</li>
          </ul>
        </div>
      </div>
      <div className="case-flex-row">
        <div className="case-study-block case-block-medium">
          <h3 className="case-block-title">Business Objectives</h3>
          <ul className="case-block-list">
            <li>Automate IT service management</li>
            <li>Increase operational efficiency</li>
            <li>Enhance user experience</li>
            <li>Enable real-time reporting and analytics</li>
          </ul>
        </div>
        <div className="case-study-block case-block-medium">
          <h3 className="case-block-title">Migration Plan</h3>
          <ul className="case-block-list">
            <li>Process assessment and gap analysis</li>
            <li>Design and configuration of ServiceNow modules</li>
            <li>Data migration and integration</li>
            <li>User training and change management</li>
          </ul>
        </div>
      </div>
      <div className="case-study-dashboard">
        <h3 className="case-dashboard-title">Results Dashboard</h3>
        <div className="dashboard case-dashboard-cards">
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">30%</div>
            <div className="dashboard-label">Reduction in Ticket Volume</div>
          </motion.div>
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">50%</div>
            <div className="dashboard-label">Faster Resolution Time</div>
          </motion.div>
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">100%</div>
            <div className="dashboard-label">Process Automation</div>
          </motion.div>
          <motion.div className="dashboard-item" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            <div className="dashboard-value">6 Months</div>
            <div className="dashboard-label">Implementation Timeline</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
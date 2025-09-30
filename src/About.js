import { motion } from "framer-motion";
import "./App.css";

export default function About() {
  return (
    <motion.section className="section card about-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Our Story</h2>
        <div className="about-main">
          <p>
            <strong>BDRP Consulting</strong> was established in 2016 through the collaboration of highly skilled and seasoned executives with extensive experience in large corporate environments. These professionals have consistently demonstrated success in delivering Tier 1 programs at the highest standards.
          </p>
          <p>
            Our firm sets a new benchmark for consulting excellence by assembling industry-certified experts with proven track records. We empower businesses to accelerate growth by enhancing return on invested capital, optimizing operational efficiencies, maximizing revenue streams, and cultivating a sustainable competitive advantage through tailored, innovative solutions.
          </p>
        </div>
        <div className="about-grid">
            <div className="about-methodology">
            <h3>Delivery Methodology</h3>
            <ol>
                <li><strong>Discover</strong> – We assess your current environment, gather requirements, and align with business goals.</li>
                <li><strong>Design</strong> – We architect tailored network, security, and cloud solutions using best practices and compliance standards.</li>
                <li><strong>Build</strong> – Our team implements and configures the solution with automation, precision, and speed.</li>
                <li><strong>Secure</strong> – We validate and harden deployments, ensuring security and regulatory alignment.</li>
                <li><strong>Handover</strong> – Final documentation, training, and optimization ensure a smooth transition and long-term success.</li>
            </ol>
            <p>
                Our approach is agile, security-first, and focused on delivering measurable value every time.
            </p>
            </div>
            <div className="about-difference">
                <h3>The BDRP Difference</h3>
                <p>
                BDRP Consulting is dedicated to maximizing the value of your assets while optimizing cost efficiency. We focus on balancing performance with sustainability, ensuring your environment remains reliable without being pushed to obsolescence.
                </p>
                <p>
                Through advanced monitoring, automation, and rapid remediation, we minimize downtime and reduce the need for manual intervention, enabling support teams to focus on higher-value initiatives. Regular reviews and proactive stakeholder engagement allow us to address challenges in real time, ensuring smooth operations and stronger business outcomes.
                </p>
            </div>
        </div>

      <div className="about-ceo ceo-flex">
        <div className="ceo-content">
          <h2 className="ceo-title">Meet our CEO - Deepak Sharma</h2>
          <div>
            <p>
                I am an AWS Certified Cloud Architect and Global Delivery Leader with more than 25 years of experience guiding organizations through transformation and growth. My career spans IT Strategy & Governance, Cloud Delivery, Business Transformation, and Enterprise Program Leadership, with a proven record of building PMOs, leading large-scale technology implementations, and driving organizational change.
            </p>
            <p>
                I bring a unique balance of strategic vision, financial acumen, and hands-on execution, enabling me to lead complex, Tier 1 programs that demand robust, scalable, and business-aligned solutions. Beyond delivery, my focus is on creating long-term value, shaping technology strategy, and building high-performing teams that accelerate innovation and measurable business outcomes.
            </p>
            <p>
                As a leader, I am passionate about aligning technology with business strategy to help enterprises achieve sustainable growth, operational excellence, and competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
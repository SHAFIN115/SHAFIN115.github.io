// src/components/Experience.js
import React from 'react';
import { FaBriefcase, FaProjectDiagram, FaTools, FaYahoo } from 'react-icons/fa'; // Updated to import FaYahoo from react-icons/fa
import { SiInstagram, SiGoogle, SiMeta, SiLine, SiGooglemaps } from 'react-icons/si';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => (
  <div className="experience-container">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="experience-title"
    >
      My Experience
    </motion.h2>

    {/* Professional Roles Section */}
    <motion.div className="experience-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <h3><FaBriefcase className="section-icon" /> Professional Roles</h3>
      <div className="experience-cards">
        {[{ title: 'Software Engineer', company: 'JB Connect Ltd.', period: 'June 2023 - Present' },
          { title: 'Intern Software Engineer', company: 'Nagorik Software Company', period: 'June 2022 - May 2023' }].map((role, index) => (
          <motion.div key={index} className="experience-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h4>{role.title}</h4>
            <p>{role.company}</p>
            <span>{role.period}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Projects Worked On Section */}
    <motion.div className="experience-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
      <h3><FaProjectDiagram className="section-icon" /> Projects Worked On</h3>
      <div className="experience-cards">
        {[{ name: 'BridgeBooks System', description: 'Contributed to backend and frontend development, focusing on database schemas and complex issue resolution.' },
          { name: 'AI-Driven Games', description: 'Developed an AI-based game using advanced algorithms during academic tenure.' },
          { name: 'Machine Learning Models for Medical Predictions', description: 'Created models to assist in predictive analysis for healthcare applications.' }].map((project, index) => (
          <motion.div key={index} className="experience-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Technical Contributions Section */}
    <motion.div className="experience-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
      <h3><FaTools className="section-icon" /> Technical Contributions</h3>
      <div className="experience-cards">
        {[{ contribution: 'Integrated popular APIs such as Instagram, Graph, Google, and Meta to enhance application capabilities.' },
          { contribution: 'Optimized system performance with AWS services like CloudWatch, RDS, Lambda, S3, EC2, SNS, and SQS.' },
          { contribution: 'Developed reusable React components, ensuring cohesive design and efficient development.' }].map((tech, index) => (
          <motion.div key={index} className="experience-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <p>{tech.contribution}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Famous APIs Section */}
    <motion.div className="experience-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
      <h3><FaProjectDiagram className="section-icon" /> Famous APIs Integrated</h3>
      <div className="experience-cards">
        {[{ name: 'Instagram API', icon: <SiInstagram /> }, 
          { name: 'Graph API', icon: <SiMeta /> },
          { name: 'Google API', icon: <SiGoogle /> },
          { name: 'Google Maps API', icon: <SiGooglemaps /> },
          { name: 'Line API', icon: <SiLine /> },
          { name: 'Yahoo API', icon: <FaYahoo /> }, // Updated to use FaYahoo
          { name: 'Rakuten SMS API', icon: <FaTools /> }].map((api, index) => (
          <motion.div key={index} className="experience-card api-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="icon">{api.icon}</div>
            <p>{api.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Experience;

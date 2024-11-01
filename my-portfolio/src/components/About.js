// src/components/About.js
import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaAward, FaCertificate } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiAmazonwebservices } from 'react-icons/si';
import { motion } from 'framer-motion';
import './About.css';

const About = () => (
  <motion.div
    className="about-container"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2>About Me</h2>
    <motion.p
      className="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      I'm <span className="highlight">Shafin Junayed</span>, a passionate software engineer specializing in full-stack development and cloud solutions. I thrive on solving complex problems and crafting efficient, scalable applications.
    </motion.p>

    {/* Personal Mission Statement */}
    <p className="mission">
      "Driven by curiosity and innovation, I aim to create impactful solutions that make a difference."
    </p>

    <h3><FaCode className="section-icon" /> Professional Experience</h3>
    <p>
      Currently, I work as a Software Engineer at <span className="highlight">JB Connect Ltd.</span>, contributing to backend development, API integration, and cloud solutions. Previously, I led full-stack projects during my internship at <span className="highlight">Nagorik Software Company</span>.
    </p>

    <h3><FaAward className="section-icon" /> Achievements</h3>
    <motion.div className="achievements-list">
      <motion.div className="achievement-card" whileHover={{ scale: 1.05 }}>
        <strong>Codeforces:</strong> Solved 230+ problems
      </motion.div>
      <motion.div className="achievement-card" whileHover={{ scale: 1.05 }}>
        <strong>HackerRank:</strong> Gold in C++, Silver in SQL
      </motion.div>
      <motion.div className="achievement-card" whileHover={{ scale: 1.05 }}>
        <strong>ACM ICPC:</strong> Participated twice, solving four problems
      </motion.div>
      <motion.div className="achievement-card" whileHover={{ scale: 1.05 }}>
        <strong>Physics Olympiad:</strong> 2nd place (2018)
      </motion.div>
    </motion.div>

    <h3><FaCertificate className="section-icon" /> Certifications</h3>
    <motion.div className="certifications-list">
      <motion.a href="https://www.coursera.org/account/accomplishments/verify/MVW2K4MNB2N7" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}>
        Introduction to Git and GitHub
      </motion.a>
      <motion.a href="https://www.coursera.org/account/accomplishments/verify/3T578LDB3YC8" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}>
        IT Project Management
      </motion.a>
      <motion.a href="https://www.coursera.org/account/accomplishments/verify/MVW2K4MNB2N7" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}>
        Regular Expression in Python
      </motion.a>
      <motion.a href="https://www.coursera.org/account/accomplishments/verify/4J5UTQU8SZG9" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}>
        Get Started with Jira
      </motion.a>
      <motion.a href="https://www.coursera.org/account/accomplishments/verify/TRBJFGJHNULJ" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}>
        Programming Foundations with JavaScript, HTML, and CSS
      </motion.a>
      <motion.a href="https://www.coursera.org/account/accomplishments/verify/NQMNVNXPJWC6" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}>
        Building Basic Relational Databases in SQL Server Management Studio
      </motion.a>
      <motion.a href="https://www.coursera.org/account/accomplishments/verify/RT4DKEBQ9S5P" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }}>
        Machine Learning Foundations: A Case Study Approach
      </motion.a>
    </motion.div>

    <h3>My Tech Stack</h3>
    <motion.div
      className="tech-icons"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SiJavascript size={40} title="JavaScript" />
      <SiReact size={40} title="React" />
      <SiNodedotjs size={40} title="Node.js" />
      <SiPython size={40} title="Python" />
      <SiAmazonwebservices size={40} title="AWS" />
    </motion.div>

    {/* Social Links */}
    <div className="social-links">
      <a href="https://github.com/SHAFIN115" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/shafin-junayed-b51480188/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
      </a>
    </div>
  </motion.div>
);

export default About;

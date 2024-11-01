// src/components/About.js
import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaAward, FaCertificate } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiAmazonwebservices } from 'react-icons/si';
import { motion } from 'framer-motion';
import './About.css';

const About = () => (
  <motion.div
    className="about-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      About Me
    </motion.h2>

    <motion.p
      className="intro"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      I'm <span className="highlight">Shafin Junayed</span>, a passionate software engineer specializing in full-stack development and cloud solutions. I thrive on solving complex problems and crafting efficient, scalable applications.
    </motion.p>

    <motion.p
      className="mission"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      "Driven by curiosity and innovation, I aim to create impactful solutions that make a difference."
    </motion.p>

    <motion.h3
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <FaCode className="section-icon" /> Professional Experience
    </motion.h3>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      Currently, I work as a Software Engineer at <span className="highlight">JB Connect Ltd.</span>, contributing to backend development, API integration, and cloud solutions.
    </motion.p>

    <motion.h3
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <FaAward className="section-icon" /> Achievements
    </motion.h3>
    <motion.div
      className="achievements-list"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      {['Codeforces: Solved 230+ problems', 'HackerRank: Gold in C++, Silver in SQL', 'ACM ICPC: Participated twice', 'Physics Olympiad: 2nd place'].map((achievement, index) => (
        <motion.div
          key={index}
          className="achievement-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          {achievement}
        </motion.div>
      ))}
    </motion.div>

    <motion.h3
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <FaCertificate className="section-icon" /> Certifications
    </motion.h3>
    <motion.div
      className="certifications-list"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      {[
        { title: "Introduction to Git and GitHub", link: "https://www.coursera.org/account/accomplishments/verify/MVW2K4MNB2N7" },
        { title: "IT Project Management", link: "https://www.coursera.org/account/accomplishments/verify/3T578LDB3YC8" },
        { title: "Regular Expression in Python", link: "https://www.coursera.org/account/accomplishments/verify/MVW2K4MNB2N7" },
        { title: "Get Started with Jira", link: "https://www.coursera.org/account/accomplishments/verify/4J5UTQU8SZG9" },
        { title: "Programming Foundations with JavaScript, HTML, and CSS", link: "https://www.coursera.org/account/accomplishments/verify/TRBJFGJHNULJ" },
        { title: "Building Basic Relational Databases in SQL Server Management Studio", link: "https://www.coursera.org/account/accomplishments/verify/NQMNVNXPJWC6" },
        { title: "Machine Learning Foundations: A Case Study Approach", link: "https://www.coursera.org/account/accomplishments/verify/RT4DKEBQ9S5P" }
      ].map((cert, index) => (
        <motion.a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="certification-link"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          {cert.title}
        </motion.a>
      ))}
    </motion.div>

    <motion.h3
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      My Tech Stack
    </motion.h3>
    <motion.div
      className="tech-icons"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      {[<SiJavascript />, <SiReact />, <SiNodedotjs />, <SiPython />, <SiAmazonwebservices />].map((Icon, index) => (
        <motion.div
          key={index}
          className="tech-icon"
          whileHover={{ scale: 1.2, rotate: 10 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          {Icon}
        </motion.div>
      ))}
    </motion.div>

    <h3>Connect with Me</h3>
    <p>Follow my work and connect with me on these platforms:</p>
    <div className="social-links">
      <a href="https://github.com/SHAFIN115" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/shafin-junayed-b51480188/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} className="social-icon" />
      </a>
    </div>
  </motion.div>
);

export default About;

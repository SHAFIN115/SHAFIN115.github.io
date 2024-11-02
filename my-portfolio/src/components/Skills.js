// src/components/Skills.js
import React from 'react';
import { FaAws, FaReact, FaNode, FaLaravel, FaVuejs, FaHtml5, FaJava } from 'react-icons/fa';
import { SiPhp, SiJavascript, SiPython, SiCplusplus, SiDjango, SiSwift, SiMysql, SiPostgresql } from 'react-icons/si'; // Added SiPhp
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => (
  <div className="skills-container">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="skills-title"
    >
      My Skills
    </motion.h2>

    {/* Programming Languages Section */}
    <motion.div className="skills-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
      <h3>Programming Languages</h3>
      <div className="skills-grid">
        {[{ name: 'PHP', icon: <SiPhp /> }, { name: 'C/C++', icon: <SiCplusplus /> }, { name: 'Python', icon: <SiPython /> }, { name: 'JavaScript', icon: <SiJavascript /> }, { name: 'Java', icon: <FaJava /> }, { name: 'Node.js', icon: <FaNode /> }, { name: 'Swift', icon: <SiSwift /> }].map((skill, index) => (
          <motion.div key={index} className="skill-card" whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Frameworks Section */}
    <motion.div className="skills-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
      <h3>Frameworks</h3>
      <div className="skills-grid">
        {[{ name: 'Laravel', icon: <FaLaravel /> }, { name: 'Express', icon: <FaNode /> }, { name: 'Django', icon: <SiDjango /> }, { name: 'ASP.NET', icon: <FaHtml5 /> }].map((skill, index) => (
          <motion.div key={index} className="skill-card" whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Frontend Section */}
    <motion.div className="skills-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
      <h3>Frontend</h3>
      <div className="skills-grid">
        {[{ name: 'React', icon: <FaReact /> }, { name: 'Vue.js', icon: <FaVuejs /> }, { name: 'HTML', icon: <FaHtml5 /> }].map((skill, index) => (
          <motion.div key={index} className="skill-card" whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Cloud Services Section */}
    <motion.div className="skills-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
      <h3>Cloud Services</h3>
      <div className="skills-grid">
        {['EC2', 'S3', 'CloudWatch', 'RDS', 'Lambda', 'SNS', 'SQS'].map((service, index) => (
          <motion.div key={index} className="skill-card" whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="icon"><FaAws /></div>
            <p>{service}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Databases Section */}
    <motion.div className="skills-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
      <h3>Databases</h3>
      <div className="skills-grid">
        {[{ name: 'MySQL', icon: <SiMysql /> }, { name: 'PostgreSQL', icon: <SiPostgresql /> }].map((skill, index) => (
          <motion.div key={index} className="skill-card" whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Skills;

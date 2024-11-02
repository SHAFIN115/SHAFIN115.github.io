// src/components/Education.js
import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => (
  <div className="education-container">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="education-title"
    >
      Educational History
    </motion.h2>

    <div className="education-cards">
      {/* University Education */}
      <motion.div className="education-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
        <div className="education-content">
          <img src="/KUET.png" alt="KUET Logo" className="education-logo" /> {/* Updated path */}
          <div>
            <h3>B.Sc. in Computer Science and Engineering, KUET</h3>
            <p className="location">Khulna, Bangladesh | 2018 – 2022</p>
            <ul className="education-details">
              <li>Developed machine learning models for medical predictions</li>
              <li>Created web applications using Laravel, Vue.js, and React</li>
              <li>Implemented AI-driven games and mobile apps on iOS</li>
              <li>Built a motorcycle delivery system using ASP and engaged in computer graphics projects using OpenGL</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* High School Education */}
      <motion.div className="education-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
        <div className="education-content">
          <img src="/drmc.png" alt="DRMC Logo" className="education-logo" /> {/* Updated path */}
          <div>
            <h3>Dhaka Residential Model College</h3>
            <p className="location">Dhaka, Bangladesh | 2015 – 2017</p>
            <ul className="education-details">
              <li>Science</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Education;

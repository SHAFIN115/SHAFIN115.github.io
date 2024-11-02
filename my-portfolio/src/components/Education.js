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
          <img src="/KUET.png" alt="KUET Logo" className="education-logo" /> {/* University logo */}
          <div>
            <p>
              <a href="https://www.kuet.ac.bd/" target="_blank" rel="noopener noreferrer" className="institution-link">
                B.Sc. in Computer Science and Engineering, KUET
              </a>
            </p>
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
          <img src="/drmc.png" alt="DRMC Logo" className="education-logo" /> {/* High school logo */}
          <div>
            <p>
              <a href="http://www.drmc.edu.bd/" target="_blank" rel="noopener noreferrer" className="institution-link">
                Dhaka Residential Model College
              </a>
            </p>
            <p className="location">Dhaka, Bangladesh | 2015 – 2017</p>
            <p className="grade">HSC: 5 (A+)</p>
            <ul className="education-details">
              <li>Science</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* SSC Education */}
      <motion.div className="education-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
        <div className="education-content">
          <img src="/mphs.png" alt="MPHS Logo" className="education-logo" /> {/* SSC school logo */}
          <div>
            <p>
              <a href="https://mpsc.edu.bd/" target="_blank" rel="noopener noreferrer" className="institution-link">
                Mohammadpur Preparatory Higher Secondary School
              </a>
            </p>
            <p className="location">Dhaka, Bangladesh | 2015</p>
            <p className="grade">SSC: 5 (A+)</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Education;

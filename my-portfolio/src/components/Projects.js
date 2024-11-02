// src/components/Projects.js
import React from 'react';
import { FaServer, FaRobot, FaMobileAlt} from 'react-icons/fa';
import { GiGymBag } from 'react-icons/gi';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => (
  <div className="projects-container">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="projects-title"
    >
      Projects
    </motion.h2>

    <div className="projects-sections">
      {/* Backend Projects */}
      <motion.div className="projects-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <h3><FaServer className="section-icon" /> Backend Projects</h3>
        <div className="projects-cards">
          <motion.div className="project-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h4>BBS (BridgeBooks) System</h4>
            <p>Contributed to the development and maintenance of a backend system, working with database schemas and architecture to enhance performance and data integrity.</p>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h4>Book Management System</h4>
            <p>Developed a comprehensive book management system, incorporating CRUD operations and a user-friendly interface for managing large book inventories.</p>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h4>Doctors Appointment System</h4>
            <p>Implemented Google APIs and additional integrations to create an efficient system for booking and managing doctor appointments.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* AI and Machine Learning Projects */}
      <motion.div className="projects-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <h3><FaRobot className="section-icon" /> Artificial Intelligence & Machine Learning</h3>
        <div className="projects-cards">
          <motion.div className="project-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h4>AI Snail Games</h4>
            <p>Developed an AI-based game using Python and complex algorithms to simulate snail behavior and movement, with a focus on artificial intelligence.</p>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h4>FaceMask Detection</h4>
            <p>Built a FaceMask detection system using YOLO and other machine learning models, aiming to enhance public safety during health crises.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile and iOS Projects */}
      <motion.div className="projects-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <h3><FaMobileAlt className="section-icon" /> Mobile and iOS Projects</h3>
        <div className="projects-cards">
          <motion.div className="project-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h4>iChat</h4>
            <p>Developed a messaging app using Swift for iOS, allowing users to communicate in real-time. Focused on providing a smooth user experience and secure communication.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Graphics and OpenGL Projects */}
      <motion.div className="projects-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <h3><GiGymBag className="section-icon" /> Graphics & OpenGL Projects</h3>
        <div className="projects-cards">
          <motion.div className="project-card" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 200 }}>
            <h4>OpenGL Gym Project</h4>
            <p>Created a 3D gym environment using OpenGL, featuring two floors with moving objects, sandboxes, and realistic gym equipment simulation.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Projects;

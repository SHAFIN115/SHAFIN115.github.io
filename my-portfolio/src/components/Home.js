// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { ReactTyped as Typed } from 'react-typed';
import { motion } from 'framer-motion';
import './Home.css';

const particlesConfig = {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 60,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    move: { enable: true, speed: 1, direction: "none", out_mode: "out" }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100, duration: 0.4 } }
  },
  retina_detect: true
};

const Home = () => (
  <div
    className="home-container"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/self.jpg'})`, // Reference the image from public folder
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <Particles className="particles-bg" options={particlesConfig} />
    <div className="overlay">
      <div className="content">
        {/* Profile Section */}
        <motion.div 
          className="profile-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/profile.jpg" alt="Profile" className="profile-image" />
          <h1>I'm <span className="highlight">Shafin Junayed</span></h1>

          <Typed
            className="typed-text"
            strings={[
                "Software Engineer",
                "API Integration Specialist",
                "React Developer",
                "Cloud Solutions Architect (AWS)",
                "Full Stack Developer",
                "Database Designer",
                "Frontend Developer",
                "Backend Engineer",
                "System Optimizer",
              ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </motion.div>

        {/* Navigation Section */}
        <motion.div 
          className="nav-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <nav className="nav-buttons">
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/skills" className="nav-link">Skills</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/education" className="nav-link">Education</Link>
          </nav>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Home;

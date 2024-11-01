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
  <div className="home-container">
    <Particles className="particles-bg" options={particlesConfig} />
    <div className="overlay">
      <div className="content">
        {/* Left Column - Profile Image */}
        <motion.div 
          className="profile-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/profile.jpg" alt="Profile" className="profile-image" />
        </motion.div>

        {/* Right Column - Text and Links */}
        <motion.div 
          className="text-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>I'm <span className="highlight">Shafin Junayed</span></h1>

          <Typed
            className="typed-text"
            strings={[
              "Software Engineer",
              "Full Stack Developer",
              "Machine Learning Enthusiast",
              "Cloud Services Expert"
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
          
          <p>Passionate about creating impactful software solutions that drive success in the digital world.</p>

          <nav className="nav-buttons">
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Home;

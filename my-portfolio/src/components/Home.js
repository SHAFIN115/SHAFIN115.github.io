// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { ReactTyped as Typed } from 'react-typed'; // Update the import
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
      <motion.div 
        className="content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hello, I'm <span className="highlight">Shafin Junayed</span></h1>
        
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
        
        <p>I build scalable, efficient, and innovative solutions for modern applications.</p>

        <nav className="nav-buttons">
          <Link to="/about" className="nav-link">About Me</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </motion.div>
    </div>
  </div>
);

export default Home;

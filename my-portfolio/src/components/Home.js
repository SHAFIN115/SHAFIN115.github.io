import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <h1>Welcome to Shafin's Portfolio</h1>
    <p>Explore my journey, skills, and achievements</p>
    <nav>
      <Link to="/about">About</Link> | 
      <Link to="/education">Education</Link> | 
      <Link to="/projects">Projects</Link> | 
      <Link to="/contact">Contact</Link>
    </nav>
  </div>
);

export default Home;

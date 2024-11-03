import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = () => (
  <header className="header">
    <img src="profile.jpg" alt="Vishnu Ramjiyani" className="profile-pic" />
    <h1>Vishnu Ramjiyani</h1>
    <p>Front-End Developer</p>
    <div className="social-links">
      <a href="https://github.com/Vishnu-Ramjiyani" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/vishnu-ramjiyani/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </div>
  </header>
);

export default Header;

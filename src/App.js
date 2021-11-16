import React from 'react';
import { FaHome, FaBookOpen, FaBolt, FaPhone, FaBars } from 'react-icons/fa';

import './App.css';
import Projects from './projects'
import Home from './home'
import Skills from './skills'
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Route, Link, Routes, NavLink
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <input id="checkbox" type="checkbox" />
        <div className="main">
          <div className="port">
            <div className="nav">
              <div className="nav_bar">
                <span className="home_text"><NavLink exact activeClassName="active" to="/"><FaHome /> </NavLink></span>
                <span className="projects_text"><NavLink activeClassName="active" to="/projects"><FaBookOpen /> </NavLink></span>
                <span className="skills_text"><NavLink activeClassName="active" to="/skills"><FaBolt /> </NavLink></span>
              </div>
              <input id="nav_checkbox" type="checkbox" />

              <div className="nav_bar contact">
                <span><label className="burger burger_cross" for="nav_checkbox">X</label></span>
                <span className="dark_text"><label className="dark" for="checkbox"></label></span>
                <span className="contact_text"><NavLink activeClassName="active" to="/contacts"><FaPhone /> </NavLink></span>
                <span><label className="burger burger_bar" for="nav_checkbox"><FaBars /></label></span>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contacts" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

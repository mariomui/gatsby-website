import React from 'react';
import { Link } from 'gatsby'

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" >
              <div className="nav-link">
                HOME
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/SkillsPage/">
              <div className="nav-link">
                About-Me
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav >

  )
}

export default NavBar;
import React from 'react';
import { Link } from 'gatsby'
import Face from '../components/Face'
import navbarCss from '../styles/navbar.module.css'

const nameCss = {
  color: 'white'
};
const noLineCss = {
  textDecoration: 'none',
  listStyle: 'none',
}

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div id="navbarColor01">
        <ul className={`${navbarCss.list} navbar-nav mr-auto`}>
          <li className="nav-item active">
            <Face />
          </li>
          <li className="nav-item active">
            <Link style={noLineCss} to="/" >
              <div className={`${navbarCss.nameCss} nav-link`}>
                HOME
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={noLineCss} to="/SkillsPage/" >
              <div style={nameCss} className="nav-link">
                About-Me
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={noLineCss} to="/Projects/" >
              <div style={nameCss} className="nav-link">
                Projects
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={noLineCss} to="/ContactPage/" >
              <div style={nameCss} className="nav-link">
                Contacts
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav >

  )
}

export default NavBar;
import React from 'react';
import { Link } from 'gatsby'
import Face from '../components/Face'

const nameCss = {
  color: 'white'
};
const noLineCss = {
  textDecoration: 'none',
  listStyle: 'none'
}
const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div id="navbarColor01">
        <ul style={noLineCss} className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Face />
          </li>
          <li className="nav-item active">
            <Link style={noLineCss} to="/" >
              <div style={nameCss} className="nav-link">
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
            <Link style={noLineCss} to="/ProjectsPage/"  >
              <div style={nameCss} className="nav-link">
                Projects
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={noLineCss} to="/ContactsPage/" >
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
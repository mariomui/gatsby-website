import React from 'react'
// import { Link } from 'gatsby'
// import FooterCss from '../styles/footer.module.css'
const Footer = () => {
  return (
    <div style={{
      height: '10vh', width: '100%', backgroundColor: 'blue'
    }}
      className="navbar navbar-expand-lg navbar-dark bg-primary" > <div id="navbarColor01">
        <a className="btn btn-danger btn-lgstyle" role="button" href="#top">Back to Top</a>

        <p style={{ color: 'white' }}> This website was built using Gatsby, BootswatchCDN and FontAwesome</p>

      </div >
    </div >
  )
}

export default Footer

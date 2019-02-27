import React from 'react'
import NavBar from '../components/NavBar'
import Helm from '../components/Helm'
// import { HelmetProvider } from 'react-helmet-async';
import Footer from './Footer'

// <HelmetProvider>
const Layout = ({ children }) => {
  return (
    <div>

      <Helm />
      <NavBar />

      {children}
      <Footer />
    </div>

  )
}
// /* </HelmetProvider> */

export default Layout
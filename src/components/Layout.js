import React from 'react'
import NavBar from '../components/NavBar'
import Helm from '../components/Helm'
import { HelmetProvider } from 'react-helmet-async';

const Layout = ({ children }) => {
  return (
    <HelmetProvider>

      <Helm />
      <NavBar />
      {children}

    </HelmetProvider>
  )
}

export default Layout
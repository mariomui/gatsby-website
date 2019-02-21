import React from 'react'
import AboutMe from '../components/AboutMe'
// import { HelmetProvider } from 'react-helmet-async'
import Layout from '../components/Layout'
// import containerStyles from '../styles/container.module.css'

class App extends React.Component {
  render() {

    return (
      <Layout>
        <AboutMe />
      </Layout>


    );
  }
}

export default App;
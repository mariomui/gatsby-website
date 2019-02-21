import React from 'react'
import AboutMe from '../components/AboutMe'
import Layout from '../components/Layout'

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
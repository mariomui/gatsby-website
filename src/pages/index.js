import React from 'react'
import Home from '../components/Home'
import Layout from '../components/Layout'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  renderLater = () => {
    return (
      <Layout>
        <Home />
      </Layout >
    );
  }



  render() {
    return (
      <div>
        {this.renderLater()}
      </div>
    )
  }
}


export default App;
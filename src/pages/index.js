import React from 'react'
import Home from '../components/Home'
import Layout from '../components/Layout'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons"
// const iframe = require('iframe');
library.add(fab, fas);
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
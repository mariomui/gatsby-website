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

  isCSSLoaded = () => {
    return new Promise((resolve, reject) => {
      let flag = document.querySelectorAll('link#hey')[0] || false
      resolve(!!flag);

    })
  }

  componentDidMount() {
    this.isCSSLoaded()
      .then((result) => {
        debugger;
        this.setState({
          loading: result
        })
      })
      .catch(err => {
        console.log(err);
      })

  }

  render() {
    return (
      <div>
        {this.state.loading ? this.renderLater() : this.renderLater()}

      </div>
    )
  }
}


export default App;
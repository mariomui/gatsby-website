import React from 'react'
import Home from '../components/Home'
import Layout from '../components/Layout'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons"
// import Helm from '../components/Helm'

library.add(fab, fas);
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  componentWillMount() {

    var dom = document.getElementsByTagName('head')[0]
    if (!dom.classList.value.includes('mario')) {

      const link = document.createElement('link');
      const linkHref = "https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css"
      link.setAttribute('href', linkHref)
      link.setAttribute('rel', 'stylesheet')
      link.setAttribute('type', 'text/css')
      link.classList.value = 'mario';
      dom.insertBefore(link, dom.firstChild)
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


export default Main;
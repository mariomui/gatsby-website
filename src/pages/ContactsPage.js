import React from 'react';
import Layout from '../components/Layout'

function goback() {
  window.history.back();
}
const ContactsPage = () => {
  return (
    <Layout>

      <div>
        Page Under Construction
      <ul>

          <li>
            Mario Mui
      </li>
          <li>
            linkedIn: linkedIn/in/mariomui
      </li>
          <li>
            GeneralPublicEmaiL: mariomui@yahoo.com
      </li>
          <li>
            github: github.com/mariomui
      </li>
          <li>

          </li>
        </ul>
        <button onClick={goback}>
          Back
      </button>
      </div>
    </Layout>
  )
}

export default ContactsPage;
import React, { Fragment } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faceCss from '../styles/face.module.css'

const Face = () => {
  return (
    <Fragment>

      <div className={faceCss.imageContainer}>

        <FontAwesomeIcon style={{ color: 'white', display: 'inline-block' }} icon={['fas', 'circle-notch']} size='5x'>
        </FontAwesomeIcon>
        <div style={{ color: 'white', display: 'inline-block' }}>Mario Mui</div>
      </div>
    </Fragment>
  )
}

export default Face
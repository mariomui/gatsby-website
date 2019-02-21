import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fab);
const IconListEntry = (props) => {
  const { icon } = props;
  return (
    <div>
      <div className="card border-primary mb-3" style={{ display: "inline-block" }}>
        <div className="card-header">{icon.toUpperCase()}</div>
        <div className="card-body">
          <FontAwesomeIcon icon={["fab", icon]} size="7x" />
          <p className="card-text"></p>
        </div>
      </div>
    </div >
  )
}

export default IconListEntry;
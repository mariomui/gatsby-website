import React from 'react'
import IconListEntry from './IconListEntry'
import backEndIconSkillsCss from '../styles/back-end-icon-skills.module.css'
const frontEndIconSkills = require('../assets/resume').backEndSkills

const FrontEndIconList = () => {

  return (
    <div className={backEndIconSkillsCss.row}>
      {
        frontEndIconSkills.map(icon => {
          return (
            <IconListEntry icon={icon} />
          )
        })
      }
    </div>
  )
}
export default FrontEndIconList
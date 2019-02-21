import React from 'react'
import IconListEntry from './IconListEntry'
import frontEndIconSkillsCss from '../styles/front-end-icon-skills.module.css'
const frontEndIconSkills = require('../assets/resume').frontEndSkills

const FrontEndIconList = () => {

  return (
    <div className={frontEndIconSkillsCss.row}>
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
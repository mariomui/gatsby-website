import React from 'react'
import IconListEntry from './IconListEntry'
import deployIconSkillsCss from '../styles/deploy-icon-skills.module.css'
const deployIconSkills = require('../assets/resume').deploySkills

const DeployIconList = () => {

  return (
    <div className={deployIconSkillsCss.row}>
      {
        deployIconSkills.map(icon => {
          return (
            <IconListEntry icon={icon} />
          )
        })
      }
    </div>
  )
}
export default DeployIconList
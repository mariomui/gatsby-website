import React from 'react'
import IconListEntry from './IconListEntry'
import deployIconSkillsCss from '../styles/icon-skills.module.css'
const deployIconSkills = require('../assets/resume').deploySkills

const DeployIconList = () => {

  return (
    <div className={deployIconSkillsCss.row}>
      {
        deployIconSkills.map(iconSkill => {
          return (
            <IconListEntry iconSkill={iconSkill} />
          )
        })
      }
    </div>
  )
}
export default DeployIconList
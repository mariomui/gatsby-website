import React from 'react'
import IconListEntry from './IconListEntry'
import backEndIconSkillsCss from '../styles/icon-skills.module.css'
const backEndIconSkills = require('../assets/resume').backEndSkills

const BackEndIconList = () => {

  return (
    <div className={backEndIconSkillsCss.row}>
      {
        backEndIconSkills.map(iconSkill => {
          return (
            <IconListEntry iconSkill={iconSkill} />
          )
        })
      }
    </div>
  )
}
export default BackEndIconList
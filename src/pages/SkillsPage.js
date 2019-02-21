import React from 'react'
import Layout from '../components/Layout'
import FrontEndIconList from '../components/FrontEndIconList'
import BackEndIconList from '../components/BackEndIconList'
import DeployIconList from '../components/DeployIconList'

const SkillsPage = () => {
  return (
    <Layout>
      <FrontEndIconList />
      <BackEndIconList />
      <DeployIconList />
    </Layout>
  )
}

export default SkillsPage
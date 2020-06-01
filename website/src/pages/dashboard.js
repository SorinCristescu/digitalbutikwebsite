import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../components/seo"
import Headline from "../components/headline"
const Dashboard = () => (
  <Layout>
    <SEO title="Dashboard" />
    <Headline headline="DASHBOARD"/>
    <p>Welcome to page Dashboard</p>
  </Layout>
)

export default Dashboard

import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../components/seo"

const Dashboard = () => (
  <Layout>
    <SEO title="Dashboard" />
    <h4>Hi from the Dashboard page</h4>
    <p>Welcome to page Dashboard</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Dashboard

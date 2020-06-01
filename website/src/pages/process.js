import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../components/seo"

const Process = () => (
  <Layout>
    <SEO title="Process" />
    <h4>Hi from the Process page</h4>
    <p>Welcome to page Process</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Process

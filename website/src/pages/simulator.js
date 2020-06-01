import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../components/seo"

const Simulator = () => (
  <Layout>
    <SEO title="Simulator" />
    <h4>Hi from the Simulator page</h4>
    <p>Welcome to page Simulator</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Simulator

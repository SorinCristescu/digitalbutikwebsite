import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../components/seo"

const Creations = () => (
  <Layout>
    <SEO title="Creations" />
    <h4>Hi from the Creations page</h4>
    <p>Welcome to page Creations</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Creations

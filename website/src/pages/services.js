import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <h4>Hi from the services page</h4>
    <p>Welcome to page Services</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Services

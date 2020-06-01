import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About us" />
    <h4>Hi from the about page</h4>
    <p>Welcome to page About</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About

import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h4>Hi from the Contact page</h4>
    <p>Welcome to page Contact</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact

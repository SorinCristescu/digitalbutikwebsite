import React from "react"
import { Link } from "gatsby"

import Layout from "../layout"
import SEO from "../components/seo"
import Headline from "../components/headline"
const About = () => (
  <Layout>
    <SEO title="About us" />
    <Headline headline="ABOUT US"/>
    <p>Welcome to page About</p>
  </Layout>
)

export default About

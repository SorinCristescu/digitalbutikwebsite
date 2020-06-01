import React, { useEffect }  from "react"
import { Link } from "gatsby"

import { gsap } from 'gsap'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// Components
import Layout from "../layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Headline from "../components/headline"
import Button from "../components/button"

const IndexPage = () => {

  return (
    <Layout>
    <SEO title="Home" />
    <Headline headline="DIGITAL BUTIK"/>
    <Headline headline="A new type of digital agency"/>
    <p>Digital products and user experiences, designed to connect</p>
    <Button/>



  </Layout>
  )

  }

export default IndexPage

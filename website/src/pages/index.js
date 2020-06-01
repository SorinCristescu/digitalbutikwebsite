import React, { useEffect }  from "react"
import { Link } from "gatsby"

import { gsap } from 'gsap'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// Components
import Layout from "../layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Headline from "../components/headline"

const IndexPage = () => {
  const polygon = React.createRef()
  const star = React.createRef()
  
  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin)
      // Add animations to be played once page has load

      gsap.to([star.current], {
        duration:2,
         morphSVG: polygon.current
      })
  }, [star, polygon])
  return (
    <Layout>
    <SEO title="Home" />
    <h4>Hi people</h4>
    <Headline headline="Something to display as headline"/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <svg width="173px" height="164px" viewBox="0 0 173 164" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="About-us" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Desktop-HD" transform="translate(-512.000000, -331.000000)" fill="#5011E7">
              <polygon ref={star} id="Star" points="598.5 466.75 545.305435 494.716038 555.464693 435.483019 512.429385 393.533962 571.902717 384.891981 598.5 331 625.097283 384.891981 684.570615 393.533962 641.535307 435.483019 651.694565 494.716038"></polygon>
          </g>
      </g>
    </svg>
    <svg width="173px" height="164px" viewBox="0 0 173 164" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="About-us" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Desktop-HD" transform="translate(-771.000000, -331.000000)" fill="#5011E7">
              <polygon ref={polygon}  id="Polygon" points="857.5 331 943.570615 393.533962 910.694565 494.716038 804.305435 494.716038 771.429385 393.533962"></polygon>
          </g>
      </g>
    </svg>
    <Link to="/about">Go to about</Link> <br />
    <Link to="/services">Go to services</Link> <br />
    <Link to="/creations">Go to creations</Link> <br />
    <Link to="/dashboard">Go to dashboard</Link> <br />
    <Link to="/simulator">Go to simulator</Link> <br />
    <Link to="/contact">Go to contact</Link> <br />
    <Link to="/process">Go to process</Link> <br />
  </Layout>
  )

  }

export default IndexPage

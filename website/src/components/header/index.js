import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//Components
import Logo from '../../images/logo-black.svg';
import Headroom from 'react-headroom'

// Styles
import { HeaderContainer, LogoImage } from './style'

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
    <Link to="/">
      <LogoImage src={Logo} alt="logo"/>
    </Link>
    <div className="nav-container">
      <Link className="link" to="/about">About</Link> <br />
      <Link className="link" to="/services">Services</Link> <br />
      <Link className="link" to="/process">Process</Link> <br />
      <Link className="link" to="/creations">Creations</Link> <br />
      <Link className="link" to="/simulator">Simulator</Link> <br />
      <Link className="link" to="/dashboard">Log In</Link> <br />
      <Link className="link" to="/contact">Contact</Link> <br />

    </div>
  
  </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

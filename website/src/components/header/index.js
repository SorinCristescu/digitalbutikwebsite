import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

//Components
import Logo from '../../images/logo-white.svg';
import Headroom from 'react-headroom'

// Styles
import { HeaderContainer, LogoImage } from './style'

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
    <Link to="/">
      <LogoImage src={Logo} alt="logo"/>
    </Link>
  
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

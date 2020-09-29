import React from 'react'
import StyledLogo from '../cors/StyledLogo'
import logoLight from '../../assets/icons/logo-raph-light-copie.png'
import logoDark from '../../assets/icons/logo-raph-sans-fond-dark-copie.png'
import StyledLink from '../cors/StyledLink'

const Logo = () => {
  return (
    <div>
      <StyledLink exact to='/' onClick={() => window.scrollTo(0, 0)} padding='0'><StyledLogo src={logoLight} /></StyledLink>
    </div>
  )
}

export default Logo

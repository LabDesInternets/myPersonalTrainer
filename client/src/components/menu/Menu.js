import React from 'react'
import { bool } from 'prop-types'
import StyledLink from '../cors/StyledLink'
import StyledMenu from '../cors/StyledMenu'

const Menu = ({ open, setOpen }) => {
  return (
    <div>
      <StyledMenu open={open}>
        <StyledLink to='/' onClick={() => setOpen(!open)}>Accueil</StyledLink>
        <StyledLink to='/about' onClick={() => setOpen(!open)}>Qui suis-je</StyledLink>
        <StyledLink to='/services' onClick={() => setOpen(!open)}>Prestations</StyledLink>
        <StyledLink to='/prices' onClick={() => setOpen(!open)}>Tarifs et formules</StyledLink>
        <StyledLink to='/blog' onClick={() => setOpen(!open)}>Blog</StyledLink>
        <StyledLink to='/contact' onClick={() => setOpen(!open)}>Me contacter</StyledLink>
      </StyledMenu>
    </div>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu

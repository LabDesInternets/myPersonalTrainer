import React from 'react'
import { withRouter } from 'react-router'
import StyledLink from '../cors/StyledLink'
import styled, { keyframes, css } from 'styled-components'
import { device } from '../cors/ResponsiveSettings'
import logoLight from '../../assets/icons/logo-raph-light-copie.png'
import logoDark from '../../assets/icons/logo-raph-sans-fond-dark-copie.png'



const Navbar = (props) => {

  const { sticky, location } = props

  return (

    <Wrapper cl={sticky ? 'navbarSticky' : 'navbar'} mode={location.pathname === '/contact' ? 'dark' : null}>
      <StyledLink exact to='/' onClick={() => window.scrollTo(0, 0)}><Logo src={logoLight} /></StyledLink>
      <NavContainer>
        <StyledLink exact to='/'>Accueil</StyledLink>
        <StyledLink to='/about'>Qui suis-je</StyledLink>
        <StyledLink to='/services'>Prestations</StyledLink>
        <StyledLink to='/prices'>Tarifs et formules</StyledLink>
        <StyledLink to='/blog'>Blog</StyledLink>
        <StyledLink to='/contact'>Me contacter</StyledLink>
      </NavContainer>
    </Wrapper>

  )
}

export default withRouter(Navbar)

const NavContainer = styled.div`
  width:75%;
  display:flex;
  justify-content: space-between;
`

const Logo = styled.img`
  position: fixed;
  top: calc(0.4vw + 1.7vh);
  left:10px;
  width:1.5em;
`
const moveDown = keyframes`
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0rem);
  }
`
const Wrapper = styled.nav`
    font-size: calc(1rem + 0.6vw);
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    height:7vh;
    z-index: 100;
    background:transparent;
    align-items:center;

  @media ${device.laptop} {
    display:flex;
  }

    ${props =>
    props.cl === 'navbar' &&
    css`
      background: transparent;
    `}
    ${props =>
    props.cl === 'navbarSticky' &&
    css`
      width:100vw;
      background: #03071e;
      color:white;
      animation: ${moveDown} 0.5s ease-in-out;
    `}
    ${props =>
    props.mode === 'dark' &&
    css`
      color:white;
    `}

      
`
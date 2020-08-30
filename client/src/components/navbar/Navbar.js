import React from 'react'
import StyledLink from '../cors/StyledLink'
import styled, { keyframes, css } from 'styled-components'
import { device } from '../cors/ResponsiveSettings'


const Navbar = (props) => {
  const { sticky } = props
  return (
    <div>
      <Wrapper cl={sticky ? 'navbarSticky' : 'navbar'}>
        <NavContainer>
          <StyledLink to='./'>Accueil</StyledLink>
          <StyledLink to='./about'>Qui suis-je</StyledLink>
          <StyledLink to='./services'>Prestations</StyledLink>
          <StyledLink to='./prices'>Tarifs et formules</StyledLink>
          <StyledLink to='./contact'>Me contacter</StyledLink>
        </NavContainer>
      </Wrapper>
    </div>
  )
}

export default Navbar

const NavContainer = styled.div`
  width:75%;
  display:flex;
  justify-content: space-between;
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
    font-size:1.8vw;
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
      
`
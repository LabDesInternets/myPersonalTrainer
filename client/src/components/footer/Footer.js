import React from 'react'
import styled from 'styled-components'
import { Instagram, Facebook, Google, Linkedin } from 'grommet-icons';
import StyledLink from '../cors/StyledLink';


const Footer = () => {
  return (
    <Wrapper>
      <div>Retrouvez moi sur</div>
      <StyledLink to='https://www.instagram.com/scientitrainer/'><Instagram size='large' color='white' /></StyledLink>
      <StyledLink to='https://www.facebook.com/Raphael-Abouna-100101365135643'><Facebook size='large' color='white' /></StyledLink>
      <StyledLink to='https://g.page/r/CbTS5v-ViOcjEAE'><Google size='large' color='white' /></StyledLink>
      <StyledLink to='https://www.linkedin.com/in/raphael-abouna-ba23421b2/?originalSubdomain=fr'><Linkedin size='large' color='white' /></StyledLink>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #03071e;
  color:white;
  font-size: 1.5rem;
`
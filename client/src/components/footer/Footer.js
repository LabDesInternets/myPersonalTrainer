import React from 'react'
import styled from 'styled-components'
import { Instagram, Facebook, Google, Linkedin, StatusInfo } from 'grommet-icons'
import { device } from '../cors/ResponsiveSettings'
import StyledLink from '../cors/StyledLink'



const Footer = () => {

  // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  // const sizeOnVw = () => vw >= 992 ? 'large' : 'medium'

  return (
    <Wrapper>
      <MainContainer>
        <div>Retrouvez moi sur</div>
        <div style={{ paddingTop: '10px' }}>
          <StyledA href='https://www.instagram.com/scientitrainer/'><Instagram size='medium' color='white' /></StyledA>
          <StyledA href='https://www.facebook.com/Raphael-Abouna-100101365135643'><Facebook size='medium' color='white' /></StyledA>
          <StyledA href='https://g.page/r/CbTS5v-ViOcjEAE'><Google size='medium' color='white' /></StyledA>
          <StyledA href='https://www.linkedin.com/in/raphael-abouna-ba23421b2/?originalSubdomain=fr'><Linkedin size='medium' color='white' /></StyledA>
        </div>
      </MainContainer>
      <InfoDiv><StyledLink to='/info'><StatusInfo size='medium' color='grey' /></StyledLink></InfoDiv>
    </Wrapper >
  )
}

export default Footer

const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`
const InfoDiv = styled.div`
  position:absolute;
  right:0rem;
  
`

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 10vh;
  font-size: 1rem;
  background-color: #03071e;
  color:white;
    @media ${device.laptop} {
      flex-direction:row;
      font-size: 1.5rem;
    }
 
`
const StyledA = styled.a`
  padding: 0 0.5rem;
`
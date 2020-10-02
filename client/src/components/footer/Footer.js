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
        <Text>Retrouvez moi sur</Text>
        <Icons>
          <StyledA href='https://www.instagram.com/abnraphael/'><Instagram size='medium' color='white' /></StyledA>
          <StyledA href='https://www.facebook.com/Raphael-Abouna-100101365135643'><Facebook size='medium' color='white' /></StyledA>
          <StyledA href='https://g.page/r/CbTS5v-ViOcjEAE'><Google size='medium' color='white' /></StyledA>
          <StyledA href='https://www.linkedin.com/in/raphael-abouna-ba23421b2/?originalSubdomain=fr'><Linkedin size='medium' color='white' /></StyledA>
        </Icons>
      </MainContainer>
      <InfoDiv>&#169; <MailTo href='mailto:lab_web@pm.me'>Lab 2020</MailTo></InfoDiv>
    </Wrapper >
  )
}

export default Footer

const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
      flex-direction:row;
    }
 
`
const Text = styled.div`
    @media ${device.laptop} {
     padding: 0vh 10px 1vh 0;
    }
`

const MailTo = styled.a`
  text-decoration:none;
  color:inherit;
 
`

const Icons = styled.div`
  padding:10px 0;
  @media ${device.laptop} {
    padding:0;
  }
`
const InfoDiv = styled.div`
  color: #ffd6e0;  
  font-size:1rem;
`

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 15vh;
  font-size: 1rem;
  background-color: #03071e;
  color:white;
    @media ${device.laptop} {
      height: 10vh;
      justify-content: end;
      font-size: 1.5rem;
    }
 
`
const StyledA = styled.a`
  padding: 0 0.5rem;
`
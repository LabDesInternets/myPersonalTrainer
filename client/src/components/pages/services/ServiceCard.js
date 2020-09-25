import React from 'react'
import styled, { css } from 'styled-components'
import Container from '../../cors/Container'
import { size, device } from '../../cors/ResponsiveSettings'
import { fadeIn } from '../pricesAndOptions/PricesCard'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'



const ServiceCard = ({ service, section }) => {

  // Object.keys(service).forEach(section => {
  //   if (section.includes('content')) {
  //     console.log(service[section])
  //   }
  // }
  // )


  return (

    <Wrapper bgColor={section === 'Perdre du poids' ? 'paleOrange' : section === 'Se muscler' ? 'blue' : 'waterGreen'}>

      <Icon src={service.icon} />
      <Title>{service.title}</Title>
      <ContentWrapper>
        <div>{service.content1}</div>
        <div>{service.content2}</div>
        <div>{service.content3}</div>
      </ContentWrapper>
      <BtnDiv>
        <StyledLink to='/book'><StyledButton w='17rem' dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
      </BtnDiv>
    </Wrapper>

  )
}

export default ServiceCard

const BtnDiv = styled.div`
  @media ${device.laptop} {
    display:none;
  }
`

const Wrapper = styled(Container)`
  flex-wrap: nowrap;
  text-align: justify;
  text-justify: inter-word;
  max-width:100%;
  height:100vh;
  padding: 1rem 0;
  animation: ${fadeIn} 3s;
  &:nth-child(1) { 
    animation-duration: 1s;
    }
    &:nth-child(2) { 
    animation-duration: 2s;
    }
    &:nth-child(3) { 
    animation-duration: 3s;
    }
    &:nth-child(4) { 
    animation-duration: 4s;
    }
  ${props =>
    props.bgColor === 'waterGreen' &&
    css`
    background-color: #d8e2dc;
    
  `}
  ${props =>
    props.bgColor === 'paleOrange' &&
    css`
      background-color: #ffe5d9;
  `}
  ${props =>
    props.bgColor === 'blue' &&
    css`
     background-color: #caf0f8;
      
  `}

    @media ${device.laptop} {
      font-weight:400;
      max-width:25vw;
      height: 70vh;
      margin:2rem;
      opacity:0.9;
      background-color:aliceblue;
    }
`

const Icon = styled.img`
  width: 6rem;
  @media ${device.tablet} {
    width:8rem;
  }
  @media ${device.laptop} {
    width:3rem;
  }
`
const Title = styled.h3`
  margin:1rem;
  @media (max-width: ${size.laptop}){
    font-size: calc(1.5rem + 1vw);
  }
`

const ContentWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height:65%;
padding: 1rem 2rem 0 2rem;
font-size:1.25rem;
line-height:1.5;
text-align: justify;
text-justify: inter-word;

    @media ${device.tablet} {
      font-size:1.75rem;
    }

    @media ${device.laptop}{
      font-size: calc(0.5rem + 0.7vw);
      justify-content: space-between;
    }
`
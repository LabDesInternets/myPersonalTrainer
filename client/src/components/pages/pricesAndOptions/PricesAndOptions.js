import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import pricesAndOptionsGroupRaw from '../../../assets/images/pricesAndOptionsGroupRaw.jpg'
import PricesCard from './PricesCard'
import prices from './pricesContent'
import { device } from '../../cors/ResponsiveSettings'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'



const PricesAndOptions = ({ element }) => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <MobileWrapper mobile>
        <Wrapper bgColor='#caf0f8'>
          <PricesCard prices={prices.oneSession}></PricesCard>
          <StyledLink to='/book'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
        </Wrapper>
        <Wrapper bgColor='#ffe5d9'>
          <PricesCard prices={prices.fiveSessions}></PricesCard>
          <StyledLink to='/book'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
        </Wrapper>
        <Wrapper bgColor='#d8e2dc'>
          <PricesCard prices={prices.tenSessions}></PricesCard>
          <StyledLink to='/book'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
        </Wrapper>
        <Wrapper bgColor='#FEFEE3'>
          <PricesCard prices={prices.groupSession}></PricesCard>
          <StyledLink to='/book'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
        </Wrapper>
      </MobileWrapper>

      <Wrapper ref={element} laptop bgImg={pricesAndOptionsGroupRaw}>
        <CardContainer>
          <PricesCard prices={prices.oneSession}></PricesCard>
          <PricesCard prices={prices.fiveSessions}></PricesCard>
          <PricesCard prices={prices.tenSessions}></PricesCard>
          <PricesCard prices={prices.groupSession}></PricesCard>
        </CardContainer>
        <BtnDiv>
          <StyledLink to='/book'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
        </BtnDiv>
      </Wrapper>

    </>
  )
}

export default PricesAndOptions

const Wrapper = styled.div`
  background-image: url(".${props => props.bgImg}");
  background-color: ${props => props.bgColor || '#03071e'};
  background-size: cover;
  background-position:50%;
  width:100vw;
  height:100vh;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;

  ${props =>
    props.laptop &&
    css`
      display: none;
        @media ${device.laptop} {
          display:flex;
          justify-content: flex-end;
        }
    `}
`
const CardContainer = styled.div`
  display:flex;
`

const BtnDiv = styled.div`
  min-height: 15vh;
`

const MobileWrapper = styled.div`
    ${props =>
    props.mobile &&
    css`
      display: block;
        @media ${device.laptop} {
          display:none;
        }
    `}
`
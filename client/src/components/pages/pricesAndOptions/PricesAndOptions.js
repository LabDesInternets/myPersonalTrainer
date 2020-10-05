import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import pricesAndOptionsGroupRaw from '../../../assets/images/pricesAndOptionsGroupRaw.jpg'
import PricesCard from './PricesCard'
import prices from './pricesContent'
import { device } from '../../cors/ResponsiveSettings'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'
import Container from '../../cors/Container'




const PricesAndOptions = ({ element }) => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <MobileWrapper mobile>
        <Wrapper bgColor='#caf0f8'>
          <PricesCard prices={prices.oneSession}></PricesCard>
          <StyledLink to='/book' height='15%'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
        </Wrapper>
        <Wrapper bgColor='#ffe5d9'>
          <PricesCard prices={prices.fiveSessions}></PricesCard>
          <StyledLink to='/book' height='15%'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
        </Wrapper>
        <Wrapper bgColor='#d8e2dc'>
          <PricesCard prices={prices.tenSessions}></PricesCard>
          <StyledLink to='/book' height='15%'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
        </Wrapper>
        <Wrapper bgColor='#FEFEE3'>
          <PricesCard prices={prices.groupSession}></PricesCard>
          <StyledLink to='/book' height='15%'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
        </Wrapper>
      </MobileWrapper>

      <Wrapper ref={element} laptop bgImg={pricesAndOptionsGroupRaw}>
        <ContentWrapper>
          <CardContainer>
            <PricesCard prices={prices.oneSession}></PricesCard>
            <PricesCard prices={prices.fiveSessions}></PricesCard>
            <PricesCard prices={prices.tenSessions}></PricesCard>
            <PricesCard prices={prices.groupSession}></PricesCard>
          </CardContainer>
          <BtnDiv>
            <StyledLink to='/book'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
          </BtnDiv>
        </ContentWrapper>
      </Wrapper>

    </>
  )
}

export default PricesAndOptions

const Wrapper = styled.div`
  min-height:30em;
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
        min-height:40em;
        display:flex;
        justify-content: center;
      }
    `}
`

const ContentWrapper = styled(Container)`
  position: relative;
  top: 75px;
  height:80%;
  min-height: 30em;
`

const CardContainer = styled.div`
  display:flex;
  /* overflow-x:auto; */
  height:85%;
`

const BtnDiv = styled.div`
  min-height: 4rem;
  height:15%;
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
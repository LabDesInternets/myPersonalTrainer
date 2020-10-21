import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled, { css } from 'styled-components'
import Container from '../../cors/Container'
import { device } from '../../cors/ResponsiveSettings'
import categories from '../home/categoriesContent'
import servicesStairs from '../../../assets/images/servicesStairs.jpg'
import servicesStairsTop from '../../../assets/images/servicesStairsTop.jpg'
import servicesStairsBottom from '../../../assets/images/servicesStairsBottom.jpg'



const WhoAmI = ({ element }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const category = categories.about
  return (
    <div ref={element}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Raphael Abouna | Coach sportif</title>
        <meta name="description"
          content="Diplômé d'Etat depuis presque 1 an, j'accompagne mes clients avec avec la plus grande rigueur et le plus grand professionnalisme, qu'ils aient un objectif de perte de poids, de prise de muscle, de remise en forme ou tout simplement de bien-être..." />
      </Helmet>
      <Mobile>
        <Wrapper bgImg={servicesStairsTop}>
          <ContentWrapper textBottom>
            <p>{category.content1}</p>
            <p>{category.content2}</p>
          </ContentWrapper>
        </Wrapper>
        <Wrapper bgImg={servicesStairsBottom} reSize>
          <ContentWrapper textTop>
            <p>{category.content3}</p>
            <p>{category.content4}</p>
          </ContentWrapper>
        </Wrapper>
      </Mobile>
      <Laptop>
        <Wrapper bgImg={servicesStairs}>
          <ContentWrapper>
            <p>{category.content1}</p>
            <p>{category.content2}</p>
            <p>{category.content3}</p>
            <p>{category.content4}</p>
          </ContentWrapper>
        </Wrapper>
      </Laptop>

    </div>
  )
}

export default WhoAmI

const Wrapper = styled.div`
  min-height:36rem;
  width:100vw;
  height:100vh;
  background-image: url(".${props => props.bgImg}");
  background-size:cover;
  justify-content:center;
  opacity:0.8;
  background-position:50%; 
  color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
    &&::before::after{
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.25);
  }
  ${props =>
    props.reSize &&
    css`
    min-height:21rem;
    height:58vh;
      `}


`

const ContentWrapper = styled(Container)`
  height:100%;
  padding:2rem 1.5rem 0rem 1.5rem;
  background-color:black;
  font-weight:500;
  flex-wrap:nowrap;
  opacity:0.8;
  font-size: calc(1rem + 0.8vw);
  ${props =>
    props.textBottom &&
    css`
    justify-content:flex-end;
  `}
  ${props =>
    props.textTop &&
    css`
    justify-content:start;
      `}
   @media ${device.tablet} {
     padding: 4rem;
     line-height: 3rem;
   }
   @media ${device.laptop} {
    position:relative;
    top:75px;
    min-height:20rem;
    font-size: calc(0.8rem + 0.4vw);
    line-height: calc(1.5rem + 0.8vw);
    font-weight:400;
    height:60vh;
   }
`
const Mobile = styled.div`
  @media ${device.laptop} {
    display:none;
  }
`
const Laptop = styled.div`
  display:none;
  @media ${device.laptop} {
    display:block;
  }
`
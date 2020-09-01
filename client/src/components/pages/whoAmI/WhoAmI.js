import React from 'react'
import styled, { css } from 'styled-components'
import Container from '../../cors/Container'
import { device } from '../../cors/ResponsiveSettings'
import categories from '../home/categoriesContent'
import servicesStairsTop from '../../../assets/images/servicesStairsTop.jpg'
import servicesStairsBottom from '../../../assets/images/servicesStairsBottom.jpg'



const WhoAmI = ({ element }) => {

  const category = categories.about
  return (
    <div ref={element}>

      <Wrapper bgImg={servicesStairsTop}>
        <ContentWrapper textBottom>
          <p>{category.content1}</p>
          <p>{category.content2}</p>
        </ContentWrapper>
      </Wrapper>
      <Wrapper bgImg={servicesStairsBottom}>
        <ContentWrapper textTop>
          <p>{category.content3}</p>
          <p>{category.content4}</p>
        </ContentWrapper>
      </Wrapper>

    </div>
  )
}

export default WhoAmI

const Wrapper = styled.div`
  width:100vw;
  height:100vh;
  background-image: url(".${props => props.bgImg}");
  background-size:cover;
  /* background-color:black; */
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

`

const ContentWrapper = styled(Container)`
   font-size:1.25rem;
   padding:2rem 1rem 1rem 1rem;
   background-color:black;
   font-weight:500;
   flex-wrap:nowrap;
  opacity:0.8;
  ${props =>
    props.textBottom &&
    css`
    justify-content:end;
  `}
  ${props =>
    props.textTop &&
    css`
    justify-content:start;
      `}
   @media ${device.tablet} {
     font-size:1.5rem;
     padding: 4rem;
   }
   @media ${device.laptop} {
    font-weight:400;
    padding:4rem;
    height:60vh;
   }
`

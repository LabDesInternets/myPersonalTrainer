import React, { useEffect } from 'react'
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

      <Mobile>
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

`

const ContentWrapper = styled(Container)`
   padding:2rem 1.5rem 0rem 1.5rem;
   background-color:black;
   font-weight:500;
   flex-wrap:nowrap;
  opacity:0.8;
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
   }
   @media ${device.laptop} {
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
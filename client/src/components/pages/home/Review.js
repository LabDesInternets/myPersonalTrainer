import React from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
import CatTitle from '../../cors/CatTitle'
import { device } from '../../cors/ResponsiveSettings'
import ReviewSlide from './ReviewSlide'


const Review = () => {


  return (
    <Wrapper>
      <CatTitle>
        <h6>
          Leur retour d'expérience
        </h6>
      </CatTitle>
      <Laptop>
        <ReviewSlide display='laptop' />
      </Laptop>
      <Mobile>
        <ReviewSlide display='mobile' />
      </Mobile>
    </Wrapper>
  )
}

export default Review


const Wrapper = styled.div`
  min-height:40rem;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  h6{
    font-size: 2rem;
    color:white;
  }
  @media ${device.laptop} {
    min-height:25rem;
    height:55vh;
  }
`
const Laptop = styled.div`
  display:none;
  height: 90%;
  @media ${device.laptop} {
    display:block;
    /* height:55vh; */
  }
`
const Mobile = styled.div`
  display:block;
  height: 90%;
  @media ${device.laptop} {
    display:none;
  }
`
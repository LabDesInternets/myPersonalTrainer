import React from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
import { device } from '../../cors/ResponsiveSettings'
import ReviewSlide from './ReviewSlide'


const Review = () => {


  return (
    <Wrapper>
      <Container height='10vh' bgColor='#0096c7' width='100vw'>
        <h6>
          Leur retour d'expérience
      </h6>
      </Container>
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
  height:90vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  h6{
    font-size: 2rem;
    color:white;
  }
  @media ${device.laptop} {
    max-height:60vh;
  }
`
const Laptop = styled.div`
  display:none;
  @media ${device.laptop} {
    display:block;
  }
`
const Mobile = styled.div`
  display:block;
  @media ${device.laptop} {
    display:none;
  }
`
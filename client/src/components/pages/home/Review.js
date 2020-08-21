import React from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
import reviewsContent from './reviewsContent'
import { device } from '../../cors/ResponsiveSettings'
import ReviewSlide from './ReviewSlide'

const Review = () => {

  const reviews = []

  Object.keys(reviewsContent).map(client => reviews.push(reviewsContent[client]))

  return (
    <Wrapper>
      <Container height='10vh' bgColor='#0096c7' width='100vw'>
        <h6>
          L'avis des clients
      </h6>
      </Container>
      <Laptop>
        <ReviewSlide display='laptop' />
        {/* <Container fD='row'>
          {reviews.map(review => <ReviewCard key={review.name} review={review} />)}
        </Container> */}
      </Laptop>
      <Mobile>
        <ReviewSlide display='mobile' />
      </Mobile>
    </Wrapper>
  )
}

export default Review

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h6{
    font-size: 2rem;
    color:white;
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
import React from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
import { device } from '../../cors/ResponsiveSettings'

const ReviewCard = ({ review }) => {



  return (
    <ReviewWrapper>
      <ImgWrapper src={review.picture} />

      <ContentWrapper>
        <p>"{review.text}"</p>
        <Id>{review.name}, {review.age}, {review.job}</Id>
      </ContentWrapper>

    </ReviewWrapper>
  )
}

export default ReviewCard

const ReviewWrapper = styled(Container)`
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content:start;
  padding: 2rem 1rem;
  font-size:1rem;
  @media ${device.laptop} {
    width:45vw;
    /* height:50vh; */
    flex-direction:row;
  
  }

`
const ImgWrapper = styled.img`
  /* --ratio: 240 / 240; */
  width:50vw;
  /* height: calc(50vw * var(--ratio)); */
  border-radius:50%;
  @media ${device.tablet} {
    width:30vw;
  }
  @media ${device.laptop} {
    width:15vw;
    /* height: calc(15vw * var(--ratio)); */
  }
 
`
const Id = styled.p`
  font-weight:400;
`
const ContentWrapper = styled(Container)`
  justify-content: start;
  align-items: baseline;
  height: auto;
  font-size:1rem;
  padding:1rem;
  p{
    padding:0.5rem 1rem;
    overflow-x:auto;
  }
  @media ${device.tablet} {
    font-size:1.25rem;
    padding:4rem;
  }

  @media ${device.laptop} {
    justify-content:center;
    width:50vw;
    font-size:1rem;
    padding:0;
  }
`
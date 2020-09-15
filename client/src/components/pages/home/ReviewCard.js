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
    width:40vw;
    height:30vh;
    flex-direction:row;
  
  }

`
const ImgWrapper = styled.img`
 width:50vw;
  border-radius:50%;
@media ${device.laptop} {
    width:20vw;
    
  }
 
`
const Id = styled.p`
  font-weight:400;
`
const ContentWrapper = styled(Container)`
  width:80vw;
  justify-content: start;
  align-items: baseline;
  height: auto;
  font-size:1rem;
  padding:1rem;
  p{
    padding:0.5rem 1rem;
  }
  @media ${device.tablet} {
    font-size:1.25rem;
    padding:4rem;
  }

  @media ${device.laptop} {
    font-size:1rem;
    padding:0;
  }
`
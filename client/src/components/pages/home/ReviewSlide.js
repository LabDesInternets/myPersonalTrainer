import React from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
import ReviewCard from './ReviewCard'
import reviewsContent from './reviewsContent'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { device } from '../../cors/ResponsiveSettings'





const ReviewSlide = ({ display }) => {



  const customDisplay = () => {
    if (display === 'mobile') {
      return (
        {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          // arrows: true,
          autoplay: true,
          autoplaySpeed: 5000
        }
      )
    } else {
      return (
        {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000
        }
      )
    }
  }
  const settings = customDisplay()

  const reviews = []

  Object.keys(reviewsContent).map(client => reviews.push(reviewsContent[client]))


  return (
    <div>
      <Container>
        <Wrapper>
          <Slider {...settings}>
            {reviews.map(review =>
              <ReviewCard key={review.name} review={review} />
            )}
          </Slider>
        </Wrapper>
      </Container>
    </div>
  )
}

export default ReviewSlide

const Wrapper = styled.div`


  width:100vw;
  height:80vh;
  @media ${device.laptop} {
    padding:3rem 8rem;
    height:40vh;
 
  }
`
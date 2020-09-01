import React from 'react'
import styled from 'styled-components'
import ArticleCard from './ArticleCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './BlogSlider.css'
import { device } from '../../cors/ResponsiveSettings'
import Container from '../../cors/Container'

const BlogSlider = ({ display, blog }) => {

  const customDisplay = () => {
    if (display === 'mobile') {
      return (
        {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 7000
        }
      )
    } else {
      return (
        {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      )
    }
  }
  const settings = customDisplay()

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          {blog && blog.map(article =>
            <ArticleCard key={article.id} article={article} />
          )}
        </Slider>
      </Wrapper>
    </Container >
  )
}

export default BlogSlider



const Wrapper = styled.div`
  width:100vw;
  height:80vh;
  p { font-size: 1rem;}
  h6 { 
    font-size: 2rem;
    color:white;
  }
  @media ${device.laptop} {
    height:70vh;
    p {
      font-size: 1.25rem;
    }
  }
`

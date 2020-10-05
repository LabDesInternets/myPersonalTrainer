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

    <Wrapper>
      <Slider {...settings}>
        {blog && blog.map(article =>
          <ArticleCard key={article.id} article={article} />
        )}
      </Slider>
    </Wrapper>

  )
}

export default BlogSlider



const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100vw;
  height:100%;
  h6 { 
    font-size: 2rem;
    color:white;
  }
`

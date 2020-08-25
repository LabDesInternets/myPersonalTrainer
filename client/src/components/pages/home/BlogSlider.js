import React, { useContext } from 'react'
import styled from 'styled-components'
import ArticleCard from './ArticleCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BlogContext } from '../../../context/BlogContext'
import { device } from '../../cors/ResponsiveSettings'
import Container from '../../cors/Container'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // arrows: true,
  // autoplay: true,
  // autoplaySpeed: 5000
};

const BlogSlider = () => {

  const { articles } = useContext(BlogContext)

  return (
    <BlogWrapper>
      <Container height='10vh' bgColor='#0096c7' width='100vw'>
        <h6>
          Le blog
      </h6>
      </Container>
      <Wrapper>

        <Slider {...settings}>
          {articles && articles.map(article =>
            <ArticleCard key={article.id} article={article} />
          )}
        </Slider>

      </Wrapper>
    </BlogWrapper >
  )
}

export default BlogSlider



const Wrapper = styled.div`
  width:100vw;
  height:80vh;
`
const BlogWrapper = styled.div`
display: none;
flex-direction: column;
justify-content: center;
align-items: center;
p{
  font-size: 1.25rem;
}
h6{
  font-size: 2rem;
  color:white;
}
@media ${device.laptop} {
  display:flex;
  padding: 2rem 2rem;
}
`
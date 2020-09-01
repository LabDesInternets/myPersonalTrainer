import React, { useContext } from 'react'
import styled from 'styled-components'
import { BlogContext } from '../../../context/BlogContext'
import { device } from '../../cors/ResponsiveSettings'
import ArticleCard from '../home/ArticleCard'
import Container from '../../cors/Container'
import ArticleCardBlogPage from './ArticleCardBlogPage'

const BlogPage = (props) => {

  const { articles } = useContext(BlogContext)
  const { element } = props

  return (
    <Wrapper ref={element}>
      <Container height='10vh' bgColor='#0096c7' width='100vw'>
        <h6>
          Le blog
        </h6>
      </Container>
      <Mobile>
        {articles && articles.map(article =>
          <ArticleCard key={article.id} article={article} />
        )}
      </Mobile>
      <Laptop>
        {articles && articles.map(article =>
          <ArticleCardBlogPage key={article.id} article={article} />
        )}
      </Laptop>
    </Wrapper>
  )
}

export default BlogPage

const Wrapper = styled.div`

  

  h6{
    font-size: 2rem;
    color:white;
  }

  @media ${device.laptop}{
    position: relative;
  top:8vh;
  padding-bottom:30px;
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
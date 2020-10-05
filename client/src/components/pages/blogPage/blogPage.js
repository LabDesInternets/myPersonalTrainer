import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { BlogContext } from '../../../context/BlogContext'
import { device } from '../../cors/ResponsiveSettings'
import ArticleCard from '../home/ArticleCard'
import CatTitle from '../../cors/CatTitle'
import ArticleCardBlogPage from './ArticleCardBlogPage'

const BlogPage = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { articles } = useContext(BlogContext)
  const { element } = props

  return (
    <Wrapper ref={element}>
      <CatTitle>
        <h6>
          Le blog
        </h6>
      </CatTitle>
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
  max-width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  h6{
    font-size: 2rem;
    color:white;
  }

  @media ${device.laptop}{
    position: relative;
  top:75px;
  padding-bottom:30px;
  }
`
const Mobile = styled.div`
  @media ${device.laptop} {
    display:none;
  }
`
const Laptop = styled.div`
  padding: 1rem 4rem;
  display:none;
  @media ${device.laptop} {
    display:block;
  }
`
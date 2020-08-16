import React, { useContext } from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
import ArticleCard from './ArticleCard'
import { device } from '../../cors/ResponsiveSettings'
import { BlogContext } from '../../../context/BlogContext'



const BlogHp = () => {

  const { articles } = useContext(BlogContext)

  return (
    <Wrapper>
      <h6>
        Blog
      </h6>
      <ArticlesContainer>
        {articles && articles.map(article =>
          <ArticleCard key={article.id} article={article} />
        )}
      </ArticlesContainer>
    </Wrapper>
  )
}

export default BlogHp

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    font-size: 1.5rem;
  }
  h6{
    font-size: 2rem;
  }
  @media ${device.laptop} {
    padding: 2rem 2rem;
  }
`

const ArticlesContainer = styled(Container)`
  flex-direction: row;
  flex-wrap:nowrap;
  align-items: baseline;
`


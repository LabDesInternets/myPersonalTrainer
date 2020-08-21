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
      <Container height='10vh' bgColor='#0096c7' width='100vw'>
        <h6>
          Le blog
      </h6>
      </Container>
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
    font-size: 1.25rem;
  }
  h6{
    font-size: 2rem;
    color:white;
  }
  @media ${device.laptop} {
    display:none;
  }
`

const ArticlesContainer = styled(Container)`
/* height:80vh; */
  flex-direction: column;
  flex-wrap:nowrap;
  align-items: baseline;
`


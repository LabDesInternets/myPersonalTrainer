import React from 'react'
import styled from 'styled-components'
import { device } from '../../cors/ResponsiveSettings'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'
import Container from '../../cors/Container'

const ArticleCardBlogPage = (props) => {

  const { article } = props

  return (

    <ArticleWrapper>
      <ImgWrapper src={article.picture} />


      <ContentWrapper>
        <p>{article.date}</p>
        <h5>{article.title}</h5>
        <p style={{ padding: '0.75rem 0' }}>{article.description}</p>
        <StyledLink to={`/blog/${article.id}`}><StyledButton>Lire l'article</StyledButton></StyledLink>
      </ContentWrapper>

    </ArticleWrapper>

  )
}

export default ArticleCardBlogPage

const ArticleWrapper = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content:start;
  padding: 6rem;
  
`
const ImgWrapper = styled.img`
  width:100%;
  @media ${device.laptop} {
  width:40vw;
  height:26.7vw;
  object-position: top;
  object-fit: cover;
  }
`

const ContentWrapper = styled(Container)`
  /* justify-content: start; */
  align-items: baseline;
 padding:0 2rem;
  p{
    font-size:1.25rem;
  }
  h5{
    font-size: 1.75rem;
  }
`

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
        <p style={{ fontSize: '1rem' }}>{article.date}</p>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <StyledLink to={`/${article.slug}`} padding='0'><StyledButton>Lire l'article</StyledButton></StyledLink>
      </ContentWrapper>

    </ArticleWrapper >

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
    --ratio: 135 / 240;
    object-position: 50%;
    object-fit: cover;
    width:30vw;
    height: calc(30vw * var(--ratio));
  }
`

const ContentWrapper = styled(Container)`
  /* justify-content: start; */
  align-items: baseline;
 padding:0 2rem;
  p{
    /* font-size:1.25rem; */
  }
  h5{
    font-size: 1.75rem;
  }
  @media ${device.laptop} {
    justify-content:space-around;
    --ratio: 135 / 240;
    height: calc(30vw * var(--ratio));
    p { line-height: calc(1rem + 0.5vw); }
  }
`

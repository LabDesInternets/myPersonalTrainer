import React from 'react'
import styled from 'styled-components'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'
import Container from '../../cors/Container'
import { device } from '../../cors/ResponsiveSettings'

const ArticleCard = (props) => {
  const { article } = props


  return (

    <ArticleWrapper>
      <ImgWrapper src={article.picture} />

      <ContentWrapper>
        <p>{article.date}</p>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </ContentWrapper>
      <BtnDiv>
        <StyledLink to={`/${article.slug}`}><StyledButton>Lire l'article</StyledButton></StyledLink>
      </BtnDiv>
    </ArticleWrapper>
  )
}

export default ArticleCard

const ArticleWrapper = styled(Container)`
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content:center;
  height:100%;
  min-height:25rem;
  @media ${device.laptop} {
    min-height:30rem;
    width:30vw;
    justify-content:space-around;
  }

`
const BtnDiv = styled(Container)`
  height:10%;
  min-height: 10vh;
`

const ImgWrapper = styled.img`
  padding-top:2rem;
  --ratio: 135 / 240;
  width:95vw;
  height: calc(95vw * var(--ratio));
  object-position: 50%;
  object-fit: cover;
  @media ${device.laptop} {
    width:28vw;
    height: calc(28vw * var(--ratio));
  }
`

const ContentWrapper = styled(Container)`
  box-sizing:border-box;
  justify-content: start;
  align-items: baseline;
  height:43%;
  width:100vw;
  padding: 0 1rem;
  p:nth-child(3){
    overflow-x: auto;
  }
  @media ${device.laptop} {
    height:50%;
    width:100%;
    p:nth-child(3){
      line-height: calc(1rem + 0.5vw);
      padding: 0.75rem 0;
    }
  }
`

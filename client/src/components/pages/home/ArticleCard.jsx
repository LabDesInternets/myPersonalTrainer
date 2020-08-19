import React from 'react'
import styled from 'styled-components'
import StyledButton from '../../cors/StyledButton'
import Container from '../../cors/Container'
import { device } from '../../cors/ResponsiveSettings'

const ArticleCard = (props) => {
  const { article } = props

  return (
    <ArticleWrapper>
      <ImgWrapper src={article.picture} />

      <ContentWrapper>
        <p style={{ fontSize: '1rem' }}>{article.date}</p>
        <h5>{article.title}</h5>
        <p>{article.description}</p>
      </ContentWrapper>
      <StyledButton>En savoir plus</StyledButton>
    </ArticleWrapper>
  )
}

export default ArticleCard

const ArticleWrapper = styled(Container)`
  display:flex;
  flex-direction: column;
  flex-wrap: nowrap;
  /* height:65vh; */
  align-items: center;
  justify-content:start;
  padding: 3rem 1rem;
  p{
    font-size: 1.5rem;
  }
  @media ${device.laptop} {
    width:30vw;
    height:65vh;
  }

`
const ImgWrapper = styled.img`
  width:100%;

  /* @media ${device.laptop} {
    width:50%;
  } */
`

const ContentWrapper = styled(Container)`
  justify-content: start;
  align-items: baseline;
  height: auto;
  h5{
    font-size: 1.75rem;
  }
  /* @media ${device.laptop} {
    width:50%;
  } */

`

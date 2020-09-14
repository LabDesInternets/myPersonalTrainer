import React from 'react'
import styled, { css } from 'styled-components'
import { device } from '../../cors/ResponsiveSettings'

const ArticleDisplay = (props) => {
  const { article } = props


  return (

    <>
      {article && (
        <Wrapper>
          <ImgWrapper src={article.picture} alt='' main />
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p>{article.text1}</p>
          <ImgWrapper src={article.picture2} alt='' />
          <h4>{article.title2}</h4>
          <p>{article.text2}</p>
          <ImgWrapper src={article.picture3} alt='' />
          <h4>{article.title3}</h4>
          <p>{article.text3}</p>
          <ImgWrapper src={article.picture4} alt='' />
          <h4>{article.title4}</h4>
          <p>{article.text4}</p>
          <ImgWrapper src={article.picture5} alt='' />
          <h4>{article.title5}</h4>
          <p>{article.text5}</p>
        </Wrapper>
      )}
    </>
  )
}

export default ArticleDisplay

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  p{
    padding: 1rem 0;
  }
`
const ImgWrapper = styled.img`
   --ratio: 135 / 240;
  width:100%;
  height: calc(100% * var(--ratio));
  object-position: top;
  object-fit: cover;
  padding: 1rem 0;
  @media ${device.laptop} {
    width:28vw;
    height: calc(28vw * var(--ratio));
    ${props =>
    props.main &&
    css`
      width:48vw;
      height: calc(48vw * var(--ratio));
    `}

  }
`
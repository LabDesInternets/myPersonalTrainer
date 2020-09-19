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
          <Intro>{article.description}</Intro>
          <p>{article.text1}</p>
          {article.picture2 && article.title2 && article.text2 && (
            <>
              <ImgWrapper src={article.picture2} alt='' />
              <h4>{article.title2}</h4>
              <p>{article.text2}</p>
            </>
          )}
          {article.picture3 && article.title3 && article.text3 && (
            <>
              <ImgWrapper src={article.picture3} alt='' />
              <h4>{article.title3}</h4>
              <p>{article.text3}</p>
            </>
          )}
          {article.picture4 && article.title4 && article.text4 && (
            <>
              <ImgWrapper src={article.picture4} alt='' />
              <h4>{article.title4}</h4>
              <p>{article.text4}</p>
            </>
          )}
          {article.picture5 && article.title5 && article.text5 && (
            <>
              <ImgWrapper src={article.picture5} alt='' />
              <h4>{article.title5}</h4>
              <p>{article.text5}</p>
            </>
          )}
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
  div{
    text-align:center;
    padding:1rem ;
    @media ${device.laptop} {
    width:50vw;
    }
  }
  p {
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
    --ratio: 160 /240;
    width:30vw;
    height: calc(30vw * var(--ratio));
    ${props =>
    props.main &&
    css`
      width:50vw;
      height: calc(50vw * 135 / 240);
    `}

  }
`
const Intro = styled.div`
  min-height: 30vh;
  @media ${device.laptop} {
    min-height:25vh;
  }
`
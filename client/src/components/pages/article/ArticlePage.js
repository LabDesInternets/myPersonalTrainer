import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import styled, { css } from 'styled-components'
import { device } from '../../cors/ResponsiveSettings'
import { BlogContext } from '../../../context/BlogContext'
import ArticleCard from '../home/ArticleCard'
import work from '../../../assets/images/workHarderRaw.jpg'

const urlBlog = `/api/blog/articles`

const ArticlePage = (props) => {

  const { articles } = useContext(BlogContext)
  console.log("art ", articles)

  const [article, setArticle] = useState()
  const { id } = props.match.params
  const { element } = props




  const getArticle = () => {
    axios.get(`${urlBlog}/${id}`)
      .then(function (response) {
        setArticle(response.data);
        console.log("res ", response)
      })
      .catch(function (error) {
        console.log("ooops ! => ", error)
      })
  }

  useEffect(() => {
    articles && articles.map(article => {
      if (article.id === id) {
        setArticle(article)
      }
    })
    //getArticle()
  }, []);


  return (
    <>

      {article && (
        <Wrapper ref={element}>

          <ImgWrapper src={article.picture} main />
          <h3>{article.title}</h3>
          <p>{article.text1}</p>
          <ImgWrapper src={article.picture2} />
          <h4>{article.title2}</h4>
          <p>{article.text2}</p>
          <ImgWrapper src={article.picture3} />
          <h4>{article.title3}</h4>
          <p>{article.text3}</p>
          <ImgWrapper src={article.picture4} />
          <h4>{article.title4}</h4>
          <p>{article.text4}</p>

        </Wrapper>
      )
      }
    </>
  )
}

export default ArticlePage

const Wrapper = styled.div`
  padding: 4rem 2rem;
  p{
    padding: 1rem 0;
  }
  @media ${device.laptop} {
    padding:10vw;
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

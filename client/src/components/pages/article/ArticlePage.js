import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { device } from '../../cors/ResponsiveSettings'
import { BlogContext } from '../../../context/BlogContext'
import ArticleCard from '../home/ArticleCard'

const urlBlog = `/api/blog/articles`

const ArticlePage = (props) => {

  const { articles } = useContext(BlogContext)


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

          <ImgWrapper src={article.picture} />
          <h3>{article.title}</h3>
          <p>{article.text}</p>

        </Wrapper>
      )
      }
    </>
  )
}

export default ArticlePage

const Wrapper = styled.div`
  padding:1.5rem;
  h3{
    font-size:1.5rem;
  }
  p{
    font-size: 1.25rem;
  }
  @media ${device.laptop} {
    padding:10vw;
  }
`
const ImgWrapper = styled.img`
  width:100%;
  @media ${device.laptop} {
    width:28vw;
    height:18vw;
    object-position: top;
    object-fit: cover;
  }
`
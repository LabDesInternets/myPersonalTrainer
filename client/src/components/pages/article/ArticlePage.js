import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BlogContext } from '../../../context/BlogContext'
import ArticleDisplay from './ArticleDisplay'
import { device } from '../../cors/ResponsiveSettings'

const ArticlePage = (props) => {
  const { id } = props.match.params
  const { element } = props
  const { articles } = useContext(BlogContext)
  const [article, setArticle] = useState()


  useEffect(() => {
    window.scrollTo(0, 0);
    articles.map(article => {
      if (article.id === id) {
        setArticle(article)
      }
    })
  }, [articles, id])

  return (
    <Wrapper ref={element}>
      <ArticleDisplay article={article} />
    </Wrapper>

  )
}

export default ArticlePage

const Wrapper = styled.div`
  max-width:100vw;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  padding:2.5rem;
  @media ${device.laptop} {
    padding:4rem;
  }
 
`
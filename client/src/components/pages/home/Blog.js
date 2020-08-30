import React, { useContext } from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
import ArticleCard from './ArticleCard'
import { device } from '../../cors/ResponsiveSettings'
import { BlogContext } from '../../../context/BlogContext'
import BlogSlider from './BlogSlider'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'

const Blog = ({ history }) => {

  const { articles } = useContext(BlogContext)

  return (

    <Wrapper>
      <Container height='10vh' bgColor='#0096c7' width='100vw'>
        <h6>
          <StyledLink to='./blog'>Le blog</StyledLink>
        </h6>
      </Container>
      <Laptop>
        <BlogSlider blog={articles} display='laptop' />

      </Laptop>
      <Mobile>
        <BlogSlider blog={articles} display='mobile' />

      </Mobile>
      <StyledButton primary onClick={() => history.push('./blog')}>Voir tous les articles</StyledButton>
    </Wrapper>


  )
}

export default Blog

const Wrapper = styled.div`
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  h6{
    font-size: 2rem;
    color:white;
  }
`
const Laptop = styled.div`
  display:none;
  @media ${device.laptop} {
    display:block;
  }
`
const Mobile = styled.div`
  display:block;
  @media ${device.laptop} {
    display:none;
  }
`

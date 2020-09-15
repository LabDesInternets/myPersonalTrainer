import React, { useContext } from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
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
          <BlogLink to='./blog'>Le blog</BlogLink>
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
  min-height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h6{
    font-size: 2rem;
    color:white;
  }
`
const BlogLink = styled(StyledLink)`
  &:hover{
    text-decoration:none;
    color: #ffdf9f;
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

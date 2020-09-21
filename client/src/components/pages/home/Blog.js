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
      <BtnDiv>
        <StyledButton primary onClick={() => history.push('./blog')}>Voir tous les articles</StyledButton>
      </BtnDiv>
    </Wrapper>


  )
}

export default Blog

const Wrapper = styled.div`
  min-height:110vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  h6{
    font-size: 2rem;
    color:white;
  }
  @media ${device.laptop} {
    min-height:100vh;
    
  }
`
const BtnDiv = styled.div`
  min-height: 10vh;
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
    min-height:80vh;
  }
`
const Mobile = styled.div`
  display:block;
  min-height: 90vh;
  @media ${device.laptop} {
    display:none;
  }
`

import React, { useContext } from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
import CatTitle from '../../cors/CatTitle'
import { device } from '../../cors/ResponsiveSettings'
import { BlogContext } from '../../../context/BlogContext'
import BlogSlider from './BlogSlider'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'

const Blog = ({ history }) => {



  const { articles } = useContext(BlogContext)

  return (

    <Wrapper>
      <CatTitle>
        <h6>
          <BlogLink to='./blog'>Le blog</BlogLink>
        </h6>
      </CatTitle>
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
  min-height:40rem;
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  h6{
    font-size: 2rem;
    color:white;
  }
`
const BtnDiv = styled.div`
  display:flex;
  align-items:center;
  height: 10%;
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
    height:80%;
  }
`
const Mobile = styled.div`
  display:block;
  height: 80%;
  @media ${device.laptop} {
    display:none;
  }
`

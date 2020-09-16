import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import Category from './Category'
import Banner from '../../cors/Banner'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'
import Container from '../../cors/Container'
import categories from './categoriesContent'
import Review from './Review'
import Blog from './Blog'
import { BlogContext } from '../../../context/BlogContext'


const Home = (props) => {

  const { articles } = useContext(BlogContext)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { element, history } = props

  return (
    <Wrapper>
      <Container width='100vw' height='100vh'>
        <Banner>
          <BannerContent>
            <h1>Raphael Coaching</h1>
            <p>Des entraînements sur-mesure qui vous permettront d'atteindre vos objectifs</p>
            <StyledLink to="/services"><StyledButton mobile>Découvrir</StyledButton></StyledLink>
          </BannerContent>
        </Banner>
      </Container>

      <Category element={element} cat={categories.about}></Category>
      <Category cat={categories.services}></Category>
      <Category cat={categories.prices}></Category>

      {articles && (
        <Blog history={history} />
      )}


      <Review />

    </Wrapper>
  )
}

export default Home


const BannerContent = styled.div`
  padding:1rem;
  p{
    font-size: calc(1.25rem + 0.5vw);
    text-align:center;
  }

`
const Wrapper = styled.div`
  max-width: 100vw;
  flex: 1 0 auto;
`
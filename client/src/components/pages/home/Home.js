import React from 'react'
import styled from 'styled-components'
import Category from './Category'
import Banner from '../../cors/Banner'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'
import Container from '../../cors/Container'
import homeBanner from '../../../assets/images/homeBanner.jpg'
import categories from './categoriesContent'
import BlogHp from './BlogHp'
import BlogSlider from './BlogSlider'
import Review from './Review'




const Home = ({ element }) => {
  return (
    <div>
      <Container width='100vw' height='100vh'>
        <Banner bgImg={homeBanner}>
          <BannerContent>
            <h2>Raphael Coaching</h2>
            <p>Des entraînements sur-mesure qui vous permettront d'atteindre vos objectifs</p>
            <StyledLink to="/services"><StyledButtonHp>Découvrir</StyledButtonHp></StyledLink>
          </BannerContent>
        </Banner>
      </Container>

      <Category element={element} cat={categories.about}></Category>
      <Category cat={categories.services}></Category>
      <Category cat={categories.prices}></Category>

      <BlogHp />
      <BlogSlider />

      <Review />
      {/* <ReviewSlide /> */}

    </div >
  )
}

export default Home


const BannerContent = styled.div`
  padding:1rem;
`
const StyledButtonHp = styled(StyledButton)`
  background-color:white;
  color: #0096c7;
  opacity:0.8;
  
`
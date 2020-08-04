import React from 'react'
import styled from 'styled-components'
import Category from './Category'
import Banner from '../../cors/Banner'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'
import Container from '../../cors/Container'
import homeBanner from '../../../assets/images/homeBanner.jpg'
import categories from './categoriesContent'



const Home = () => {
  return (
    <div>
      <Container width='100vw' height='100vh'>
        <Banner bgImg={homeBanner}>
          <BannerContent>
            <h2>Raphael Coaching</h2>
            <p>Des entraînements sur-mesure qui vous permettront d'atteindre vos objectifs</p>
            <StyledLink to="/services"><StyledButton>Découvrir</StyledButton></StyledLink>
          </BannerContent>
        </Banner>
      </Container>

      <Category cat={categories.about}></Category>
      <Category cat={categories.services}></Category>
      <Category cat={categories.prices}></Category>
    </div >
  )
}

export default Home


const BannerContent = styled.div`
padding:1rem;
`
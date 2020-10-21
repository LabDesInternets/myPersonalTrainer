import React, { useEffect, useContext } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import Category from './Category'
import Banner from '../../cors/Banner'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'
import Container from '../../cors/Container'
import categories from './categoriesContent'
import Review from './Review'
import Blog from './Blog'
import Localisation from './Localisation'
import { BlogContext } from '../../../context/BlogContext'


const Home = (props) => {

  const { articles } = useContext(BlogContext)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { element, history } = props

  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coach sportif Paris | Raphael Coaching | Personal Trainer</title>
        <meta name="description"
          content="Coach sportif spécialisé en remise en forme, bien-être, perte de poids et musculation. Coach personnel à domicile ou en extérieur - Paris, Hauts-de-Seine - Programmes d'entraînements 100% adaptés à vos besoins - Approche personnalisée - Coach agréé service à la personne, 50% de réduction d'impôts..." />
      </Helmet>
      <HpWrapper>
        <Banner>
          <BannerContent>
            <h1>Raphael Coaching</h1>
            <p>Des entraînements sur-mesure qui vous permettront d'atteindre vos objectifs</p>
            <StyledLink to="/services"><StyledButton mobile>Découvrir</StyledButton></StyledLink>
          </BannerContent>
        </Banner>
      </HpWrapper>

      <Category element={element} cat={categories.about}></Category>
      <Category cat={categories.services}></Category>
      <Category cat={categories.prices}></Category>

      {articles.length >= 1 && (
        <Blog history={history} />
      )}


      <Review />

      <Localisation />

    </Wrapper>
  )
}

export default Home

const HpWrapper = styled(Container)`
  width:100vw;
  height:100vh;
  min-height:35rem;
`
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
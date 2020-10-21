import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import services from './servicesContent'
import ServiceCard from './ServiceCard'
import { device } from '../../cors/ResponsiveSettings'
import Container from '../../cors/Container'
import servicesBg from '../../../assets/images/servicesBg.jpg'
import StyledButton from '../../cors/StyledButton'
import StyledLink from '../../cors/StyledLink'


const Services = ({ element }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const objectives = []
  Object.keys(services).forEach(target => objectives.push(services[target]))

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Raphael Coaching | Services et prestations</title>
        <meta name="description"
          content="Perte de poids, remise en forme, bien être, prise de muscle, je t'accompagne et je t'encadre dans la réalisation de tes objectifs physiques. 
          Que tu sois débutant ou athlète confirmé, je m'adapte à tes attentes et à tes besoins pour te proposer un programme sur-mesure, personnalisé..." />
      </Helmet>
      <Mobile>
        <CardContainer>
          {objectives.map(objective => <ServiceCard key={objective.title} service={objective} section={objective.title} />)}
        </CardContainer>
      </Mobile>

      <Laptop ref={element} bgImg={servicesBg}>
        <ContentWrapper>
          <CardContainer>
            {objectives.map(objective => <ServiceCard key={objective.title} service={objective} section={objective.title} />)}
          </CardContainer>

          <BtnDiv>
            <StyledLink to='/book'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
          </BtnDiv>
        </ContentWrapper>
      </Laptop>
    </>

  )
}

export default Services

const Mobile = styled(Container)`
  @media ${device.laptop}{
    display:none;
  }
`
const BtnDiv = styled.div`
  min-height: 4rem;
  height:15%;
`

const Laptop = styled(Container)`
  display:none;
  @media ${device.laptop}{
    display:flex;
    width:100vw;
    height:100vh;
    min-height:40em;
    background-image: url(".${props => props.bgImg}");
    background-size: cover;
    background-position:50%;
  }
`
const ContentWrapper = styled(Container)`
  position: relative;
  top: 75px;
  height:80%;
  min-height: 30em;
`

const CardContainer = styled.div`

  @media ${device.laptop} {
    height:85%;
    display:flex;
    flex-direction: row;
  }
`

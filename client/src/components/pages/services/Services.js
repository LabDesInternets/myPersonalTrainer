import React, { useEffect } from 'react'
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
      <Mobile>
        <ContentWrapper>
          {objectives.map(objective => <ServiceCard key={objective.title} service={objective} section={objective.title} />)}
        </ContentWrapper>
      </Mobile>

      <Laptop ref={element} bgImg={servicesBg}>
        <ContentWrapper>
          {objectives.map(objective => <ServiceCard key={objective.title} service={objective} section={objective.title} />)}
        </ContentWrapper>

        <BtnDiv>
          <StyledLink to='/book'><StyledButton dark>Réserver ma séance d'essai gratuite</StyledButton></StyledLink>
        </BtnDiv>
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
  min-height: 15vh;

`

const Laptop = styled(Container)`
  display:none;
  @media ${device.laptop}{
    display:flex;
    width:100vw;
    height:100vh;
    padding-top:4.5rem;
    background-image: url(".${props => props.bgImg}");
    background-size: cover;
    background-position:50%;
  }
`

const ContentWrapper = styled.div`

  @media ${device.laptop} {
    height:80vh;
    display:flex;
    flex-direction: row;
  }
`

const Wrapper = styled.div`

`
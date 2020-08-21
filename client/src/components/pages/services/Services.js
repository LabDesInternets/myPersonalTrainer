import React from 'react'
import styled from 'styled-components'
import services from './servicesContent'
import ServiceCard from './ServiceCard'
import { device } from '../../cors/ResponsiveSettings'
import Container from '../../cors/Container'
import servicesBg from '../../../assets/images/servicesBg.jpg'


const Services = ({ element }) => {

  const objectives = []
  Object.keys(services).forEach(target => objectives.push(services[target]))

  return (
    <ServicesContainer ref={element} bgImg={servicesBg}>
      <Wrapper>
        {objectives.map(objective => <ServiceCard key={objective.title} service={objective} section={objective.title} />)}
      </Wrapper>
    </ServicesContainer>
  )
}

export default Services

const ServicesContainer = styled(Container)`
  @media ${device.laptop}{
    width:100vw;
  height:100vh;
  padding:4.5rem 0;
  background-image: url(".${props => props.bgImg}");
  background-size: cover;
  background-position:50%;
  }
`

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`
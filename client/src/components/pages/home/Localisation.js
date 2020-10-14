import React from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
import Map from '../../map'

const Localisation = () => {

  const zoomLevel = {
    default: 11,
    mobile: 10.25
  }
  const center = {
    address: 'Paris',
    lat: 48.862467,
    lng: 2.318115,
  }
  const location = {
    address: 'Boulogne-Billancourt',
    lat: 48.833832,
    lng: 2.243230,
  }

  return (
    <Wrapper height='25rem' bgColor='#03071e'>
      <Title>Zone d'intervention</Title>
      <MapWrapper>
        <Map location={location} zoomLevel={zoomLevel} center={center} />
      </MapWrapper>
    </Wrapper>
  )
}

export default Localisation

const Wrapper = styled(Container)`
  color:white;
`
const Title = styled.div`
  height: 10%;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:500;
  font-size:1.2rem;
`
const MapWrapper = styled.div`
  display:flex;
  display:flex;
  justify-content:center;
  height:90%;
  width:100%;
  background-color: #03071e;
`
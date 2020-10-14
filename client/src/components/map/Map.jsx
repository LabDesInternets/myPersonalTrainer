import React from 'react'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import { device } from '../cors/ResponsiveSettings'

const gmApiKey = process.env.REACT_APP_GM_API_KEY

const targetCoords = [
  { lat: 48.820859, lng: 2.377326 },
  { lat: 48.835324, lng: 2.411315 },
  { lat: 48.872963, lng: 2.410828 },
  { lat: 48.899550, lng: 2.377159 },
  { lat: 48.896984, lng: 2.315365 },
  { lat: 48.889121, lng: 2.258568 },
  { lat: 48.879728, lng: 2.165233 },
  { lat: 48.832728, lng: 2.154958 },
  { lat: 48.803613, lng: 2.188506 },
  { lat: 48.783758, lng: 2.246413 },
  { lat: 48.794851, lng: 2.294744 },
  { lat: 48.807741, lng: 2.329076 }
];

const handleApiLoaded = (map, maps) => {

  const targetZone = new maps.Polygon({
    path: targetCoords,
    strokeColor: '#0096c7',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0096c7",
    fillOpacity: 0.35
  })
  targetZone.setMap(map)
};

const Map = ({ zoomLevel, center }) => {

  zoomLevel = window.innerWidth >= 688 ? zoomLevel.default : zoomLevel.mobile

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${gmApiKey}` }}
        defaultCenter={center}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
      </GoogleMapReact>


    </Wrapper >
  )
}

export default Map

const Wrapper = styled.div`
  height:100%;
  width:100%;
`



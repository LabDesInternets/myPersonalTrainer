import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import pricesAndOptionsRaw from '../../../assets/images/pricesAndOptionsRaw.jpg'
import pricesAndOptionsRaw1 from '../../../assets/images/pricesAndOptionsRaw1.jpg'
import pricesAndOptionsRaw2 from '../../../assets/images/pricesAndOptionsRaw2.jpg'
import pricesAndOptionsRaw3 from '../../../assets/images/pricesAndOptionsRaw3.jpg'
import pricesAndOptionsGroupRaw from '../../../assets/images/pricesAndOptionsGroupRaw.jpg'
import PricesCard from './PricesCard'
import prices from './pricesContent'
import { device } from '../../cors/ResponsiveSettings'


const Wrapper = styled.div`
  background-image: url(".${props => props.bgImg}");
  background-color: ${props => props.bgColor || '#03071e'};
  background-size: cover;
  background-position:50%;
  width:100vw;
  height:100vh;
  display: flex;
  align-items:center;
  justify-content: center;

  ${props =>
    props.laptop &&
    css`
      display: none;
        @media ${device.laptop} {
          display:flex;
        }
    `}
`

const MobileWrapper = styled.div`
    ${props =>
    props.mobile &&
    css`
      display: block;
        @media ${device.laptop} {
          display:none;
        }
    `}
`

const PricesAndOptions = ({ element }) => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <MobileWrapper mobile>
        <Wrapper bgImg={pricesAndOptionsRaw}>
          <PricesCard prices={prices.oneSession}></PricesCard>
        </Wrapper>
        <Wrapper bgImg={pricesAndOptionsRaw1}>
          <PricesCard prices={prices.fiveSessions}></PricesCard>
        </Wrapper>
        <Wrapper bgImg={pricesAndOptionsRaw2}>
          <PricesCard prices={prices.tenSessions}></PricesCard>
        </Wrapper>
        <Wrapper bgImg={pricesAndOptionsRaw3}>
          <PricesCard prices={prices.groupSession}></PricesCard>
        </Wrapper>
      </MobileWrapper>

      <Wrapper ref={element} laptop bgImg={pricesAndOptionsGroupRaw}>
        <PricesCard prices={prices.oneSession}></PricesCard>
        <PricesCard prices={prices.fiveSessions}></PricesCard>
        <PricesCard prices={prices.tenSessions}></PricesCard>
        <PricesCard prices={prices.groupSession}></PricesCard>
      </Wrapper>

    </>
  )
}

export default PricesAndOptions

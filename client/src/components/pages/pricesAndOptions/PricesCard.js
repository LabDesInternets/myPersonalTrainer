import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import Container from '../../cors/Container'
import { Clock, Gift, Home, TreeOption } from 'grommet-icons'
import equipment from '../../../assets/icons/gym-blue.png'
import { device } from '../../cors/ResponsiveSettings'



const PricesCard = ({ prices }) => {


  return (

    <Card>
      <HeaderWrapper>
        <Header>
          <h2>{prices.title}</h2>
          {prices.option && <p>{prices.option}</p>}
        </Header>
        {prices.priceOption ? (
          <Header optionAlign>
            <div>
              <h3>{prices.price} €</h3>
              <p>{prices.priceOption}</p>
            </div>
          </Header>
        ) : (
            <Header align>
              <h3>{prices.price} €</h3>
              <p>{prices.priceOption}</p>
            </Header>
          )
        }

      </HeaderWrapper>
      <Section>
        <div>
          <span><Gift size='medium' color='#0096c7' /></span>
          <div>1ère séance offerte</div>
        </div>
        <div>
          <span><Clock size='medium' color='#0096c7' /></span>
          <div>1h15</div>
        </div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
            <Home size='medium' color='#0096c7' />
            <TreeOption size='medium' color='#0096c7' />
          </div>
          <div>A domicile ou en extérieur</div>
        </div>
        <div>
          <span><img src={equipment} alt='' /></span>
          <div style={{ marginLeft: '-3px' }}>Equipement inclus</div>
        </div>
      </Section>
    </Card>

  )
}

export default PricesCard

export const fadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:0.85;
  }
`

const Card = styled(Container)`
  width:90vw;
  height:80vh;
  background-color:#071013;
  opacity:0.85;
  border-radius:10px ;
  margin:1rem;
  padding:1rem 0.5rem;
  font-size:1.3rem;
  justify-content: center;
  animation: ${fadeIn} 3s; 
    &:nth-child(1) { 
    animation-duration: 1s;
    }
    &:nth-child(2) { 
    animation-duration: 2s;
    }
    &:nth-child(3) { 
    animation-duration: 3s;
    }
    &:nth-child(4) { 
    animation-duration: 4s;
    }

  h2{
    color: #0096c7;
  }
  h3 {
    color: white;
  }
  img{
    height:22px;
    margin-left:-3px;
  }
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
  @media ${device.laptop} {
    font-size: 1.3vw;
    height: 60vh;
    width:25%;
    margin:2rem;
    padding: 3rem 1rem;
    justify-content: space-around;
  }
  
`
const Section = styled.div`
  height:60%;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:baseline;

  div{
    display:flex;
    flex-direction:row;
    align-items:baseline;
    justify-content:center;
    padding: 0.5rem 1rem;
    color: white;
    line-height:1.2rem;
  }
  @media ${device.tablet} {
    align-items:center;
  }
  @media ${device.laptop} {
    align-items:baseline;
  }

`
const Header = styled.div`
  display:flex;
  padding: 0.5rem 1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color: #bdede0;
  line-height:1;
  padding:1rem 0;
  p{
    font-size:1rem;
  }

  ${props =>
    props.align &&
    css`
      /* position:relative; */
    `}

    ${props =>
    props.optionAlign &&
    css`
      position:relative;
      bottom: 12%;
      text-align:center;
    `}
`
const HeaderWrapper = styled.div`
  height:25%;
`
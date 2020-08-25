import React from 'react'
import styled, { css } from 'styled-components'
import Container from '../../cors/Container'
import { Clock, Gift, Home, TreeOption } from 'grommet-icons'
import equipment from '../../../assets/icons/equipmentWhite.png'
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
          <div>1ère séance bilan offerte</div>
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
          <div>Equipement inclus</div>
        </div>
      </Section>
    </Card>

  )
}

export default PricesCard

const Card = styled(Container)`
  width:90vw;
  height:80vh;
  background-color:#071013;
  opacity:0.9;
  border-radius:10px ;
  margin:1rem;
  padding:1rem 0.5rem;
  font-size:1.3rem;
  justify-content: center;
  h2{
    color: #0096c7;
  }
  h3 {
    color: white;
  }
  img{
    height:20px;
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
    /* color: #bdede0; */
    color: white;
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
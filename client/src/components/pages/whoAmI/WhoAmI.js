import React from 'react'
import styled from 'styled-components'
import Container from '../../cors/Container'
import { device } from '../../cors/ResponsiveSettings'
import categories from '../home/categoriesContent'
import servicesStairs from '../../../assets/images/servicesStairs.jpg'



const WhoAmI = ({ element }) => {

  const category = categories.about
  return (
    <div ref={element}>

      <WrapperFP bgImg={servicesStairs}>
        <ContentWrapper>
          <p>{category.content1}</p>
          <p>{category.content2}</p>
          <p>{category.content3}</p>
          <p>{category.content4}</p>
        </ContentWrapper>
      </WrapperFP>

    </div>
  )
}

export default WhoAmI

const WrapperFP = styled.div`
  width:100vw;
  height:100vh;
  background-image: url(".${props => props.bgImg}");
  background-size:cover;
  background-color:black;
  opacity:0.8;
  background-position:50%; 
  color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;


`

const ContentWrapper = styled(Container)`
   font-size:1rem;
   padding:2rem 1rem 1rem 1rem;
   justify-content: space-evenly;
   background-color:black;
   font-weight:400;
   flex-wrap:nowrap;
  opacity:0.8;
   @media ${device.tablet} {
     font-size:1.5rem;
     padding: 4rem;
   }
   @media ${device.laptop} {
    padding:4rem;
    height:60vh;
   }
`

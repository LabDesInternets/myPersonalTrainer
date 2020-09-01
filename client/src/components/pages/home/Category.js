import React from 'react'
import styled from 'styled-components'
import { device } from '../../cors/ResponsiveSettings'
import StyledLink from '../../cors/StyledLink'
import StyledButton from '../../cors/StyledButton'


const Category = ({ cat, element }) => {
  return (
    <div ref={element}>
      {cat.switchDisplay ? (
        <Section>
          <Wrapper>
            <h1>{cat.title}</h1>
            <p>{cat.content1}</p>
            <StyledLink to={cat.linkTo} padding='1rem'><StyledButton>En savoir plus</StyledButton></StyledLink>
          </Wrapper>
          <ImageWrapper bgImg={cat.img}></ImageWrapper>
        </Section>
      ) : (
          <Section>
            <ImageWrapper bgImg={cat.img} bgPos={cat.bgPos}></ImageWrapper>

            <Wrapper>
              <h1>{cat.title}</h1>
              <p>{cat.content1}</p>
              <StyledLink to={cat.linkTo} padding='1rem'><StyledButton>En savoir plus</StyledButton></StyledLink>
            </Wrapper>

          </Section>
        )}
    </div>
  )
}

export default Category


const Wrapper = styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction: column;
justify-content: center;
font-size: 1.25rem;
padding:1rem;
position: absolute;
top:0;
z-index:10;
color:white;
font-weight:400;
h1{
  font-size: 2.75rem;
  font-weight: 400;
  padding:0.5rem 1rem;
}
p{
  padding: 0.5rem 1rem;
}

@media ${device.laptop} {
  width: 50vw;
  position:relative;
  color:black;
  font-weight:300;
  line-height:2;
  padding: 6rem;
  align-items:center;
  text-align:center;
  font-size: 1.5rem;
}
`

const ImageWrapper = styled.div`
width:100vw;
height:100vh;
position: relative;
z-index:1;
background-image: url(.${props => props.bgImg});
background-repeat: no-repeat;
background-size: cover;
background-position: ${props => props.bgPos || '50%'};
  &&::before{
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.25);
  }

@media ${device.laptop} {
  width: 50vw;
  &&::before{
    background-color: rgba(0,0,0,0);
  }
}
`
const Section = styled.div`
position:relative;
width:100vw;
height: 100vh;

@media ${device.laptop} {
  display:flex;
}
`
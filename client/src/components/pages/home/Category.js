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
            <p>{cat.content2}</p>
            <StyledLink to={cat.linkTo}><StyledButton>En savoir plus</StyledButton></StyledLink>
          </Wrapper>
          <ImageWrapper bgImg={cat.img}></ImageWrapper>
        </Section>
      ) : (
          <Section>
            <ImageWrapper bgImg={cat.img} bgPos={cat.bgPos}></ImageWrapper>
            <Wrapper>
              <h1>{cat.title}</h1>
              <p>{cat.content1}</p>
              <p>{cat.content2}</p>
              <StyledLink to={cat.linkTo}><StyledButton>En savoir plus</StyledButton></StyledLink>
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
position: absolute;
top:0;
z-index:10;
color:white;
padding: 2rem;
font-size: 1.5rem;

h1{
  font-size: 2.75rem;
  font-weight: 400;
}

@media ${device.laptop} {
  width: 50vw;
  position:relative;
  color:black;
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

@media ${device.laptop} {
  width: 50vw;
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
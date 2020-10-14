import React from 'react'
import styled from 'styled-components'
import { device } from '../../cors/ResponsiveSettings'
import StyledLink from '../../cors/StyledLink'
import StyledButton from '../../cors/StyledButton'
import Container from '../../cors/Container'


const Category = ({ cat, element }) => {
  return (
    <div ref={element}>
      {cat.switchDisplay ? (
        <Section>
          <Wrapper>
            <ContentWrapper>
              <h1>{cat.title}</h1>
              <p>{cat.content1}..</p>
              <StyledLink to={cat.linkTo}><StyledButton>En savoir plus</StyledButton></StyledLink>
            </ContentWrapper>
          </Wrapper>
          <ImageWrapper bgImg={cat.img}></ImageWrapper>
        </Section>
      ) : (
          <Section>
            <ImageWrapper bgImg={cat.img} bgPos={cat.bgPos}></ImageWrapper>

            <Wrapper>
              <ContentWrapper>
                <h1>{cat.title}</h1>
                <p>{cat.content1}..</p>
                <StyledLink to={cat.linkTo}><StyledButton>En savoir plus</StyledButton></StyledLink>
              </ContentWrapper>
            </Wrapper>

          </Section>
        )}
    </div>
  )
}

export default Category


const Wrapper = styled.div`
width:100vw;
height:100%;
display:flex;
flex-direction: column;
justify-content: center;
font-size: calc(1rem +0.6vw);
position: absolute;
top:0;
z-index:10;
color:white;
font-weight:400;
h1{
  font-size: calc(2rem + 0.5vw);
  font-weight: 400;
  padding:0.5rem 1rem;
}
p{
  padding: 0.5rem 1rem;
  /* overflow-x:auto; */
  /* min-height: 7rem; */
}

@media ${device.laptop} {
  max-width: 50vw;
  padding:6rem;
  position:relative;
  color:black;
  font-weight:300;
  line-height:2;
  align-items:center;
  text-align:center;

}

@media (max-width:992px) {
  font-size: calc(1rem + 0.8vw);
}
`
const ContentWrapper = styled(Container)`
  align-items:normal;
  height: 60%;
`

const ImageWrapper = styled.div`
width:100vw;
height:100%;
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
max-width:100vw;
height: 100vh;
min-height:35rem;
@media ${device.laptop} {
  display:flex;
}
`
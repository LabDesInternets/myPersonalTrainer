import React from 'react'
import styled from 'styled-components'
import { Instagram } from 'grommet-icons';
import StyledLink from '../cors/StyledLink';


const Footer = () => {
  return (
    <Wrapper>
      <div>Retrouvez moi sur</div>
      <StyledLink to='https://www.instagram.com/'><Instagram size='large' color='#07BEB8' /></StyledLink>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: #03071e;
  color:white;
  font-size: 1.5rem;
`
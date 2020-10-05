import styled, { css } from 'styled-components'
import { device } from './ResponsiveSettings'

const StyledButton = styled.button`
  background-color:white;
  color: #0096c7;
  opacity:0.8;
  border-radius: 1000vh;
  width: ${props => props.w || "10rem"};
  border: 2px solid #0096c7;
  color: #0096c7;
  margin: 1rem 0rem; 
  padding: 0.4rem 0;
  font-weight: 400;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      background-color:#0096c7;
      color: white;

    `}

    ${props =>
    props.dark &&
    css`
      background-color:#03071e;
      color: white;
      width: 20rem;
      border: 2px solid white;
      &&:hover {
        background: #0096c7;
    `}
  @media ${device.laptop} {
    background: transparent;
    &&:hover {
    background: #0096c7;
    color: white;
    }
    ${props =>
    props.mobile &&
    css`
      background-color:white;
      color: #0096c7;
      opacity:0.8;
    `}
    ${props =>
    props.primary &&
    css`
      background-color:#0096c7;
      color: white;

    `}
    ${props =>
    props.dark &&
    css`
      background-color:#03071e;
      color: white;
      width: 20rem;
      border: 2px solid white;
      &&:hover {
        background: #0096c7;
    `}

  }

`;

export default StyledButton;

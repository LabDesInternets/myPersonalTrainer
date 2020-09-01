import styled, { css } from 'styled-components'
import { device } from './ResponsiveSettings'

const StyledButton = styled.button`
    background-color:white;
    color: #0096c7;
    opacity:0.8;
  border-radius: 20px;
  width: ${props => props.w || "11rem"};
  border: 2px solid #0096c7;
  color: #0096c7;
  /* margin: 0.5rem 1rem; */
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      background-color:#0096c7;
      color: white;

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
  }

`;

export default StyledButton;

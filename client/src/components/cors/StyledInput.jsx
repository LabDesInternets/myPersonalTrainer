import styled, { css } from 'styled-components'
import { device } from './ResponsiveSettings'

const StyledInput = styled.input`
  height: ${props => props.height || '2rem'};
  width: ${props => props.width || '100%'};
  border-radius: 0;
  /* font-size: calc(0.8rem + 0.4vw);  */
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  border: none; 
  color: black;
  border-bottom: 1px solid gray;
  &:focus {
    border-bottom: 1px solid #0096c7;
    outline: none;
  }
  ${props =>
    props.dark &&
    css`
      /* border: 1px solid white; */
      border-radius:3px;
      padding: 0.5rem 0.5rem;
      border-bottom:none;
      &:focus {
      border: 1px solid #0096c7;
      outline: none;
  }
    `}

  @media ${device.laptop} {
    /* padding: 1rem 0; */
  }


`;

export default StyledInput;

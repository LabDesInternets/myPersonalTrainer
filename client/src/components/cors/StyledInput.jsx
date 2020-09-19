import styled from 'styled-components'
import { device } from './ResponsiveSettings'

const StyledInput = styled.input`
  height: ${props => props.height || '2rem'};
  border-radius: 0;
  font-family: 'Dosis';  
  font-size: calc(0.8rem + 0.4vw); 
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  border: none; 
  color: black;
  border-bottom: 1px solid gray;
  &:focus {
    border-bottom: 1px solid #0096c7;
    outline: none;
  }
  @media ${device.laptop} {
    /* padding: 1rem 0; */
  }
`;

export default StyledInput;

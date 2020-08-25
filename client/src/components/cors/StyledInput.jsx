import styled from 'styled-components'

const StyledInput = styled.input`
  height: ${props => props.height || '2rem'};
  font-family: 'Dosis';  
  font-size: 1.25rem;
  padding: 1rem 0;
  margin: 0.5rem 0;
  border: none; 
  color: black;
  border-bottom: 1px solid gray;
  &:focus {
    border-bottom: 1px solid #07BEB8;
    outline: none;
  }
`;

export default StyledInput;

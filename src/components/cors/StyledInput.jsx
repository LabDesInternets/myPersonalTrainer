import styled from 'styled-components'

const StyledInput = styled.input`
  height: 2rem;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  border: none; 
  border-bottom: 1px solid gray;
  &:focus {
    border-bottom: 1px solid #07BEB8;
    outline: none;
  }
`;

export default StyledInput;

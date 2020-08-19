import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  /* background: #0096c7; */
  border-radius: 20px;
  width: ${props => props.w || "11rem"};
  border: 2px solid #0096c7;
  /* color: white; */
  color: #0096c7;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  &&:hover {
    background: #0096c7;
    color: white;
  }

  ${props =>
    props.primary &&
    css`
      background: blue;
      color: white;
      border: 2px solid blue;
    `}
`;

export default StyledButton;

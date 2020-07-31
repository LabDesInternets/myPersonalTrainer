import styled, { css } from "styled-components/macro";

const StyledButton = styled.button`
  /* background: #48CAE4; */
  background: #07BEB8;
  border-radius: 15px;
  width: ${props => props.w || "11rem"};
  /* border: 2px solid #48CAE4; */
  border: 2px solid #07BEB8;
  color: white;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  &&:hover {
    /* background: #48CAE4; */
    background: #07BEB8;
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

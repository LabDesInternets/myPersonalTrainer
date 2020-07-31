import styled from 'styled-components'
import { Link } from 'react-router-dom'


const StyledLink = styled(Link)`
  color: inherit;
  text-decoration:none;
  cursor: pointer;
  text-align: center;
  padding: 0 1rem;
  &:hover{
    text-decoration:none;
    color: #07BEB8;
  }
`;

export default StyledLink

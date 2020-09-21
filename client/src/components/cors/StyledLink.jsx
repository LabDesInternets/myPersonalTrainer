import styled, { css } from 'styled-components'
import { Link, NavLink } from 'react-router-dom'


const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration:none;
  cursor: pointer;
  text-align: center;
  padding: ${props => props.padding || '0 1rem'};
  &:hover{
    text-decoration:none;
    color: #0096c7;
  }
  &.active {
    color: #0096c7;
  }
`;

export default StyledLink

import styled from "styled-components/macro";
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
  color: inherit;
  text-decoration:none;
  cursor: pointer;
  text-align: center;
  /* width: ${props => props.w || "100%"}; */
  &:hover{
    text-decoration:none;
    /* color:${props => props.theme.global.colors.secondary}; */
  }
  &:focus {
    /* color:${props => props.theme.global.colors.secondary};    */
    /* border-bottom: 1px solid ${props => props.theme.global.colors.primary}; */
  }
`;

export default StyledLink;

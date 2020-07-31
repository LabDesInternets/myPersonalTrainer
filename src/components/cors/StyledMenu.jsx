import styled from 'styled-components'
import { device } from "./ResponsiveSettings"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  opacity:1;
  width:100%;
  height: 100vh;
  padding: 0 1rem;
  text-align: center;
  position: fixed;
  z-index:100;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: #07BEB8;
      /* color: #FFE66D; */
    }
  }
    
    @media ${device.laptop} {
      height:10vh;
      padding: 0 4.5rem;
      display:flex;
      flex-direction:row;
      justify-content: space-between;
      background:transparent;
    
    a {
        padding: 1.25rem 0;
        color:black;
        font-size: 1.5vw;
      }
  }
`;

export default StyledMenu;
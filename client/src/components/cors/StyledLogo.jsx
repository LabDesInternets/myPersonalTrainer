import styled from 'styled-components'
import { device } from "./ResponsiveSettings";

export const StyledLogo = styled.img`
  position: fixed;
  top: 2%;
  left: 0.8rem;
  width:2.5rem;
  z-index:200;
  @media ${device.laptop} {
    display: none;
  }
`

export default StyledLogo
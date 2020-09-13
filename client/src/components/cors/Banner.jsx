import styled from 'styled-components'
import { device } from './ResponsiveSettings'
import homeBanner1400 from '../../assets/images/homeBanner_w_1400.jpg'
import homeBanner from '../../assets/images/homeBanner.jpg'
import homeBannerMobile from '../../assets/images/homeBannerMobile.jpg'

const Banner = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
  text-align: center;
  background-image: url(.${homeBannerMobile});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;

 @media ${device.tablet} {
  background-image: url(.${homeBanner1400});
}

@media ${device.laptop} {
  background-image: url(.${homeBanner});
} 
`;

export default Banner;

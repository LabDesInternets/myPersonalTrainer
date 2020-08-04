import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap || "wrap"};
  flex-direction: ${props => props.fD || "row"};
  justify-content: ${props => props.jC || "space-around"};
  align-items: ${props => props.aI || "center"};
  height: ${props => props.height || "100%"};
  width: ${props => props.width || "100%"};
`;

export default Container;

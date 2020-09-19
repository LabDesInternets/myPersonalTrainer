import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap || "nowrap"};
  flex-direction: ${props => props.fD || "column"};
  justify-content: ${props => props.jC || "center"};
  align-items: ${props => props.aI || "center"};
  height: ${props => props.height || "auto"};
  width: ${props => props.width || "100%"};
  padding: ${props => props.padding || "0"};
  background-color: ${props => props.bgColor || "none"};
`;

export default Container;

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap || "wrap"};
  flex-direction: ${props => props.fD || "column"};
  justify-content: ${props => props.jC || "center"};
  align-items: ${props => props.aI || "center"};
  height: ${props => props.height || "100%"};
  width: ${props => props.width || "100%"};
  padding: ${props => props.padding || "0"};
  font-size: 1.25rem;
`;

export default Container;

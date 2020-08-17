import styled from 'styled-components'

const StyledForm = styled.form`
  display:flex;
  flex-direction: column;
  justify-content: center;
  height: ${props => props.height || "100%"};
`;

export default StyledForm;

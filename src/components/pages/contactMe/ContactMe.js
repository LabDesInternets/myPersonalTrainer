import React from 'react'
import styled from 'styled-components'
import StyledInput from '../../cors/StyledInput'
import StyledButton from '../../cors/StyledButton'
import { device } from '../../cors/ResponsiveSettings'


const ContactMe = () => {
  return (
    <Wrapper>
      <h1>Contact</h1>
      <StyledForm action="" method="post">
        <FormWrapper>
          <label for="fName">Prénom *</label>
          <StyledInput type="text" id="fName" name="firstname" />

          <label for="lName">Nom *</label>
          <StyledInput type="text" id="lName" name="lastname" />

          <label for="email">Adresse email *</label>
          <StyledInput type="text" id="email" name="email" />

          <label for="subject">Sujet *</label>
          <StyledInput type="text" id="subject" name="subject" />

          <label for="message">Message *</label>
          <STextArea id="message" name="message"></STextArea>
        </FormWrapper>
        <div>
          <StyledButton type="submit">Envoyer</StyledButton>
        </div>
      </StyledForm>
    </Wrapper>
  )
}

export default ContactMe

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  padding: 4rem 1.5rem;
  font-size: 1.5rem;

@media ${device.laptop} {
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  height: 100vh;
  margin: 0 10%;
}
`
const StyledForm = styled.form`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: ${props => props.height || "100%"};
  width: ${props => props.width || "100%"};

  @media ${device.laptop} {
    width: 50rem;
  }
`

const FormWrapper = styled(StyledForm)`
  align-items: normal;
  padding: 1rem 0;
  @media ${device.laptop} {
    padding: 1rem 1rem;
  }
`

const STextArea = styled.textarea`
height:10rem;
border: 1px solid gray;
border-radius:5px;
padding: 1rem;
margin: 1rem 0;
font-size:1.25rem;

&:focus {
    border-color: #07BEB8;
    outline: none;
  }
`
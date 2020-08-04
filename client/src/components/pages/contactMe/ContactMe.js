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

          <StyledInput type="text" id="fName" name="firstname" placeholder="Prénom" />


          <StyledInput type="text" id="lName" name="lastname" placeholder="Nom" />


          <StyledInput type="text" id="email" name="email" placeholder="Adresse email" />


          <StyledInput type="text" id="subject" name="subject" placeholder="Sujet" />


          <STextArea id="message" name="message" placeholder="Message..."></STextArea>
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
  padding: 4rem 2rem;
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
margin-top: 2rem;
font-size:1.25rem;

&:focus {
    border-color: #07BEB8;
    outline: none;
  }
`
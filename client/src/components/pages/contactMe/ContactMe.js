import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import styled from 'styled-components'
import StyledInput from '../../cors/StyledInput'
import StyledButton from '../../cors/StyledButton'
import { device } from '../../cors/ResponsiveSettings'

const urlContact = `/api/contact/send`

const contactFormValidation = yup.object().shape({
  firstName: yup.string()
    .min(2, "Votre prénom doit contenir au moins 2 caractères!")
    .max(50, "Votre prénom ne peut pas dépasser 50 caractères!")
    .required("Veuillez renseigner votre prénom"),
  lastName: yup.string()
    .min(2, "Votre nom doit contenir au moins 2 caractères!")
    .max(50, "Votre nom ne peut pas dépasser 50 caractères!")
    .required("Veuillez renseigner votre nom"),
  email: yup.string()
    .email("email non valide")
    .required("Merci de renseigner votre adresse email"),
  subject: yup.string()
    .required("Veuillez saisir l'objet du message"),
  messageToSend: yup.string()
    .required("Veuillez saisir votre message")
});


const ContactMe = props => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    messageToSend: ''
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: contactFormValidation
  });

  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = async data => {
    const newMessage = { ...data };
    try {
      const response = await axios.post(urlContact, newMessage)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <h1>Contact</h1>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>

          <StyledInput
            name="firstName"
            type="text"
            placeholder="Prénom"
            ref={register}
            value={formData.firstName}
            onChange={updateFormData}
          />
          {errors.firstName && <p>errors.firstName.message</p>}

          <StyledInput
            name="lastName"
            type="text"
            placeholder="Nom"
            ref={register}
            value={formData.lastName}
            onChange={updateFormData}
          />
          {errors.lastName && errors.lastName.message}

          <StyledInput
            name="email"
            type="email"
            placeholder="Adresse email"
            ref={register}
            value={formData.email}
            onChange={updateFormData}
          />
          {errors.email && errors.email.message}

          <StyledInput
            name="subject"
            type="text"
            placeholder="Sujet"
            ref={register}
            value={formData.subject}
            onChange={updateFormData}
          />
          {errors.subject && errors.subject.message}

          <STextArea
            name="messageToSend"
            type="text"
            placeholder="Message..."
            ref={register}
            value={formData.messageToSend}
            onChange={updateFormData}
          ></STextArea>
          {errors.messageToSend && errors.messageToSend.message}
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

const FormWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: ${props => props.height || "100%"};
  width: ${props => props.width || "100%"};
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
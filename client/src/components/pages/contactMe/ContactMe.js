import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
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
    .min(15, "Votre message doit contenir au moins 15 caractères!")
    .max(500, "Votre message ne peut pas dépasser 500 caractères!")
    .required("Veuillez saisir votre message")
});


const ContactMe = ({ element, history }) => {

  let countInterval;
  let [countdown, setCountdown] = useState(5)

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      clearInterval(countInterval)
    }
  }, [])

  const [message, setMessage] = useState('')


  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(contactFormValidation)
  });

  const redirect = () => {
    countInterval = setInterval(() => {
      setCountdown(countdown -= 1)
      if (countdown === 0) history.push('/')
    }, 1000)
  }


  const onSubmit = async data => {

    const newMessage = { ...data };
    try {
      const response = await axios.post(urlContact, newMessage)
      console.log(response);
      setMessage(response.data.message)
    } catch (error) {
      console.log(error);
    }
    reset()
    redirect()

  };

  return (
    <Wrapper ref={element}>
      <h1>Contact</h1>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {message && <>
          <FlashMessage>{message}</FlashMessage>
          <p>Vous allez être redirigé vers la page d'acceuil dans <span style={{ color: '#d16666' }}>{countdown}</span> secondes ...</p>
        </>
        }

        <FormWrapper>

          <StyledInput
            name="firstName"
            type="text"
            placeholder="Prénom"
            ref={register}
          />
          {errors.firstName?.message}

          <StyledInput
            name="lastName"
            type="text"
            placeholder="Nom"
            ref={register}
          />
          {errors.lastName?.message}

          <StyledInput
            name="email"
            type="email"
            placeholder="Adresse email"
            ref={register}

          />
          {errors.email?.message}

          <StyledInput
            name="subject"
            type="text"
            placeholder="Sujet"
            ref={register}
          />
          {errors.subject?.message}

          <STextArea
            name="messageToSend"
            type="text"
            placeholder="Message..."
            ref={register}
          ></STextArea>
          {errors.messageToSend?.message}
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
  padding: 4rem 2rem 0 2rem;
  min-height:110vh;
  max-height:160vh;
@media ${device.laptop} {
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  height: 100vh;
  margin: 0 10%;
  padding: 4rem 2rem;
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
    height: 60vh;
  }
`

const STextArea = styled.textarea`
  resize:none;
  height:10rem;
  border: 1px solid gray;
  border-radius:5px;
  padding: 1rem;
  margin-top: 2rem;
  font-size: calc(0.8rem + 0.4vw); 

  &:focus {
    border-color: #0096c7;
    outline: none;
  }

`

const FlashMessage = styled.div`
  border: solid 1px #0096c7;
  background-color: #8ac4ff;
  border-radius:5px;
  padding:1rem;
`
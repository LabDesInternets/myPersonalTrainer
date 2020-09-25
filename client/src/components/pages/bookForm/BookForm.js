import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import styled from 'styled-components'
import StyledInput from '../../cors/StyledInput'
import StyledButton from '../../cors/StyledButton'
import Container from '../../cors/Container'
import { device } from '../../cors/ResponsiveSettings'
import bookingPic from '../../../assets/images/workHarderLarge.jpg'


const urlBooking = `/api/contact/book/send`

const bookFormValidation = yup.object().shape({
  firstName: yup.string()
    .min(2, "Votre prénom doit contenir au moins 2 caractères!")
    .max(50, "Votre prénom ne peut pas dépasser 50 caractères!")
    .required("Veuillez renseigner votre prénom"),
  lastName: yup.string()
    .min(2, "Votre nom doit contenir au moins 2 caractères!")
    .max(50, "Votre nom ne peut pas dépasser 50 caractères!")
    .required("Veuillez renseigner votre nom"),
  phone: yup.string()
    .min(8, "Votre numéro de téléphone doit contenir au moins 8 chiffres!")
    .max(11, "Votre numéro de téléphone ne peut pas dépasser 11 chiffres!")
    .required("Veuillez saisir votre numéro de téléphone au format 0612345678"),
  email: yup.string()
    .email("email non valide")
    .required("Merci de renseigner votre adresse email"),
  messageToSend: yup.string()
    .max(500, "Votre message ne peut pas dépasser 500 caractères!")
});


const BookForm = ({ element, history }) => {

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
    resolver: yupResolver(bookFormValidation)
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
      const response = await axios.post(urlBooking, newMessage)
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
      <Intro>
        <h1 style={{ textAlign: 'center', lineHeight: '1' }}>Réserve ta séance d'éssai gratuite</h1>
        <h3>Pour cela, il te suffit de remplir le questionnaire ci-dessous et je te recontacterai dans les meilleurs délais.</h3>
        <p>Pour rappel, la séance d’essai est une séance test qui me permettra d’en découvrir un peu plus sur toi et ton/tes objectif(s) dans le but d’élaborer des séances (et un plan d’entraînement) qui répondront au mieux à tes besoins et à tes attentes.</p>
        <p>N’hésite pas à me préciser dans le message toutes les infos que tu trouveras pertinentes.</p>
      </Intro>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {message && (<>
          <FlashMessage>{message}</FlashMessage>
          <p style={{ color: 'white', fontWeight: '500' }}>Vous allez être redirigé vers la page d'acceuil dans <span style={{ color: '#d16666' }}>{countdown}</span> secondes ...</p>
        </>
        )}

        <FormWrapper>

          <StyledInput
            name="firstName"
            type="text"
            placeholder="Prénom"
            ref={register}
            dark
          />
          <Error>{errors.firstName?.message}</Error>

          <StyledInput
            name="lastName"
            type="text"
            placeholder="Nom"
            ref={register}
            dark
          />
          <Error>{errors.lastName?.message}</Error>

          <StyledInput
            name="phone"
            type="tel"
            pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
            placeholder="Numéro de téléphone"
            ref={register}
            dark
          />
          <Error>{errors.phone?.message}</Error>

          <StyledInput
            name="email"
            type="email"
            placeholder="Adresse email"
            ref={register}
            dark
          />
          <Error>{errors.email?.message}</Error>

          <STextArea
            name="messageToSend"
            type="text"
            placeholder="Message..."
            ref={register}
          ></STextArea>
          <Error>{errors.messageToSend?.message}</Error>
        </FormWrapper>
        <div>
          <StyledButton type="submit" mobile>Envoyer</StyledButton>
        </div>
      </StyledForm>
    </Wrapper>
  )
}

export default BookForm

const Wrapper = styled.div`
z-index:10;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  padding-top: 4rem;
  min-height:110vh;
  max-height:200vh;
@media ${device.laptop} {
  min-height:100vh;
  justify-content:flex-end;
  p{
    text-align:center;
  }
}
`
const StyledForm = styled.form`
  background-image: url(.${bookingPic});
  background-repeat: no-repeat;
  background-size:cover;
  background-position:50%;
  position: relative;
  z-index:1;
  width: 100vw;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  min-height:80vh;
  height: ${props => props.height || "100%"};
  width: ${props => props.width || "100%"};
  &&::before{
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0,0.25);
  }
  @media ${device.laptop} {
    min-height:70vh;
  }
`
const Intro = styled(Container)`
  min-height:70vh;
  padding: 1rem;
  @media ${device.laptop} {
    min-height:60vh;
    padding:0 5rem;
  }
`

const FormWrapper = styled.div`
z-index:10;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: ${props => props.height || "100%"};
  width: ${props => props.width || "100%"};
  align-items: center;
  padding: 1rem;
  input {
    width:70vw;
  }
  @media ${device.laptop} {
    width:100vw;
    padding: 1rem 1rem;
    input {
      width:20rem;
    }
  }
`

const STextArea = styled.textarea`
  resize:none;
  min-height:10rem;
  height:10rem;
  border: 1px solid gray;
  border-radius:5px;
  padding: 1rem;
  margin-top: 2rem;
  font-size: calc(0.8rem + 0.4vw); 
  width:85vw;
  &:focus {
    border-color: #0096c7;
    outline: none;

  }
  @media ${device.laptop} {
    width:40rem;
  }
`

const FlashMessage = styled.div`
  border: solid 1px #0096c7;
  background-color: #8ac4ff;
  border-radius:5px;
  padding:1rem;
 
  
`
const Error = styled.p`
  color:white;
  font-weight:400;
`
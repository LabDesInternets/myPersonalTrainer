import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Container from '../../cors/Container'
import StyledForm from '../../cors/StyledForm'
import StyledInput from '../../cors/StyledInput'
import StyledButton from '../../cors/StyledButton'


const urlForgottenPassword = `/api/users/forgot-password`

const Ooops = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(urlForgottenPassword, data);
    } catch (error) {
      console.log('ooops => ', error)
    }
  };

  return (
    <Container width='100vw' height='90vh'>
      <div>Mot de passe oublié</div>
      <StyledForm onSubmit={handleSubmit(onSubmit)} height='60%'>
        <StyledInput
          name='email'
          type='email'
          placeholder='Email'
          ref={register}
        />
        <StyledButton type='submit' w='20rem'>Réinitialiser le mot de passe</StyledButton>
      </StyledForm>

    </Container>
  )
}

export default Ooops

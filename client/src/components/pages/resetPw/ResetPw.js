import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import Container from '../../cors/Container'
import StyledForm from '../../cors/StyledForm'
import StyledInput from '../../cors/StyledInput'
import StyledButton from '../../cors/StyledButton'


const urlResetPassword = `/api/users/reset-password`

const ResetPw = (props) => {

  const { id, token } = props.match.params
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {

    try {
      const response = await axios.post(`${urlResetPassword}/${id}/${token}`, data);
      console.log("res ", response);
    } catch (error) {
      console.log('ooops => ', error)
    }
  };

  return (
    <Container width='100vw' height='90vh'>
      <div>Réinitialise ton mot de passe</div>
      <StyledForm onSubmit={handleSubmit(onSubmit)} height='60%'>
        <StyledInput
          name='password'
          type='password'
          placeholder='nouveau mot de passe'
          ref={register}
        />
        <StyledInput
          name='passwordConfirm'
          type='password'
          placeholder='Confirme ton nouveau mot de passe'
          ref={register}
        />
        <StyledButton type='submit' w='20rem'>Mettre à jour le mot de passe</StyledButton>
      </StyledForm>

    </Container>
  )
}

export default ResetPw

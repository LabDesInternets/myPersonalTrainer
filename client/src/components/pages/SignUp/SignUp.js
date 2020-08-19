import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import StyledButton from '../../cors/StyledButton'
import Container from '../../cors/Container'
import StyledLink from '../../cors/StyledLink'
import StyledInput from '../../cors/StyledInput'
import StyledForm from '../../cors/StyledForm'


const UrlSignup = `/api/users/register`
const urlAdmin = process.env.REACT_APP_ADMIN


const SignUp = props => {

  const { register, handleSubmit } = useForm()
  const [isCreated, setIsCreated] = useState(false)


  const onSubmit = async data => {
    try {
      const newUser = { ...data };
      const response = await axios.post(UrlSignup, newUser)
      console.log(response)
      if (response.status === 201) setIsCreated(true)
      console.log('is created', isCreated)
    } catch (error) {
      console.log('ooooops => ', error)
    }
  };
  if (isCreated) {
    // return <Redirect to={`/${urlAdmin}`} />;
    props.history.push(`${urlAdmin}`)
  }

  return (
    <Container width="100vw" height="80vh">
      <Container fD="column" height="80%">
        <Container fD="column" height="20%">
          <div style={{ fontSize: '2rem' }}>Créé ton compte</div>
          <div>
            Tu as déjà un compte?
            <StyledLink to="/signin">Se connecter</StyledLink>
          </div>
        </Container>

        <StyledForm onSubmit={handleSubmit(onSubmit)} height="60%">
          <StyledInput
            name="email"
            type="email"
            placeholder="Email"
            ref={register}
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="Mot de passe"
            ref={register}
          />
          <StyledInput
            name="passwordConfirm"
            type="password"
            placeholder="Confirmez votre mot de passe"
            ref={register}
          />
          <StyledInput
            name="role"
            type="text"
            placeholder="role"
            ref={register}
          />
          <StyledButton type="submit">Créer mon compte</StyledButton>
        </StyledForm>
      </Container>
    </Container>
  )
}


export default SignUp


import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import StyledButton from '../../cors/StyledButton'
import Container from '../../cors/Container'
import StyledInput from '../../cors/StyledInput'
import StyledLink from '../../cors/StyledLink'
import StyledForm from '../../cors/StyledForm'
import { useAuth } from '../../../context/AuthContext'


const urlLogin = `/api/users/login`
const urlAdmin = process.env.REACT_APP_ADMIN

const Error = styled.div`
  color: red;
`

let SignIn = (props) => {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isError, setIsError] = useState(false);
  const { setAuthToken } = useAuth();


  const { register, handleSubmit } = useForm();

  const onSubmit = async () => {
    try {
      const response = await axios.post(urlLogin, credentials);
      if (response.status === 200) {
        setAuthToken(response.headers.xauth)
        setLoggedIn(true)
      } else {
        setIsError(true)
      }
    } catch (error) {
      setIsError(true)
    }
  };

  const updateCredentials = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };
  if (isLoggedIn) {
    return <Redirect to={`/${urlAdmin}`} />;
  }

  return (
    <Container width='100vw' height='90vh' >
      <Container fD='column' height='80%'>
        <Container fD='column' height='20%'>
          <div style={{ fontSize: '2rem' }}>Connecte-toi</div>
          <StyledLink to='/ooopsie'>Mot de passe oublié ?</StyledLink>
        </Container>
        <>
          <StyledForm onSubmit={handleSubmit(onSubmit)} height='60%'>
            <StyledInput
              name='email'
              type='email'
              placeholder='Email'
              ref={register}
              value={credentials.email}
              onChange={updateCredentials}
            />

            <StyledInput
              name='password'
              type='password'
              placeholder='Mot de passe'
              ref={register}
              value={credentials.password}
              onChange={updateCredentials}
            />
            <StyledButton type='submit'>Se connecter</StyledButton>
            {isError && <Error>The username or password provided were incorrect!</Error>}
          </StyledForm>
        </>
      </Container>
    </Container >
  )
}


export default SignIn



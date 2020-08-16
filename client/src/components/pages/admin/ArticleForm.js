import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import axios from 'axios'
import StyledInput from '../../cors/StyledInput'
import StyledButton from '../../cors/StyledButton'
import { device } from '../../cors/ResponsiveSettings'

const urlAddArticle = `/api/blog/articles/add`
const urlUpdateArticle = `/api/blog/articles/edit`

const ArticleForm = (props) => {
  const { addMode, data, editMode, editArticleMode } = props
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    text: '',
    picture: '',
    date: ''
  });

  const { register, handleSubmit } = useForm()

  useEffect(() => {
    if (data) setFormData(data);
  }, [data])

  const refresh = () => window.location.reload()

  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = async dataForm => {

    if (editMode) {
      const updatedArticle = { ...dataForm };
      try {
        const response = await axios.put(`${urlUpdateArticle}/${data.id}`, updatedArticle)
        console.log(response);
        refresh()
      } catch (error) {
        console.log("ooops ! => ", error);
      }
    } else {
      const newArticle = { ...dataForm };
      try {
        const response = await axios.post(urlAddArticle, newArticle)
        console.log(response);
        refresh()
      } catch (error) {
        console.log("ooops ! => ", error);
      }
    }

  };

  return (
    <Wrapper addMode={addMode} editArticleMode={editArticleMode}>
      {editMode ? <h1>Modifier un article</h1> : <h1>Ajouter un article</h1>}

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormWrapper>

          <StyledInput
            name="title"
            type="text"
            placeholder="Titre"
            ref={register}
            value={formData.title}
            onChange={updateFormData}
          />


          <StyledInput
            name="description"
            type="text"
            placeholder="Description"
            ref={register}
            value={formData.description}
            onChange={updateFormData}
          />


          <STextArea
            name="text"
            type="text"
            placeholder="Texte"
            ref={register}
            value={formData.text}
            onChange={updateFormData}
          />


          <StyledInput
            name="picture"
            type="text"
            placeholder="Picture"
            ref={register}
            value={formData.picture}
            onChange={updateFormData}
          />


          <StyledInput
            name="date"
            type="text"
            placeholder="Date"
            ref={register}
            value={formData.date}
            onChange={updateFormData}
          ></StyledInput>

        </FormWrapper>
        <div>
          <StyledButton type="submit">Publier</StyledButton>
        </div>
      </StyledForm>
    </Wrapper >
  )
}

export default ArticleForm

const Wrapper = styled.div`
  display: ${({ addMode, editArticleMode }) => addMode ? 'flex' : editArticleMode ? 'flex' : 'none'};
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
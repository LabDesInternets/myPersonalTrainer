import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import StyledInput from '../../cors/StyledInput'
import StyledButton from '../../cors/StyledButton'
import { device } from '../../cors/ResponsiveSettings'
import moment from 'moment'

const now = moment().utc().toDate()

const urlAddArticle = `/api/blog/articles/add`
const urlUpdateArticle = `/api/blog/articles/edit`

const ArticleForm = (props) => {
  console.log("now ", now)
  const { addMode, dataToEdit, editMode, editArticleMode } = props
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    text: '',
    articleImage: '',
    date: ''
  });
  const { register, handleSubmit } = useForm()
  const refresh = () => window.location.reload()

  useEffect(() => {
    if (dataToEdit) setFormData(dataToEdit);
  }, [dataToEdit])


  const updateFormData = event => {
    console.log("form ", typeof event.target.value)
    if (event.target.name === 'articleImage') {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0]
      })
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    }
  }

  const onSubmit = async (data) => {
    const dataToSend = new FormData()
    Object.keys(formData).map(key => {
      if (key !== "articleImage") {
        dataToSend.append(`${key}`, formData[key])
      }
    })
    dataToSend.append('articleImage', data.articleImage[0])

    if (editMode) {
      try {
        const response = await fetch(`${urlUpdateArticle}/${dataToEdit.id}`, {
          method: 'PUT',
          body: dataToSend
        })
        refresh()
      } catch (error) {
        console.log("ooops ! => ", error);
      }
    } else {
      try {
        const response = await fetch(urlAddArticle, {
          method: 'POST',
          body: dataToSend
        })
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
            name="articleImage"
            type="file"
            placeholder="Picture"
            ref={register}
            value={formData.file}
            onChange={updateFormData}
            height='3rem'
          />


          <StyledInput
            name="date"
            type="date"
            min="2020-01-01"
            max={now}
            placeholder="Date"
            ref={register}
            value={formData.date}
            onChange={updateFormData}
            required
            height='3rem'
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
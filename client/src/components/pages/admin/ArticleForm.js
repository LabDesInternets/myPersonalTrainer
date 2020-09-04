import React, { useState, useEffect, useContext } from 'react'
import { BlogContext } from '../../../context/BlogContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { setLocale } from 'yup';
import styled from 'styled-components'
import StyledInput from '../../cors/StyledInput'
import StyledButton from '../../cors/StyledButton'
import { device } from '../../cors/ResponsiveSettings'



const now = new Date().toISOString().split("T")[0]

const urlAddArticle = `/api/blog/articles/add`
const urlUpdateArticle = `/api/blog/articles/edit`

setLocale({
  mixed: {
    notType: "Avec une ${path} c'est encore mieux",
  }
})


const articleFormValidation = yup.object().shape({
  title: yup.string()
    .min(2, "Un titre court c'est efficace mais moins de 2 caractères ça ne passe pas!")
    .max(50, "Ce titre semble excessivement long, soyons raisonnable, moins de 50 caractères.")
    .required("Tout article digne de ce nom mérite un bon titre"),
  description: yup.string()
    .min(2, "Une bonne description nécessite plus de 2 caractères!")
    .max(150, "Une bonne description ne doit pas dépasser 50 caractères!")
    .required("Une description est requise"),
  text: yup.string()
    .required("Un peu de sérieux! le texte est nécessaire pour publier un article"),
  // articleImage: yup.object().shape({
  //   name: yup.string()
  // }).label('image')
});



const ArticleForm = (props) => {

  const { articles, setArticles } = useContext(BlogContext)
  const { addMode, dataToEdit, editMode, editArticleMode } = props
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    text: '',
    articleImage: '',
    date: ''
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(articleFormValidation)
  });


  const refresh = () => window.location.reload()

  useEffect(() => {
    if (dataToEdit) setFormData(dataToEdit);
  }, [dataToEdit])


  const updateFormData = event => {
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
          <p>{errors.title?.message}</p>

          <StyledInput
            name="description"
            type="text"
            placeholder="Description"
            ref={register}
            value={formData.description}
            onChange={updateFormData}
          />
          <p>{errors.description?.message}</p>

          <STextArea
            name="text"
            type="text"
            placeholder="Texte"
            ref={register}
            value={formData.text}
            onChange={updateFormData}
          />
          <p>{errors.text?.message}</p>

          <StyledInput
            name="articleImage"
            type="file"
            placeholder="Picture"
            ref={register}
            value={formData.file}
            onChange={updateFormData}
            height='3rem'
          />
          <p>{errors.articleImage?.message}</p>

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
          <p>{errors.date?.message}</p>
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

  p{
    color: #ff5a5f;
  }

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
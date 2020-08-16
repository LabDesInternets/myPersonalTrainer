import React, { useContext, useState } from 'react'
import axios from 'axios'
import { BlogContext } from '../../../context/BlogContext'
import { UserContext } from '../../../context/UserContext'
import Table from '../../cors/Table'
import Container from '../../cors/Container'
import { Edit, Add, Erase, Close } from 'grommet-icons';
import ArticleForm from './ArticleForm'

const urlDeleteArticle = `/api/blog/articles/delete`

const Admin = () => {

  const { articles } = useContext(BlogContext)
  const { users } = useContext(UserContext)
  const [addMode, setAddMode] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editArticleMode, setEditArticleMode] = useState(false)
  const [articleToEdit, setArticleToEdit] = useState("");
  const refresh = () => window.location.reload()

  const deleteArticle = async (articleId) => {
    try {
      const response = await axios.delete(`${urlDeleteArticle}/${articleId}`)
      console.log(response);
      refresh()
    } catch (error) {
      console.log("ooops ! => ", error);
    }
  }

  const editArticle = async (articleData) => {
    setEditArticleMode(true);
    setArticleToEdit(articleData);
  }

  return (
    <Container padding="5rem 2rem" width="100vw">
      <Container fD='row' width='18rem' jC='space-around'>
        <div>Liste des articles du blog</div>
        <Add onClick={() => setAddMode(true)} size='medium' color='#FB3640' />
        <Edit onClick={() => setEditMode(true)} size='medium' color='#FB3640' />
        <Erase onClick={() => setDeleteMode(true)} size='medium' color='#FB3640' />
        <Close onClick={() => { setAddMode(false); setDeleteMode(false); setEditMode(false); setEditArticleMode(false) }} size='medium' color='#FB3640' />
      </Container>
      <div>
        {editMode && editArticleMode &&
          <ArticleForm data={articleToEdit} addMode={addMode} editMode={editMode} editArticleMode={editArticleMode} />
        }
        <ArticleForm addMode={addMode} editMode={editMode} />
        <div>
          <Table data={articles} editMode={editMode} deleteMode={deleteMode} handleEdit={editArticle} handleDelete={deleteArticle}></Table>
        </div>
      </div>
      <Container fD='row' width='18rem' jC='space-around'>
        <div>Liste des utilisateurs</div>
        <Add onClick={() => setAddMode(true)} size='medium' color='#FB3640' />
        <Edit onClick={() => setEditMode(true)} size='medium' color='#FB3640' />
        <Erase onClick={() => setDeleteMode(true)} size='medium' color='#FB3640' />
        <Close onClick={() => { setAddMode(false); setDeleteMode(false); setEditMode(false); setEditArticleMode(false) }} size='medium' color='#FB3640' />
      </Container>
      <div>
        <div>
          <Table data={users}></Table>
        </div>
      </div>
    </Container>

  )
}

export default Admin

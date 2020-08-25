import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const urlBlog = `api/blog/articles`

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {

  const [articles, setArticles] = useState()

  const getArticles = () => {
    axios.get(urlBlog)
      .then(function (response) {
        console.log('articles from blogContext ', response.data)
        setArticles(response.data);
      })
      .catch(function (error) {
        console.log("ooops ! => ", error)
      })
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <BlogContext.Provider
      value={{ articles, setArticles }}
    >
      {children}
    </BlogContext.Provider>
  )

}

export default BlogProvider

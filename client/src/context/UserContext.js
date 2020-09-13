import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const urlUser = `api/users`

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [users, setUsers] = useState([])

  const getUsers = () => {
    axios.get(urlUser)
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log("ooops ! => ", error)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <UserContext.Provider
      value={{ users, setUsers }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

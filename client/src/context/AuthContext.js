import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const existingToken = sessionStorage.getItem('xAuth');
  const [authToken, setAuthToken] = useState(existingToken);

  const setToken = (data) => {
    sessionStorage.setItem('xAuth', data);
    setAuthToken(data);
  }


  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken: setToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider


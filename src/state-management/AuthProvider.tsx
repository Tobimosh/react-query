import React, { ReactNode, useReducer } from 'react'
import { loginReducer } from '../react-query/reducer/loginReducer';
import UserContext from './context/userContext';


interface Props {
    children: ReactNode
}
const AuthProvider = ({children} :Props) => {
        const [user, userDispatch] = useReducer(loginReducer, "");

  return (
    <UserContext.Provider value={{user, userDispatch}}>
        {children}

    </UserContext.Provider>
 
  )
}

export default AuthProvider

import React, { useState } from 'react'
import { UserContext } from './UserContext'
/* const User={
    id:1234,
    name:'vixuelo',
    email:'vixuelo@mail.com'
} */
export const UserProvider = ({children}) => {
  const [user, setUser] = useState();
  return (
/*     <userContext.Provider value={{hola:'mundo', user:User}}>*/
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

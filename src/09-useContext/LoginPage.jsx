import React, { useContext, useState } from 'react'
import { UserContext } from './context/UserContext';


export const LoginPage = () => {

  const {user,setUser} = useContext(UserContext);
 /*  const {userLocal,setUserLocal} = useState({ name: '', email: '', id: '' });

  const getForm=()=>{
    
    setUser(userLocal);
  }
  const onNombreChange=({target})=>{
    setUserLocal({...userLocal, name:target.value});
  }
  const onMailChange=({target})=>{
    setUserLocal({...userLocal, mail:target.value});
  } */
  /*  const onIdChange = ({target}) => {
    console.log(target)
    /* setUserLocal({ ...userLocal, id: target.value }); 
  }*/
  return (
    <>
    <h1>LoginPage</h1>
    <hr />
    {/* <input name="nombre" type="text" placeholder='nombre' onChange={()=>onNombreChange(event)} value=""/>
    <input name="email" type="text" placeholder='email'onChange={()=>onMailChange(event)} value=""/>
    <input name="id"type="text" placeholder='id'onChange={()=>onIdChange(event)} value=""/> */}
    <pre aria-label='pre'>
      {JSON.stringify(user)}
    </pre>
    <button aria-label='submit' onClick={()=>setUser({id:1234,name:'benancio', email:'beni@email.com'})}>
      Establecer usuario
    </button>
</>
  )
}

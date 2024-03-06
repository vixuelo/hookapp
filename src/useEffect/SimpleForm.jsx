import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        username:"javier",
        email:"jcuberom@emeal.com"
    })
    const {username,email}=formState;
    const onInputChange=({target})=>{
        const {name,value}=target
        setformState({...formState, [name]:value})

    }
    useEffect(() => {
/*     console.log('Pagina cargada')
 */    
     
    }, []);
    useEffect(() => {/*  */
/*       console.log('Formulario modificado')
 */    
     
    }, [formState]);
    useEffect(() => {
/*       console.log('mail modificado')
 */    
     
    }, [email]);
    useEffect(() => {
/*       console.log('usuario modificado')/*  */
     
    }, [username]);
    
  return (

    <>
        <h1>
            Formulario Simple
        </h1>
        <hr />
        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange
        }
        />
        <input type="email"
         className="form-control mt-2"
         placeholder="nombre@emeal.com"
         name="email"
         value={email}
         onChange={onInputChange
         }/>
        {
            (username==='javier')&&<Message/>}
    </>
  )
}

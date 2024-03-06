import { useEffect, useState } from "react"
import { Message } from "./Message";

export const FormWithCustomHooks = () => {

    const{formState,onInputChange, onReset}=useForm({
        username:"pepe",
        email:"pep@mail.com",
        password:"1234"
    });
    const {username,email,password}=formState;
    
   
    
  return (

    <>
        <h1>
            Formulario custom
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
         placeholder="email"
         name="email"
         value={email}
         onChange={onInputChange
         }/>
         <input type="password"
          className="form-control mt-2"
          placeholder="contraseña"
          name="password"
          value={password}
          onChange={onInputChange
          }/>
          <button className="btn btn-primary" onClick={onReset}> borrar</button>
    </>
  )
}

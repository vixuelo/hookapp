import { useState } from "react"

export const useForm = (initialform={}) => {

    const [formState, setformState] = useState(initialform)
    const onReset =()=>{
        setformState(initialform)
    }
    const onInputChange=({target})=>{
        const {name,value}=target
        setformState({...formState, [name]:value})

    }
  return {...formState,
    formState,
    onInputChange,
    onReset
  }
}

import { useState } from "react"

export const useCounter = (initialValue=10) => {
    const [Counter, setCounter] = useState(initialValue)
    const increment = (value=1)=>{
        setCounter((current)=>current+value)
    }
    const decrement = (value=1)=>{
        setCounter((current)=>current-value)
    }
    const reset = ()=>{
        setCounter(initialValue)
    }
    return{

        Counter:Counter,
        decrement:decrement,
        increment:increment,reset:reset
    }
  
}




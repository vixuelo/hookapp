import { useMemo } from "react"
import { useCounter } from "../hooks/useCounter"
import { SmallItem } from "./SmallItem"


const heavyStuff = (iterationNumbrer=100)=>{

  for (let index = 0; index < iterationNumbrer; index++) {
    console.log("hola :)")
    
  }
  return `${iterationNumbrer} iteraciones realizadas`
}
export const MemoHook = () => {
  const{Counter,decrement,increment}= useCounter(4000)
  const memoValue=useMemo(() => heavyStuff(Counter), [Counter])
    return (
    <>
        <h1>counter: <small>{Counter}</small></h1>
        <hr />
        <h4>{heavyStuff(Counter)}</h4>
        <button
            className="btn btn-primary"
        
            onClick={()=>increment()}
        >
            +1
        </button>
    </>
  )
}

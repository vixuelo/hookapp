import { useCounter } from "../hooks/useCounter"
import { SmallItem } from "./SmallItem"

export const Memorize = () => {
  const{Counter,decrement,increment}= useCounter(1)
    return (
    <>
        <h1>counter: <SmallItem Counter={Counter}/></h1>
        <hr />
        <button
            className="btn btn-primary"
        
            onClick={()=>increment()}
        >
            +1
        </button>
    </>
  )
}

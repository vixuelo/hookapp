import React, { useState } from 'react'

export const CounterApp = () => {
    const [state, setcounter] = useState({
      counter1:1,
      counter2:2,
      counter3:3
    })
    const{counter1,counter2,counter3}=state;
  return (

    <>
    <h1>
        counter: {counter1}
    </h1><h1>
        counter: {counter2}
    </h1><h1>
        counter: {counter3}
    </h1>
    <button className='btn' onClick={()=>{
        setcounter({
          ...state,
          counter1:counter1+1
        })
    }}>
        +1
    </button>
    </>
  )
}

import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
    const [counter, setcounter] = useState(10);
   const increment= useCallback(
      (incValue) => {
        
        setcounter((value)=>value+incValue);
      },
      [],
    )
    
    
  return (
    <>
        <h1>
            useCallBack Hook:{counter}

        </h1>
        <hr />
        <ShowIncrement increment={increment}/>

    </>
  )
}

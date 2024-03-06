import { useEffect, useState } from "react"

export const Message = () => {
    
        const [coords, setcoords] = useState({
            x:0,y:0
        })
useEffect(() => {
    const onMouseEvent = ({x,y})=>{
            setcoords({x,y})

    }
    window.addEventListener('mousemove',onMouseEvent
     )
  return () => {
    console.log('msg unmounted')

  }
}, [])

  return (
    <>
        <h3>
            user existente
        </h3>
        {JSON.stringify(coords)}
    </>
  )
}

import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({id, name, sprites=[]}) => {
  
  
  const imgRef =useRef();
  const [boxSize, setboxSize] = useState({
    w:0,
    h:0
  })
useLayoutEffect(() => {
  console.log(imgRef.current.getBoundingClientRect())
  const {height,width}=imgRef.current.getBoundingClientRect();
  setboxSize({w:width,h:height})

  
}, [name])
  return (

     
    <>
    <section

        className="blockquote text-end"
        style={{display:'flex' }}

    
    >
    <h2 className="test-capitalize" >
        #{id}-{name}</h2>
        <div ref={imgRef}>
        {sprites.map(sprite=>(
            <img key={sprite} src={sprite} alt={name}/>
        ))}
        </div>
    </section>
    <code>
      {JSON.stringify(boxSize)}
    </code>
    </>
  )
}

import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();
    const onClick=()=>{
/*         document.querySelectorAll('input', 2).select();
 */   inputRef.current.select();
}
  return (
    <>
        	<h1>Focus Screen</h1>
            <hr />
            <input 
            ref={inputRef}
            type="text"
                    placeholder="Nombre
                    " 
                    className="form-control"/><input type="text"
                    placeholder="Nombre
                    " 
                    className="form-control"/><input type="text"
                    placeholder="Nombre
                    " 
                    className="form-control"/><input type="text"
                    placeholder="Nombre
                    " 
                    className="form-control"/>
            <button
            
                className="btn btn-primary mt-2"
            onClick={onClick}
                >set Focus</button>
    
    </>
  )
}

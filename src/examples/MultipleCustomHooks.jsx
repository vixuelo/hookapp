import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';
export const MultipleCustomHooks = () => {
  const {Counter, decrement, increment}= useCounter(1);
  const {data, hasError,isLoading}=useFetch(`https://pokeapi.co/api/v2/pokemon/${ Counter }`);
  return (
    
    <>
     <h1>
        informacion de pokemon

     </h1>
      <hr />

      {isLoading?<LoadingMessage/>:<PokemonCard 
        id={Counter}
        name={data.name} sprites={[
          data.sprites.front_default,
          data.sprites.front_shiny,
          data.sprites.back_default,
          data.sprites.back_shiny,

        ]}
      />}
      {hasError&&<p>Fallo en la peticion</p>}

      
      <button className="btn btn-primary" onClick={()=> Counter >1 ?decrement(): null}>
        anterior
      </button>
      <button  className="btn btn-primary" onClick={()=>increment()}>
        siguiente
      </button>
   </>
  )
}


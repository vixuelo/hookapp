import React from 'react'

export const CounterWithCustomHooks = () => {

    const {
        Counter, decrement, increment,reset} = useCounter(10)
  return (
    <>
        <h1>counter custom hooks:{Counter}</h1>

        <button className='btn btn-primary' onClick={() => {     increment()        }}>+1</button>
        <button className='btn btn-primary' onClick={() => {     reset()            }}>rst</button>
        <button className='btn btn-primary' onClick={() => {     decrement()        }}>-1</button>
    </>
  )
}

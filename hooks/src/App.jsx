import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]= useState(15)

  const addValue= () => {
    if(counter<20){
    setCounter(counter+1)
    }
  }

  const removeValue= () =>{
    if(counter>0){
    setCounter(counter-1)
    }
  }


  return (
    <>
     <h1>Hello, {counter}</h1>
     <button
     onClick={addValue}>Add value {counter}</button>
     <br></br>
     <button
     onClick={removeValue}>Remove value{counter}</button>
     <footer>{counter}</footer>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"akshat",
    age:19
  }


  return (
    <>
     <h1 className='bg-green-500 text-white p-4 mb-3'>
      Hello world!
    </h1>
    <Card username='aks' titletxt='hi'></Card>
    <Card username='bindal' titletxt='ok'></Card>
    </>
  )
}

export default App

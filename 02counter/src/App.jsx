import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  //let counter = 15

  const addVal = () => {
   setCounter(counter + 1)
  }
  const subVal = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>react course with hitesh: {counter}</h1>
    <h2>Counter value:{counter}</h2>
    <button 
    onClick={addVal}>add value</button>{" "}
    <button
    onClick={subVal}>remove value</button>
    <p>footer:{counter} </p>
    </>
  )
}

export default App

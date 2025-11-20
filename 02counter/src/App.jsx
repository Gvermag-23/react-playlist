import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [counter,setCounter]=useState(15)
const addValue=()=>{
  // console.log(counter);
  setCounter(counter+1)
}
 
const removevalue=()=>{
setCounter(counter-1)
}

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>
     <button onClick={addValue}>add value {counter}</button><br />
     <button onClick={removevalue}>decrease value{counter}</button>
    </>
  )
}

export default App

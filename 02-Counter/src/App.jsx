import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  /*let counter = 10;
  const addValue = () => {
    //console.log("Value Added",Math.random());
    console.log("Clicked",counter);
    counter=counter+1;
  } */
 let [counter,setCounter]=useState(10) // variable and function
 //let counter =10;
 const addValue = ()=>{
  setCounter(counter+1);
  // counter = counter+1;
 }
 const removeValue = ()=>{
  setCounter(counter-1);
 }
  return (
   <>
   <h1>Counter App</h1>
   <h2> Counter Value:{counter}</h2> <br></br>
   <button onClick={addValue}>Add Value</button>
   <button onClick={removeValue}>Remove Value</button>

   </>
  )
}

export default App


import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
/*function MyApp(){
  return(
    <div>
    <h1> Hello, React It's me Bipin!</h1>
    </div>
  )
} */
/*const reactElement ={
  type:'a',
  props:{
    href:'https://www.google.com',
    target:'_blank'
  },
  children:'Click me to visit to Google'
} */
const anotheruser = "Bipin Acharya"

const anotherElement = (
  <div>
    <a href="https://www.google.com" target="_blank">Click me to visit to Google</a>
    <p>{anotheruser}</p>
  </div>
)

const reactElement = React.createElement('a',
  {href:'https://www.google.com', target:'_blank'},
  'Click me to visit to Google!'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

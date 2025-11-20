
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return(
    <div><h1>shivam</h1></div>
  )
}

// const reactElement={
//     type:'a',
//     props:{
//         href:'htps://google.com',
//         target:'_blank'
//     },
//     Children:'click to me visti google'
// }


// way of crating that creat underztand
const anotheruser="chai aur react" 
const reactElement=React.createElement(
    'a', // tag
     {href:'https://google.com'},// href
      'click me to vist google', // direct text
      anotheruser
)

const anotherElement=(
  <a href="http://google.com" target='_blank'>vist google</a>
)
ReactDOM.createRoot(document.getElementById('root'))
.render(
    // <App />
    // Myapp()
    // <Myapp/>

    reactElement
    // anotherElement


)


// in vite u can only one tag use inside render only one element
// example,- h1,br,li etc.

// vite ki baat ko mann lo 
// ki ek tag hona chaiye
// pr usne yae to nhi bola ek tag ke ander nhi use kr 
// sljte

// ya div ke ander rhk doo
// ya phir empty tag use kro
// <> </>

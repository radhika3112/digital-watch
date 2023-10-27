import React from 'react'
import { useState } from 'react';

function App() {
  
    let time=new Date().toLocaleTimeString();
 const[ctime,setCtime]=useState(time)
  function update()
  {
     time=new Date().toLocaleTimeString();
     setCtime(time)
  }
  setInterval(update,1000)
  return (
    <div>
      <h1>{ctime}</h1>
    </div>
  )
}

export default App

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(100)

  const btnClicked1 = () => {
    setnum(10)
    console.log("button1 is Clicked....")
  }

  useEffect(function(){
    console.log("button2 is Clicked....")
  }, [num2])

  return(
    <div>
      <h1>num1: {num1}</h1>
      <h1>num2: {num2}</h1>

      <button onClick={()=>{
        setnum1(num1+1)
      }} onDoubleClick={()=>{
        setnum2(num2+10)
      }}>Click</button>

    </div>
  )
}

export default App
import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("Aman")

  const formSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted", title)

    setTitle("")
  }

  return(
    <div>
      <form onSubmit={(e)=>{
        formSubmit(e)
      }}>
        <input type="text" placeholder='Enter Here' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

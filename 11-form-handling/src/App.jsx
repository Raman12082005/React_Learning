import React from 'react'

const App = () => {
  const formHandller = (e) => {
    e.preventDefault(e)
    console.log("Form Submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formHandller(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

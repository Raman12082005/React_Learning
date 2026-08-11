import React, {useState} from 'react'

const App = () => {
  const [num, setnum] = useState({name : "Aman", age : 20})
  const btnClicked = () => {
    setnum(prev=>({...prev, age : 30}))
  }

  return (
    <div>
      <h1>{num.name}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App

import React, {useState} from 'react'

const App = () => {
  const [a, seta] = useState(0)

  function incr(){
    seta(a+1);
  }
  const decr = ()=>{
    seta(a-1);
  }

  return (
    <div>
      <h1>value of a is {a}</h1>
      <button onClick={incr}>increase</button>
      <button onClick={decr}>decrease</button>
      <button onClick={()=> {
        seta(a+5)
      }}>jump by 5</button>
    </div>
  )
}

export default App

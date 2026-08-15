import React from 'react'
import axios from 'axios'

const App = () => {
  async function getData1(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(response)
  }

  const getData2 = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(response)
    
    const data = await response.json()
    console.log(data)
  }

  const getData3 = async () =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    console.log(response.data['id'])
    console.log(response.data['title'])
    console.log(response.data['userId'])
  }

  return(
    <div>
      <button onClick={getData3}>Get Data</button>
    </div>
  )
}

export default App
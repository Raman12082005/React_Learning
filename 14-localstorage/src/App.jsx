import React from 'react'

const App = () => {

  localStorage.clear()
  sessionStorage.clear()

  localStorage.setItem('user' , 'Aman')
  localStorage.setItem('age', 27)

  let user = localStorage.getItem('user')
  let age = localStorage.getItem('age')

  console.log(`${user}'s age is ${age}`)
  
  localStorage.removeItem('user')

  const name = {
    'username' : "Aman",
    'Age' : 27,
    'city' : "Alwar"
  }

  localStorage.setItem('user', JSON.stringify(name))

  let user1 = JSON.parse(localStorage.getItem('user'))
  console.log(user1)

  return(
    <div>
      App
    </div>
  )
}

export default App

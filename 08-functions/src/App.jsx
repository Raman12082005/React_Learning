import React from 'react'

const App = () => {

  const onMoving=(val)=>{
    console.log(val)
  }

  function handleWheel(val){
    console.log(val)
  }

  return (
    <div onWheel={(elem)=>{
      onMoving(elem.pageX)
    }} onClick={function(elem){
      handleWheel(elem.pageX)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App

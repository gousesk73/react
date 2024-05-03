import React, { useState } from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'

const App = () => {

  const [isGameStarted, setisGameStarted] = useState(true)

  const togglePlay = ()=>{
    setisGameStarted((prev) => !prev)
  }

  return (
    <>
      {isGameStarted ? <GamePlay/>:<StartGame toggle = {togglePlay}/>}
    </>
  )
}

export default App
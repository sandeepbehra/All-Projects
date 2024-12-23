import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './components/StartGame'
import { GamePlay } from './components/GamePlay'

function App() {

  function doStart()
  {
    setisStart(!isStart)
  }

  const[isStart ,setisStart] = useState(false)
 return( 
    <>

    <StartGame></StartGame>
{/*              
             {
              isStart ? <StartGame doStart = {doStart}></StartGame> : <GamePlay></GamePlay>
             } */}
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Navigation } from './components/Navigation'
import { Bodysection } from './components/Bodysection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navigation/>
   <Bodysection/>
    </>
  )
}

export default App

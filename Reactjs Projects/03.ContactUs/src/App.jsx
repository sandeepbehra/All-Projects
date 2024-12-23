import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/navigations/Navigation'
import Contactheader from './components/ContactHeaders/contactheader'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  

  return (
    <>
     <Navigation/>
     
     <div className='for_siding'>
     <Contactheader/>
     <ContactForm/>
     </div>
    </>
  )
}

export default App

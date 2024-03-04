import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Pages/Landing'
import NavBar from './components/navBar'
import Fetchcomponents from './Pages/Fetchcomponents'

function App() {
  return (
    <>
    <NavBar/>
    <Landing/>
    <Fetchcomponents/>
    </>
  )
}

export default App

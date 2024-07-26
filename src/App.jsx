import { useState } from 'react'
import NavBar from './NavBar'
import Background from './Background'
import Home from './Home'
import Contact from './Contact'
import Skills from './Skills'
import './App.css'

function App() {

  return (
    <>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* <NavBar /> */}
      {/* <Home /> */}
      <Skills/>
      {/* <Contact /> */}
      </div>
    </>
  )
}

export default App

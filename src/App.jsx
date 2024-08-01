import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar'
import Background from './Background'
import Home from './Home'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects' 
import About from './About'
import './App.css'

function App() {

  return (
    <>
     
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <NavBar />
       {/* <Routes>
        <Route path="/Home" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/Skills" element={<Skills />} />
				<Route path="/Contact" element={<Contact />} />
       </Routes> */}
      <Home />  
      <About />
      <Projects />
      <Skills/> 
      <Contact />
      </div>
    </>
  )
}

export default App

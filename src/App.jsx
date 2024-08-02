import { Routes, Route, Navigate } from "react-router-dom";
import { useState ,useEffect } from "react";
import NavBar from './NavBar'
import Background from './Background'
import Home from './Home'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects' 
import Preloader from "./Preloader";
import About from './About'
import ScrollToTop from "./ScrollRToTop";
import './App.css'

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <Preloader load={load} /> */}
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <NavBar />
      <ScrollToTop />
       <Routes>
        <Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/Skills" element={<Skills />} />
				<Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/"/>}/>
       </Routes>
      </div>
    </>
  )
}

export default App

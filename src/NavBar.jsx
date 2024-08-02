import React from 'react';
import { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
function NavBar(){
    const [clicked, setClicked] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) { // Change 50 to the scroll distance you want
          setIsScrolled(true);
        } else {  
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <div className={`nav ${isScrolled? "scrolled" :""}`}>
            {/* <div className="logo">
                logo
            </div> */}
            <div className="nav-items">
                <div className="nav-item"> 
                    <NavLink to="/" exact className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/About" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/Projects" className={({ isActive }) => (isActive ? 'active-link' : '')}>Projects</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/Skills" className={({ isActive }) => (isActive ? 'active-link' : '')}>Skills</NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact</NavLink>
                </div>
           </div>
        </div>
    );
}
export default NavBar;
import { useState,useEffect } from 'react';
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
                    <a href="/">Home</a>
                </div>
                <div className="nav-item">
                    <a href="/About">About</a>
                </div>
                <div className="nav-item">
                    <a href="/Projects">Projects</a>
                </div>
                <div className="nav-item">
                    <a href="/Skills">Skills</a>
                </div>
                <div className="nav-item">
                    <a href="/Contact">Contact</a>
                </div>
                {/* <div className="nav-item" onClick={()=>{setClicked(!clicked)}}>
                    {clicked ? <i class="fa-solid fa-heart"  ></i>: <i class="fa-regular fa-heart" ></i> }
                </div> */}
           </div>
        </div>
    );
}
export default NavBar;
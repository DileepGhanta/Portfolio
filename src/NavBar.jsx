import { useState } from 'react';
import './NavBar.css';
function NavBar(){
    const [clicked, setClicked] = useState(false);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const navbar = document.querySelector('.nav');
    //         if (window.scrollY > 0) {
    //             navbar.classList.add('scrolled');
    //         } else {
    //             navbar.classList.remove('scrolled');
    //         }
    //     };

    //     // window.addEventListener('scroll', handleScroll);

    //     // return () => {
    //     //     window.removeEventListener('scroll', handleScroll);
    //     // };
    // }, []);
    return (
        <div className='nav'>
            {/* <div className="logo">
                logo
            </div> */}
            <div className="nav-items">
                <div className="nav-item"> 
                    <a href="/Home">Home</a>
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
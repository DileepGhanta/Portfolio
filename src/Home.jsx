import './Home.css'
function Home(){
    return( 
        <div id="Home">
            <div className="My-name">
                <h1>Hi There!
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>
                <h1>I'M <b>Dileep Ghanta</b></h1>
                <p>Web Developer with experience in Frontend Development and Machine Learning. I enjoy creating engaging Web UIs, collaborating on projects, and bringing innovative digital concepts to life. Passionate about crafting fun and interactive web experiences.</p>
                    <button className="download-resume">
                        <a href="./src/assets/DileepGhanta.pdf" download={true}>Download CV<svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="#e8eaed"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                        </a>
                    </button>
            </div>
            <div className="My-avatar">
                <img src="./src/assets/Avatar.svg" alt="" />
            </div>
        </div>
    );
}
export default Home;
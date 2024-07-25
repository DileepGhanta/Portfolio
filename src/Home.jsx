import './Home.css'
function Home(){
    return(
        <div id="Home">
            <div className="My-name">
                <h1>Hi There!
                <span class="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>
                <h1>I'M Dileep Ghanta</h1>
                <h1>Web Developer</h1>
            </div>
            <div className="My-avatar">
                <img src="./src/assets/Avatar.svg" alt="" />
            </div>
        </div>
    );
}
export default Home;
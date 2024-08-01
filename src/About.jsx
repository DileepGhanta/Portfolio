import './About.css'

function About(){
    return(
        <div id="About">
            <div className="About-Content">
                <h1>Know Who <b>I'M</b></h1>
                <div className="About-Data">
                    <p>Hi everyone! I'm a front-end developer, an ML enthusiast, and a computer science undergraduate. I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at SRM University-AP, where I have consistently achieved excellent academic results.    
                    </p>
                </div>
            </div>
            <div className="About-Image">
                <img src="./src/assets/about.png" alt="" />
            </div>
        </div>
    );

}
export default About;
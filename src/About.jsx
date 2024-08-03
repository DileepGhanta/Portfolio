import './About.css'
import about from './assets/about.png';
function About(){
    return(
        <div id="About">
            <div className="About-Content">
                <h1>Know Who <b>I'M</b></h1>
                <div className="About-Data">
                    <p>Hi everyone! I'm a front-end developer, an ML enthusiast, and a computer science undergraduate. I'm currently pursuing a Bachelor of Technology in Computer Science and Engineering at SRM University-AP, where I've consistently achieved excellent academic results.    
                    </p>
                    <div className="">
                        <p className='Quote'>"Be confident and consistent."</p>
                        <p className='QuoteBy'>- Dileep Ghanta</p>
                    </div>
                </div>
            </div>
            <div className="About-Image">
                <img src={about} alt="" />
            </div>
        </div>
    );

}
export default About;
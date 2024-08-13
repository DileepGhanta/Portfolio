import TicTacToe from './assets/Tic-Tac-Toe.png'
import OnlineQuiz from './assets/OnlineQuiz.png'
import VideoToGifConverter from './assets/VideoToGifConverter.png'
import './Projects.css'

function Projects(){
    return(
        <div id="Projects">
            <div className="project-heading">
                <h1>My Recent <b>Works</b></h1>
            </div>
            <div className="project-1 project">
                <h1>Quiz Application</h1>
                <div className="project-content">
                    <p>The Quiz Application is an interactive and engaging platform designed to test and enhance users' knowledge across various topics. It offers a user-friendly interface and a dynamic experience for both casual users and serious learners.</p>
                    <img src={OnlineQuiz} alt="" className='project-image'/>
                </div>
                <div className="project-gitHubLink">
                    <a href="https://github.com/DileepGhanta/Quiz-App" target='_blank'>GitHub</a>
                </div>
            </div>
            <div className="project-2 project">
                <h1 className='right'>Video-To-Gif Converter</h1>
                <div className="project-content">
                    <img src={VideoToGifConverter} alt="" className='project-image'/>
                    <p>This Video-To-GIF-Converter web app, built with React.js and Express.js, offers an intuitive way to convert videos to GIFs. Upload your video, set times, and generate a GIF quickly. Share your GIFs instantly after creation.</p>
                </div>
                <div className="project-gitHubLink right">
                    <a href="https://github.com/DileepGhanta/Video-To-GIF-Converter" target='_blank'>GitHub</a>
                </div>
            </div>
            <div className="project-3 project">
                <h1>Tic Tac Toe</h1>
                <div className="project-content">
                    <p>This Tic-Tac-Toe game, built with React.js, features a 3x3 grid where players alternate as "X" or "O." Each player is limited to three symbols on the board at a time; placing a fourth move removes the oldest one. Align three consecutive symbols to win.</p>
                    <img src={TicTacToe} alt="" className='project-image'/>
                </div>
                <div className="project-gitHubLink">
                    <a href="https://github.com/DileepGhanta/Tic-Tac-Toe" target='_blank'>GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
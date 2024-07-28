import './Projects.css'

function Projects(){
    return(
        <div className="Projects">
            <div className="project-1 project">
                <h1>Quiz Application</h1>
                <div className="project-content">
                    <p>The Quiz Application is an interactive and engaging platform designed to test and enhance users' knowledge across various topics. It offers a user-friendly interface and a dynamic experience for both casual users and serious learners.</p>
                    <img src="https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg" alt="" className='project-image'/>
                </div>
                <div className="project-gitHubLink">
                    <a href="">GitHub</a>
                </div>
            </div>
            <div className="project-2 project">
                <h1>Video-To-Gif Converter</h1>
                <div className="project-content">
                    <p>This Video-To-GIF-Converter web app is built using React.js and Express.js. It provides a simple and intuitive way to convert video files to GIFs. With an easy-to-use interface, you can quickly upload your video, set the start and end times, and generate a GIF from the selected portion. The app processes the video and allows you to download the resulting GIF with just one clicks. This tool is perfect for anyone looking to create GIFs from their favorite videos quickly and easily.</p>
                    <img src="https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg" alt="" className='project-image'/>
                </div>
            </div>
            <div className="project-3 project">
                <h1>Tic-Tac-Toe</h1>
                <div className="project-content">
                    <p>This Tic-Tac-Toe game, built with React.js, offers an engaging twist on the classic board game. Players alternate turns as "X" or "O" on a 3x3 grid, with each player limited to three symbols on the board at a time, causing the oldest move to be removed upon a fourth move. The game features real-time feedback for invalid moves, customizable player names, and interactive instructions accessed by pressing 'H'. The first player to align three of their symbols wins, with victory conditions and moves highlighted through dynamic animations. The app integrates SweetAlert2 for user-friendly alerts and EmailJS for additional notifications, providing an enjoyable and interactive gaming experience.</p>
                    <img src="https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg" alt="" className='project-image'/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
import './Skills.css'
import '@fortawesome/fontawesome-free/css/all.css';

function Skills(){
    return(
        <section className="Skills">
            <div className="Skill-heading">
                <h4>Professional <b>Skillset</b></h4> 
            </div>
            <div className="Skill-icons">
                <div className="icons">
                    <i className="devicon-react-original"></i>
                </div>
                <div className="icons">
                    <i className="devicon-html5-plain"></i>
                </div>
                <div className="icons">
                    <i className="devicon-css3-plain"></i>
                </div>
                <div className="icons">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path></svg>
                </div>
                <div className="icons">
                    <i className="devicon-bootstrap-plain"></i>
                </div>
                <div className="icons">     
                    <i className="devicon-nodejs-plain-wordmark"></i>
                </div>
                <div className="icons">
                    <i className="devicon-mysql-original"></i>
                </div>
                <div className="icons">
                {/* <FontAwesomeIcon icon="fa-solid fa-c" style={{color: "#ffffff",}} /> */}
                    <i className="fa-sharp fa-regular fa-c c-logo" style={{color: "#ffffff"}}></i>
                </div>
                <div className="icons">
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 16.278C11.1241 17.343 9.63879 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6C9.67492 6 11.1896 6.6863 12.278 7.79303L13.6923 6.37878C12.2418 4.91014 10.2272 4 8 4C3.58172 4 0 7.58172 0 12C0 16.4183 3.58172 20 8 20C10.1911 20 12.1764 19.1192 13.6212 17.6923L12.207 16.278Z" fill="currentColor"></path><path d="M15 9H13V11H11V13H13V15H15V13H17V11H15V9Z" fill="currentColor"></path><path d="M20 9H22V11H24V13H22V15H20V13H18V11H20V9Z" fill="currentColor"></path></svg>
                </div>
                <div className="icons">
                    <i className="devicon-python-plain"></i>
                </div>
                <div className="icons">
                    <i className="devicon-git-plain"></i>
                </div>
                <div className="icons">
                    <i className="devicon-vscode-plain"></i>
                </div>
            </div>
        </section>
    );
}

export default Skills;
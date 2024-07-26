import SendIcon from '@mui/icons-material/Send';
import './Contact.css'
function Contact(){
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return(
        <section className='Contact'>
            <div className="heading">
                <h1>Get in <b>Touch</b></h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className='inputs'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name'/>
                </div>
                <div className='inputs'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email'/>
                </div>
                <div className='inputs'>
                    <label htmlFor="msg">Message</label>
                    <textarea  id="msg" cols="30" rows="6"></textarea>
                </div>
                <div className='inputs'>
                    <button type="submit" className='button'>Send <SendIcon style={{ fontSize: 18 }}/></button>
                </div>
            </form>
            <footer>
                <div className="footer-items">
                    <p>Designed and Developed by Dileep Ghanta</p>
                </div>
                <div className="footer-items">
                    <p>Copyright © 2024 Dileep Ghanta</p>
                </div>
                <div className="footer-items">
                    <div className='socialMedia-icons'>
                        <a href="https://github.com/DileepGhanta"  target='_blank'>
                        <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/dileep-ghanta/" target='_blank'>
                        <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://x.com/DileepGhanta" target='_blank'>
                        <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Contact;
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import './Contact.css'
function Contact(){
    const handleSubmit =(e)=>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const msg = form.msg.value;
        const templateParams = {
            from_name: name,
            message: msg,
        };
        console.log("email");
        emailjs.send('service_lct5et2', 'template_0h5rr3o', templateParams, '-DXiVs_p97hZ-FORw')
        .then( res =>{
            Swal.fire({
                title: "Email Sent Successfully",
                icon: "success"
              }).then(()=>{
                form.reset();
              })
            }
        )
        .catch(err=>{
            Swal.fire({
                title: "Error Sending Email",
                icon: "error"
              });
        })
    }
    return(
        <section id='Contact'>
            <div className="heading">
                <h1>Get in <b>Touch</b></h1>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className='inputs'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' required/>
                </div>
                <div className='inputs'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' required/>
                </div>
                <div className='inputs'>
                    <label htmlFor="msg">Message</label>
                    <textarea  id="msg" cols="30" rows="6" required></textarea>
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
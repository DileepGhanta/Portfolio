import SendIcon from '@mui/icons-material/Send';
import './Contact.css'
function Contact(){
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return(
        <section className='Contact'>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id='name'/>
            <label htmlFor="email">Email</label>
            <input type="email" id='email'/>
            <label htmlFor="msg">Message</label>
            <textarea  id="msg" cols="30" rows="6"></textarea>
            <button type="submit" className='button'>Send <SendIcon/></button>
        </form>
        </section>
    );
}

export default Contact;
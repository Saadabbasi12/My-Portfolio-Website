import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa6';
import Emailjs from 'emailjs-com'; // Corrected import

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    

    Emailjs.sendForm('service_daxvvhe', 'template_ash8tgj', form.current, 'Y60PJa2C_DM1xEYWP')
    .then((result) => {
      console.log(result.text);
      // Reset the form after a successful submission
      e.target.reset();
    })
    .catch((error) => {
      console.log(error.text);
    });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__option'>
          <article className='contact__options'>
            <MdOutlineAttachEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>saadaliabbasi2347@gmail.com</h5>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
          <article className='contact__options'>
            <RiLinkedinBoxFill className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>www.linkedin.com/in/saad-ali-abbasi</h5>
            <a href='https://www.linkedin.com/in/saad-ali-abbasi-42a164289/' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
          <article className='contact__options'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>03319525595</h5>
            <a href='https://web.whatsapp.com/' target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
        </div>
        {/*end of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='Email' placeholder='Your Email' required />
          <textarea name='Message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

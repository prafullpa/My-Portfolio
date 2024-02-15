import React, { useRef } from 'react'
import './Contact.css'
import {MdMarkEmailUnread} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import emailjs from 'emailjs-com'
function Contact() {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6q77tha', 'template_p9mw5x4', form.current, '77dY_2hHUaNQRNfhw')
    e.target.reset()
  };

  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
         <div className='contact_options'>
          <article className='contact_option'>
              <MdMarkEmailUnread className='contact_icon'/>
              <h4>Email</h4>
              <h5>prafullpatidar468@gmail.com</h5>
              <a href='mailto:prafullpatidar468@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
              <BsLinkedin className='contact_icon'/>
              <h4>Linkedin</h4>
              <a href='https://www.linkedin.com/in/prafull-patidar09' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
              <BsWhatsapp className='contact_icon'/>
              <h4>WhatsApp</h4>
              <a href='https://wa.me/+919174814295' target='_blank'>Send a message</a>
          </article>
         </div>
         <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows="7" placeholder='Your Message' required/>
            <button type='submit' className='btn btn-primary'>Send Message</button>
         </form>

      </div>
    </section>
  )
}

export default Contact

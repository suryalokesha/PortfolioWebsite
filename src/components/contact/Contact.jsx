import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
    
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
        <div className='container contact_container'>
          <div className='contact_options'>
            <article className='contact_option'>
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>suryalokeshaddagalla@gmail.com</h5>
              <a href='mailto:suryalokeshaddagalla@gmail.com' target='_blank'>Send a message</a>
            </article>

            <article className='contact_option'>
              <BsWhatsapp/>
              <h4>WhatsApp</h4>
              <h5>+91 9700710551</h5>
              <a href='https://api.whatsapp.com/send?phone+919700710551' target='_blank'>Send a message</a>
            </article>
           </div>
            <form role="form" action="https://forms.un-static.com/forms/5d14c469e6c7384b6b0f3cf241745b862d543f74" method='POST'>
            <input id="name" name="name" placeholder="full name" type="text" required="" class="form-control"/>
            <input id="email" name="email" placeholder="E-mail " type="text" required="" class="form-control"/>
            <textarea id="message" name="message" rows="7" required="required" class="form-control"></textarea>
            <button type="submit" class="btn btn-primary" id="submit">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
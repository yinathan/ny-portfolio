import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    emailjs.sendForm('service_o2qdlse', 'template_aaz3n5r', form.current, '-cjKveKK6RzQmTfQe')
    }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>nathanyi112@gmail.com</h5>
            <a href='mailto:nathanyi112@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className = 'contact__option-icon'
/>
            <h4>Messenger</h4>
            <h5>nathanyi112@gmail.com</h5>
            <a href='https://m.me/nathan.yi.14'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import './contact.css'; 
import {MdOutlineEmail  } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5> imanhossain914@gmail.com</h5>
            <a href="mailto:imanhossain914@gmail.com">Send a Message</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact

import { useState } from "react";
import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import './contact.css';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_h26lbij', 'template_trcgng3', e.target, 'tfEoZ_NvQKwv_sPiO')
          .then((result) => {
            console.log('Email successfully sent!');
            // Add any success message or desired action after sending the email
          }, (error) => {
            console.log('Error sending email:', error.text);
            // Add any error handling or desired action if sending the email fails
          });
      
        // Reset the form after sending the email
        e.target.reset();

        setName('');
        setEmail('');
        setMessage('');
      };
  

    return(
        <section className="contact" id="connect">
            <h2> <span className="contact-title">Reach Out!</span></h2>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="name-email">
            <div className="name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={name}
            onChange={handleNameChange}
            required
          />
          </div>
          <div className="email">
          <label htmlFor="email">Email:</label>
          <input
          name="from_email"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          </div>
        </div>
        <div className="contact-message">
          <label name="message">Message:</label>
          <textarea
            name="message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>
        <button type="submit" value={send}>Submit</button>
      </form>
        </section>
    )
}
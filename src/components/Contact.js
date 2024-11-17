import React from 'react';
import '../styles/Contact.css'; // استيراد ملف CSS

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="page-title">Get in Touch</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="form-input" />
        <input type="email" placeholder="Your Email" className="form-input" />
        <textarea placeholder="Your Message" className="form-textarea"></textarea>
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

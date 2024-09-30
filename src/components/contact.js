import React, { useState } from 'react';
import './contact.css'; // Import the Contact specific styles

const Contact = () => {
  // Initialize form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here (e.g., send data to a server or display it)
    console.log(formData);
  };

  return (
    <section id="contact" className="contact-section">
<h2><div>
      <span>Contact</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Contact Me</span>
    </div></h2>
      <div className="contact-container"> 
      <div className="contact-card">
        <h3>JENISHA SAMLIN G</h3>
        <p>Email: <a href="mailto:samlinjenii@gmail.com">samlinjenii@gmail.com</a></p>
        <p>Phone: <a href="tel:+919489534799">9489534799</a></p>
      </div>

      
      <div className="contact-card2">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div></div>
    </section>
  );
};

export default Contact;

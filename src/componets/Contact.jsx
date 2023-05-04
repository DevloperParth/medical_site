import React from 'react';

export default function Contact() {
  return (
    <div className="container">
      <h1 className="title">Contact Us</h1>
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message"></textarea>
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

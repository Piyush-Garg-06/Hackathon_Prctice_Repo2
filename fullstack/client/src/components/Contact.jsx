import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">MyRoutes</div>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/destination">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <section className="contact-main">
        <h2>Contact Us</h2>
        <form className="contact-form" action="#" method="post">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your.email@example.com" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="glass-card">
        <h1 className="title">Get in Touch with Reblify</h1>
        <p className="description">
          Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <p className="signature">We usually respond within 24 hours 🕒</p>
      </div>
    </div>
  );
};

export default Contact;

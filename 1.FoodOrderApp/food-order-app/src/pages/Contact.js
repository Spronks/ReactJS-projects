import React from "react";
import "../styles/Contact.css";
import ContactImage from "../images/fooda.jpeg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us </h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter your Name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="name" placeholder="Enter email address" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="7"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

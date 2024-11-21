import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      {/* Text Section */}
      <div className="contact-text" data-aos="zoom-in-up">
        <p className="contact-subtitle">Newsletter</p>
        <h1 className="contact-title">Watch our Courses</h1>
        <p className="contact-description">
          Problems trying to resolve the conflict between the two major realms 
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Input Section */}
      <div className="contact-input" data-aos="zoom-in-up">
        <input type="email" placeholder="Your Email" className="email-input" />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </section>
  );
};

export default Contact;

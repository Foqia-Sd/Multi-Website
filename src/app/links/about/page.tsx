import React from 'react';
import Image from 'next/image';
import Image1 from '@/app/public/images/image.png'

const About = () => {
  return (
    <section className="about">
      <div className="about-content">

        <div className="about-img" data-aos="zoom-in-up">
          <Image src={Image1} alt="About Us" />
        </div>

        <div className="about-text" data-aos="zoom-in-up" data-aos-duration="3000">
          <div className="about-line"></div>
          <h1 className="about-title">Video in Live Action</h1>
          <p className="about-description">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics:
            Newtonian mechanics.
          </p>
          <p className="about-link">Learn More</p>
        </div>
      </div>
    </section>
  );
};

export default About;

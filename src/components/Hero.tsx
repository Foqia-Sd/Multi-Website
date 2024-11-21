import React from 'react';
import Image from 'next/image';
import HeroPoster from '@/app/public/images/hero-img.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text" data-aos="zoom-in-up">
          <p className="wlc">Welcome</p>
          <h1 className="hero-h1">Best Learning Opportunities</h1>
          <p className="hero-p">Our goal is to make online education work for everyone</p>
          <div className="hero-buttons">
            <button className="hero-join">Join Us</button>
            <button className="hero-learn">Learn More</button>
          </div>
        </div>
        <div className="hero-img" data-aos="zoom-in-up" data-aos-duration="3000">
          <Image src={HeroPoster} alt="Hero Poster" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

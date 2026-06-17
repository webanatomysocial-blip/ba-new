"use client";

import React from 'react';
import { FaSquare } from 'react-icons/fa';
import '@/css/AboutComponentsCss/AboutCTA.css';
import BlueButton from '../BlueButton';
import WhiteButton from '../WhiteButton';

export default function AboutCTA() {
  return (
    <section className="about-cta-section">
      <div className="about-cta-content">
        <p className="clients-bullet sub-para-text-white" style={{ justifyContent: 'center' }}>
          <FaSquare size={10} style={{ marginRight: '10px' }} />
          GET STARTED
        </p>
        
        <h2 className="about-cta-heading text-gradient-primary-white">
          WE'RE OVERJOYED <br /> TO DESIGN YOUR <br />
            NEXT MASTERPIECE
  
        </h2>

        <p className="about-cta-desc sub-para-text-white">
          Reach out to our team today and start building your <br /> creative projects with confidence
        </p>

        <div className="about-cta-buttons">
          <BlueButton text="Start a Project" href="/contact" />
          <WhiteButton text="Our Works" href="/portfolio" />
        </div>
      </div>
    </section>
  );
}

"use client";

import React from 'react';
import { FaSquare } from 'react-icons/fa';
import '@/css/AboutComponentsCss/AboutCTA.css';
import BlueButton from '../BlueButton';
import WhiteButton from '../WhiteButton';

export default function AboutCTA() {
  return ( 
    <section className="about-cta-section">
      <div className='get-in-touch' id='contact'>
        <span className="clients-bullet" style={{ color: 'white'}}>
          <FaSquare size={10} style={{ marginRight: '10px', color: 'white', fontSize: "12px"}} />
          GET STARTED
        </span>

        <h2 className="get-in-touch-title text-gradient-primary">
          WE'RE OVERJOYED
          <br />
          TO DESIGN YOUR
          <br />
          NEXT MASTERPIECE
        </h2>

        <p style={{color:'var(--grey-text)', textAlign:'center'}}>Reach out to our team today and start building your<br />creative projects with confidence</p>

        <div className="about-cta-buttons">
        <BlueButton
            text="Start a Project"
            href="/contact-us"
        />
        <WhiteButton
            text="Our Works"
            href="/case-studies"
        />
      </div>
      </div>
    </section>
  );
}

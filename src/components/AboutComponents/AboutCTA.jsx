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

        <h2 className="get-in-touch-title">
            <span style={{ color: 'var(--white)' }}>WE’RE OVERJOYED</span>
            <span className="text-gradient-primary">
                TO DESIGN YOUR NEXT<br />
                NEXT MASTERPIECE
            </span> 
        </h2>

        <p style={{color:'var(--grey-text)', textAlign:'center'}}>Reach out to our team today and start building your<br />creative projects with confidence</p>

        <div className="about-cta-buttons">
        <BlueButton
            text="Start a Project"
        />
        <WhiteButton
            text="Our Works"
        />
      </div>
      </div>
    </section>
  );
}

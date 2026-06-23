"use client";

import Image from "next/image";
import React from 'react';
import '../../css/HomeComponentsCss/GlobalReach.css';
import mapImg from '../../assets/images/globalmap/map.svg';
import india from '../../assets/images/HomeImages/globalReachImages/india.png';
import southAfrica from '../../assets/images/HomeImages/globalReachImages/south_africa.png';
import uk from '../../assets/images/HomeImages/globalReachImages/london.png';

export default function GlobalReach() {
  return (
    <section className="global-reach-section">
      <div className="global-reach-header">
        <div className="worldwide-label">
          <span className="bullet"></span>
          WORLDWIDE PRESENCE
        </div>
        <h2 className="global-reach-title">
          OUR GLOBAL REACH.
        </h2>
      </div>

      <div className="map-container">
        {/* Render Map SVG */}
        <img src={mapImg.src || mapImg} alt="World Map" className="world-map-img" draggable="false" />

        {/* London Pin */}
        <div className="location-pin-group pin-london">
          <div className="pin-pill">
            <span><Image src={uk} alt="Uk" width={30}/></span>
            <span className="pin-country">LONDON</span>
          </div>
          <div className="pin-dot"></div>
        </div>

        {/* India Pin */}
        <div className="location-pin-group pin-india">
          <div className="pin-pill">
            <span><Image src={india} alt="India" width={30} /></span>
            <span className="pin-country">INDIA</span>
          </div>
          <div className="pin-dot"></div>
        </div>

        {/* South Africa Pin */}
        <div className="location-pin-group pin-south-africa">
          <div className="pin-pill">
            <span><Image src={southAfrica} alt="South Africa" width={30} /></span>
            <span className="pin-country">SOUTH AFRICA</span>
          </div>
          <div className="pin-dot"></div>
        </div>
      </div>
    </section>
  );
}

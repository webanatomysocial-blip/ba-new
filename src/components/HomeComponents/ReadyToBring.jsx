"use client";

import React from 'react';
import '../../css/HomeComponentsCss/ReadyToBring.css';
import img1 from '../../assets/images/ctaCarsoule/1.avif'
import img2 from '../../assets/images/ctaCarsoule/2.avif'
import img3 from '../../assets/images/ctaCarsoule/3.avif'
import img4 from '../../assets/images/ctaCarsoule/4.avif'


// Unsplash placeholder images matching the vibe
const images = [
  { src: img1, type: "type-1" },
  { src: img2, type: "type-2" },
  { src: img3, type: "type-3" },
  { src: img4, type: "type-4" },

];

export default function ReadyToBring() {
  // We use 4 sets of images to ensure the track is always significantly wider than the screen.
  // This prevents any empty space on the right side on large monitors.
  const marqueeItems = [...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images];

  return (
    <section className="ready-to-bring-section">
      <div className="ready-to-bring-header">
        <h2 className="head-text text-gradient-primary-white">
          READY TO BRING YOUR<br/> IDEAS TO LIFE? LET'S CREATE<br/> SOMETHING IMPACTFUL<br/> TOGETHER.
        </h2>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {/* We map the array which now contains 4 full sets of images */}
          {marqueeItems.map((img, index) => (
            <div key={`item-${index}`} className={`marquee-img-wrapper ${img.type}`}>
              <img src={img.src?.src || img.src} alt="Impactful work" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
